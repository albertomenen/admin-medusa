/**
 * @schema StoreOrder
 * type: object
 * description: The cart's order.
 * x-schemaName: StoreOrder
 * required:
 *   - id
 *   - version
 *   - region_id
 *   - customer_id
 *   - sales_channel_id
 *   - email
 *   - currency_code
 *   - items
 *   - shipping_methods
 *   - payment_status
 *   - fulfillment_status
 *   - summary
 *   - metadata
 *   - created_at
 *   - updated_at
 *   - original_item_total
 *   - original_item_subtotal
 *   - original_item_tax_total
 *   - item_total
 *   - item_subtotal
 *   - item_tax_total
 *   - original_total
 *   - original_subtotal
 *   - original_tax_total
 *   - total
 *   - subtotal
 *   - tax_total
 *   - discount_total
 *   - discount_tax_total
 *   - gift_card_total
 *   - gift_card_tax_total
 *   - shipping_total
 *   - shipping_subtotal
 *   - shipping_tax_total
 *   - original_shipping_total
 *   - original_shipping_subtotal
 *   - original_shipping_tax_total
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The order's ID.
 *   version:
 *     type: number
 *     title: version
 *     description: The order's version.
 *   region_id:
 *     type: string
 *     title: region_id
 *     description: The order's region id.
 *   customer_id:
 *     type: string
 *     title: customer_id
 *     description: The order's customer id.
 *   sales_channel_id:
 *     type: string
 *     title: sales_channel_id
 *     description: The order's sales channel id.
 *   email:
 *     type: string
 *     title: email
 *     description: The order's email.
 *     format: email
 *   currency_code:
 *     type: string
 *     title: currency_code
 *     description: The order's currency code.
 *   display_id:
 *     type: number
 *     title: display_id
 *     description: The order's display id.
 *   shipping_address:
 *     $ref: "#/components/schemas/BaseOrderAddress"
 *   billing_address:
 *     $ref: "#/components/schemas/BaseOrderAddress"
 *   items:
 *     type: array
 *     description: The order's items.
 *     items:
 *       $ref: "#/components/schemas/BaseOrderLineItem"
 *   shipping_methods:
 *     type: array
 *     description: The order's shipping methods.
 *     items:
 *       $ref: "#/components/schemas/BaseOrderShippingMethod"
 *   payment_collections:
 *     type: array
 *     description: The order's payment collections.
 *     items:
 *       $ref: "#/components/schemas/BasePaymentCollection"
 *   payment_status:
 *     type: string
 *     description: The order's payment status.
 *     enum:
 *       - canceled
 *       - not_paid
 *       - awaiting
 *       - authorized
 *       - partially_authorized
 *       - captured
 *       - partially_captured
 *       - partially_refunded
 *       - refunded
 *       - requires_action
 *   fulfillments:
 *     type: array
 *     description: The order's fulfillments.
 *     items:
 *       $ref: "#/components/schemas/BaseOrderFulfillment"
 *   fulfillment_status:
 *     type: string
 *     description: The order's fulfillment status.
 *     enum:
 *       - canceled
 *       - not_fulfilled
 *       - partially_fulfilled
 *       - fulfilled
 *       - partially_shipped
 *       - shipped
 *       - partially_delivered
 *       - delivered
 *   transactions:
 *     type: array
 *     description: The order's transactions.
 *     items:
 *       $ref: "#/components/schemas/BaseOrderTransaction"
 *   summary:
 *     $ref: "#/components/schemas/BaseOrderSummary"
 *   metadata:
 *     type: object
 *     description: The order's metadata.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The order's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The order's updated at.
 *   original_item_total:
 *     type: number
 *     title: original_item_total
 *     description: The order's original item total.
 *   original_item_subtotal:
 *     type: number
 *     title: original_item_subtotal
 *     description: The order's original item subtotal.
 *   original_item_tax_total:
 *     type: number
 *     title: original_item_tax_total
 *     description: The order's original item tax total.
 *   item_total:
 *     type: number
 *     title: item_total
 *     description: The order's item total.
 *   item_subtotal:
 *     type: number
 *     title: item_subtotal
 *     description: The order's item subtotal.
 *   item_tax_total:
 *     type: number
 *     title: item_tax_total
 *     description: The order's item tax total.
 *   original_total:
 *     type: number
 *     title: original_total
 *     description: The order's original total.
 *   original_subtotal:
 *     type: number
 *     title: original_subtotal
 *     description: The order's original subtotal.
 *   original_tax_total:
 *     type: number
 *     title: original_tax_total
 *     description: The order's original tax total.
 *   total:
 *     type: number
 *     title: total
 *     description: The order's total.
 *   subtotal:
 *     type: number
 *     title: subtotal
 *     description: The order's subtotal.
 *   tax_total:
 *     type: number
 *     title: tax_total
 *     description: The order's tax total.
 *   discount_total:
 *     type: number
 *     title: discount_total
 *     description: The order's discount total.
 *   discount_tax_total:
 *     type: number
 *     title: discount_tax_total
 *     description: The order's discount tax total.
 *   gift_card_total:
 *     type: number
 *     title: gift_card_total
 *     description: The order's gift card total.
 *   gift_card_tax_total:
 *     type: number
 *     title: gift_card_tax_total
 *     description: The order's gift card tax total.
 *   shipping_total:
 *     type: number
 *     title: shipping_total
 *     description: The order's shipping total.
 *   shipping_subtotal:
 *     type: number
 *     title: shipping_subtotal
 *     description: The order's shipping subtotal.
 *   shipping_tax_total:
 *     type: number
 *     title: shipping_tax_total
 *     description: The order's shipping tax total.
 *   original_shipping_total:
 *     type: number
 *     title: original_shipping_total
 *     description: The order's original shipping total.
 *   original_shipping_subtotal:
 *     type: number
 *     title: original_shipping_subtotal
 *     description: The order's original shipping subtotal.
 *   original_shipping_tax_total:
 *     type: number
 *     title: original_shipping_tax_total
 *     description: The order's original shipping tax total.
 * 
*/

