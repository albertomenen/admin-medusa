import { Outlet, useLoaderData, useParams } from "react-router-dom"

import { JsonViewSection } from "../../../components/common/json-view-section"
import { useOrder, useOrderPreview } from "../../../hooks/api/orders"
import { OrderActivitySection } from "./components/order-activity-section"
import { OrderCustomerSection } from "./components/order-customer-section"
import { OrderFulfillmentSection } from "./components/order-fulfillment-section"
import { OrderGeneralSection } from "./components/order-general-section"
import { OrderPaymentSection } from "./components/order-payment-section"
import { OrderSummarySection } from "./components/order-summary-section"
import { DEFAULT_FIELDS } from "./constants"
import { orderLoader } from "./loader"

import after from "virtual:medusa/widgets/order/details/after"
import before from "virtual:medusa/widgets/order/details/before"
import sideAfter from "virtual:medusa/widgets/order/details/side/after"
import sideBefore from "virtual:medusa/widgets/order/details/side/before"
import { ActiveOrderClaimSection } from "./components/active-order-claim-section"
import { ActiveOrderExchangeSection } from "./components/active-order-exchange-section"
import { ActiveOrderReturnSection } from "./components/active-order-return-section"
import { OrderActiveEditSection } from "./components/order-active-edit-section"

export const OrderDetail = () => {
  const initialData = useLoaderData() as Awaited<ReturnType<typeof orderLoader>>

  const { id } = useParams()

  const { order, isLoading, isError, error } = useOrder(
    id!,
    {
      fields: DEFAULT_FIELDS,
    },
    {
      initialData,
    }
  )

  // TODO: Retrieve endpoints don't have an order ability, so a JS sort until this is available
  if (order) {
    order.items = order.items.sort((itemA, itemB) => {
      if (itemA.created_at > itemB.created_at) {
        return 1
      }

      if (itemA.created_at < itemB.created_at) {
        return -1
      }

      return 0
    })
  }

  const { order: orderPreview, isLoading: isPreviewLoading } = useOrderPreview(
    id!
  )

  if (isLoading || !order || isPreviewLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    throw error
  }

  return (
    <div className="flex flex-col gap-y-3">
      {before.widgets.map((w, i) => {
        return (
          <div key={i}>
            <w.Component data={order} />
          </div>
        )
      })}
      <div className="flex flex-col gap-x-4 lg:flex-row xl:items-start">
        <div className="flex w-full flex-col gap-y-3">
          <OrderActiveEditSection order={order} />
          <ActiveOrderClaimSection orderPreview={orderPreview!} />
          <ActiveOrderExchangeSection orderPreview={orderPreview!} />
          <ActiveOrderReturnSection orderPreview={orderPreview!} />
          <OrderGeneralSection order={order} />
          <OrderSummarySection order={order} />
          <OrderPaymentSection order={order} />
          <OrderFulfillmentSection order={order} />
          {after.widgets.map((w, i) => {
            return (
              <div key={i}>
                <w.Component data={order} />
              </div>
            )
          })}
          <div className="hidden xl:block">
            <JsonViewSection data={order} />
          </div>
        </div>
        <div className="mt-2 flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[400px]">
          {sideBefore.widgets.map((w, i) => {
            return (
              <div key={i}>
                <w.Component data={order} />
              </div>
            )
          })}
          <OrderCustomerSection order={order} />
          <OrderActivitySection order={order} />
          {sideAfter.widgets.map((w, i) => {
            return (
              <div key={i}>
                <w.Component data={order} />
              </div>
            )
          })}
          <div className="xl:hidden">
            <JsonViewSection data={order} />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
