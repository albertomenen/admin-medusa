/**
 * @schema AdminOrderPreview
 * type: object
 * description: The return's order preview.
 * x-schemaName: AdminOrderPreview
 * required:
 *   - return_requested_total
 *   - order_change
 *   - currency_code
 *   - version
 *   - id
 *   - region_id
 *   - customer_id
 *   - sales_channel_id
 *   - email
 *   - payment_collections
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
 *   return_requested_total:
 *     type: number
 *     title: return_requested_total
 *     description: The order preview's return requested total.
 *   order_change:
 *     $ref: "#/components/schemas/BaseOrderChange"
 *   items:
 *     type: array
 *     description: The order preview's items.
 *     items:
 *       allOf:
 *         - type: object
 *           description: The item's items.
 *           x-schemaName: BaseOrderLineItem
 *           required:
 *             - id
 *             - title
 *             - subtitle
 *             - thumbnail
 *             - variant_id
 *             - product_id
 *             - product_title
 *             - product_description
 *             - product_subtitle
 *             - product_type
 *             - product_collection
 *             - product_handle
 *             - variant_sku
 *             - variant_barcode
 *             - variant_title
 *             - variant_option_values
 *             - requires_shipping
 *             - is_discountable
 *             - is_tax_inclusive
 *             - unit_price
 *             - quantity
 *             - detail
 *             - created_at
 *             - updated_at
 *             - metadata
 *             - original_total
 *             - original_subtotal
 *             - original_tax_total
 *             - item_total
 *             - item_subtotal
 *             - item_tax_total
 *             - total
 *             - subtotal
 *             - tax_total
 *             - discount_total
 *             - discount_tax_total
 *             - refundable_total
 *             - refundable_total_per_unit
 *           properties:
 *             id:
 *               type: string
 *               title: id
 *               description: The item's ID.
 *             title:
 *               type: string
 *               title: title
 *               description: The item's title.
 *             subtitle:
 *               type: string
 *               title: subtitle
 *               description: The item's subtitle.
 *             thumbnail:
 *               type: string
 *               title: thumbnail
 *               description: The item's thumbnail.
 *             variant:
 *               $ref: "#/components/schemas/BaseProductVariant"
 *             variant_id:
 *               type: string
 *               title: variant_id
 *               description: The item's variant id.
 *             product:
 *               $ref: "#/components/schemas/BaseProduct"
 *             product_id:
 *               type: string
 *               title: product_id
 *               description: The item's product id.
 *             product_title:
 *               type: string
 *               title: product_title
 *               description: The item's product title.
 *             product_description:
 *               type: string
 *               title: product_description
 *               description: The item's product description.
 *             product_subtitle:
 *               type: string
 *               title: product_subtitle
 *               description: The item's product subtitle.
 *             product_type:
 *               type: string
 *               title: product_type
 *               description: The item's product type.
 *             product_collection:
 *               type: string
 *               title: product_collection
 *               description: The item's product collection.
 *             product_handle:
 *               type: string
 *               title: product_handle
 *               description: The item's product handle.
 *             variant_sku:
 *               type: string
 *               title: variant_sku
 *               description: The item's variant sku.
 *             variant_barcode:
 *               type: string
 *               title: variant_barcode
 *               description: The item's variant barcode.
 *             variant_title:
 *               type: string
 *               title: variant_title
 *               description: The item's variant title.
 *             variant_option_values:
 *               type: object
 *               description: The item's variant option values.
 *             requires_shipping:
 *               type: boolean
 *               title: requires_shipping
 *               description: The item's requires shipping.
 *             is_discountable:
 *               type: boolean
 *               title: is_discountable
 *               description: The item's is discountable.
 *             is_tax_inclusive:
 *               type: boolean
 *               title: is_tax_inclusive
 *               description: The item's is tax inclusive.
 *             compare_at_unit_price:
 *               type: number
 *               title: compare_at_unit_price
 *               description: The item's compare at unit price.
 *             unit_price:
 *               type: number
 *               title: unit_price
 *               description: The item's unit price.
 *             quantity:
 *               type: number
 *               title: quantity
 *               description: The item's quantity.
 *             tax_lines:
 *               type: array
 *               description: The item's tax lines.
 *               items:
 *                 $ref: "#/components/schemas/BaseOrderLineItemTaxLine"
 *             adjustments:
 *               type: array
 *               description: The item's adjustments.
 *               items:
 *                 $ref: "#/components/schemas/BaseOrderLineItemAdjustment"
 *             detail:
 *               $ref: "#/components/schemas/BaseOrderItemDetail"
 *             created_at:
 *               type: string
 *               format: date-time
 *               title: created_at
 *               description: The item's created at.
 *             updated_at:
 *               type: string
 *               format: date-time
 *               title: updated_at
 *               description: The item's updated at.
 *             metadata:
 *               type: object
 *               description: The item's metadata.
 *             original_total:
 *               type: number
 *               title: original_total
 *               description: The item's original total.
 *             original_subtotal:
 *               type: number
 *               title: original_subtotal
 *               description: The item's original subtotal.
 *             original_tax_total:
 *               type: number
 *               title: original_tax_total
 *               description: The item's original tax total.
 *             item_total:
 *               type: number
 *               title: item_total
 *               description: The item's item total.
 *             item_subtotal:
 *               type: number
 *               title: item_subtotal
 *               description: The item's item subtotal.
 *             item_tax_total:
 *               type: number
 *               title: item_tax_total
 *               description: The item's item tax total.
 *             total:
 *               type: number
 *               title: total
 *               description: The item's total.
 *             subtotal:
 *               type: number
 *               title: subtotal
 *               description: The item's subtotal.
 *             tax_total:
 *               type: number
 *               title: tax_total
 *               description: The item's tax total.
 *             discount_total:
 *               type: number
 *               title: discount_total
 *               description: The item's discount total.
 *             discount_tax_total:
 *               type: number
 *               title: discount_tax_total
 *               description: The item's discount tax total.
 *             refundable_total:
 *               type: number
 *               title: refundable_total
 *               description: The item's refundable total.
 *             refundable_total_per_unit:
 *               type: number
 *               title: refundable_total_per_unit
 *               description: The item's refundable total per unit.
 *         - type: object
 *           description: The item's items.
 *           properties:
 *             actions:
 *               type: array
 *               description: The item's actions.
 *               items:
 *                 type: object
 *                 description: The action's actions.
 *                 x-schemaName: BaseOrderChangeAction
 *   shipping_methods:
 *     type: array
 *     description: The order preview's shipping methods.
 *     items:
 *       allOf:
 *         - type: object
 *           description: The shipping method's shipping methods.
 *           x-schemaName: BaseOrderShippingMethod
 *           required:
 *             - id
 *             - order_id
 *             - name
 *             - amount
 *             - is_tax_inclusive
 *             - shipping_option_id
 *             - data
 *             - metadata
 *             - original_total
 *             - original_subtotal
 *             - original_tax_total
 *             - total
 *             - subtotal
 *             - tax_total
 *             - discount_total
 *             - discount_tax_total
 *             - created_at
 *             - updated_at
 *           properties:
 *             id:
 *               type: string
 *               title: id
 *               description: The shipping method's ID.
 *             order_id:
 *               type: string
 *               title: order_id
 *               description: The shipping method's order id.
 *             name:
 *               type: string
 *               title: name
 *               description: The shipping method's name.
 *             description:
 *               type: string
 *               title: description
 *               description: The shipping method's description.
 *             amount:
 *               type: number
 *               title: amount
 *               description: The shipping method's amount.
 *             is_tax_inclusive:
 *               type: boolean
 *               title: is_tax_inclusive
 *               description: The shipping method's is tax inclusive.
 *             shipping_option_id:
 *               type: string
 *               title: shipping_option_id
 *               description: The shipping method's shipping option id.
 *             data:
 *               type: object
 *               description: The shipping method's data.
 *             metadata:
 *               type: object
 *               description: The shipping method's metadata.
 *             tax_lines:
 *               type: array
 *               description: The shipping method's tax lines.
 *               items:
 *                 $ref: "#/components/schemas/BaseOrderShippingMethodTaxLine"
 *             adjustments:
 *               type: array
 *               description: The shipping method's adjustments.
 *               items:
 *                 $ref: "#/components/schemas/BaseOrderShippingMethodAdjustment"
 *             original_total:
 *               oneOf:
 *                 - type: string
 *                   title: original_total
 *                   description: The shipping method's original total.
 *                 - type: number
 *                   title: original_total
 *                   description: The shipping method's original total.
 *                 - type: string
 *                   title: original_total
 *                   description: The shipping method's original total.
 *                 - $ref: "#/components/schemas/IBigNumber"
 *             original_subtotal:
 *               oneOf:
 *                 - type: string
 *                   title: original_subtotal
 *                   description: The shipping method's original subtotal.
 *                 - type: number
 *                   title: original_subtotal
 *                   description: The shipping method's original subtotal.
 *                 - type: string
 *                   title: original_subtotal
 *                   description: The shipping method's original subtotal.
 *                 - $ref: "#/components/schemas/IBigNumber"
 *             original_tax_total:
 *               oneOf:
 *                 - type: string
 *                   title: original_tax_total
 *                   description: The shipping method's original tax total.
 *                 - type: number
 *                   title: original_tax_total
 *                   description: The shipping method's original tax total.
 *                 - type: string
 *                   title: original_tax_total
 *                   description: The shipping method's original tax total.
 *                 - $ref: "#/components/schemas/IBigNumber"
 *             total:
 *               oneOf:
 *                 - type: string
 *                   title: total
 *                   description: The shipping method's total.
 *                 - type: number
 *                   title: total
 *                   description: The shipping method's total.
 *                 - type: string
 *                   title: total
 *                   description: The shipping method's total.
 *                 - $ref: "#/components/schemas/IBigNumber"
 *             subtotal:
 *               oneOf:
 *                 - type: string
 *                   title: subtotal
 *                   description: The shipping method's subtotal.
 *                 - type: number
 *                   title: subtotal
 *                   description: The shipping method's subtotal.
 *                 - type: string
 *                   title: subtotal
 *                   description: The shipping method's subtotal.
 *                 - $ref: "#/components/schemas/IBigNumber"
 *             tax_total:
 *               oneOf:
 *                 - type: string
 *                   title: tax_total
 *                   description: The shipping method's tax total.
 *                 - type: number
 *                   title: tax_total
 *                   description: The shipping method's tax total.
 *                 - type: string
 *                   title: tax_total
 *                   description: The shipping method's tax total.
 *                 - $ref: "#/components/schemas/IBigNumber"
 *             discount_total:
 *               oneOf:
 *                 - type: string
 *                   title: discount_total
 *                   description: The shipping method's discount total.
 *                 - type: number
 *                   title: discount_total
 *                   description: The shipping method's discount total.
 *                 - type: string
 *                   title: discount_total
 *                   description: The shipping method's discount total.
 *                 - $ref: "#/components/schemas/IBigNumber"
 *             discount_tax_total:
 *               oneOf:
 *                 - type: string
 *                   title: discount_tax_total
 *                   description: The shipping method's discount tax total.
 *                 - type: number
 *                   title: discount_tax_total
 *                   description: The shipping method's discount tax total.
 *                 - type: string
 *                   title: discount_tax_total
 *                   description: The shipping method's discount tax total.
 *                 - $ref: "#/components/schemas/IBigNumber"
 *             created_at:
 *               type: string
 *               format: date-time
 *               title: created_at
 *               description: The shipping method's created at.
 *             updated_at:
 *               type: string
 *               format: date-time
 *               title: updated_at
 *               description: The shipping method's updated at.
 *         - type: object
 *           description: The shipping method's shipping methods.
 *           properties:
 *             actions:
 *               type: array
 *               description: The shipping method's actions.
 *               items:
 *                 type: object
 *                 description: The action's actions.
 *                 x-schemaName: BaseOrderChangeAction
 *   currency_code:
 *     type: string
 *     title: currency_code
 *     description: The order preview's currency code.
 *   version:
 *     type: number
 *     title: version
 *     description: The order preview's version.
 *   id:
 *     type: string
 *     title: id
 *     description: The order preview's ID.
 *   region_id:
 *     type: string
 *     title: region_id
 *     description: The order preview's region id.
 *   customer_id:
 *     type: string
 *     title: customer_id
 *     description: The order preview's customer id.
 *   sales_channel_id:
 *     type: string
 *     title: sales_channel_id
 *     description: The order preview's sales channel id.
 *   email:
 *     type: string
 *     title: email
 *     description: The order preview's email.
 *     format: email
 *   display_id:
 *     type: number
 *     title: display_id
 *     description: The order preview's display id.
 *   shipping_address:
 *     $ref: "#/components/schemas/AdminOrderAddress"
 *   billing_address:
 *     $ref: "#/components/schemas/AdminOrderAddress"
 *   payment_collections:
 *     type: array
 *     description: The order preview's payment collections.
 *     items:
 *       $ref: "#/components/schemas/AdminPaymentCollection"
 *   payment_status:
 *     type: string
 *     description: The order preview's payment status.
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
 *     description: The order preview's fulfillments.
 *     items:
 *       $ref: "#/components/schemas/BaseOrderFulfillment"
 *   fulfillment_status:
 *     type: string
 *     description: The order preview's fulfillment status.
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
 *     description: The order preview's transactions.
 *     items:
 *       $ref: "#/components/schemas/BaseOrderTransaction"
 *   summary:
 *     $ref: "#/components/schemas/BaseOrderSummary"
 *   metadata:
 *     type: object
 *     description: The order preview's metadata.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The order preview's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The order preview's updated at.
 *   original_item_total:
 *     type: number
 *     title: original_item_total
 *     description: The order preview's original item total.
 *   original_item_subtotal:
 *     type: number
 *     title: original_item_subtotal
 *     description: The order preview's original item subtotal.
 *   original_item_tax_total:
 *     type: number
 *     title: original_item_tax_total
 *     description: The order preview's original item tax total.
 *   item_total:
 *     type: number
 *     title: item_total
 *     description: The order preview's item total.
 *   item_subtotal:
 *     type: number
 *     title: item_subtotal
 *     description: The order preview's item subtotal.
 *   item_tax_total:
 *     type: number
 *     title: item_tax_total
 *     description: The order preview's item tax total.
 *   original_total:
 *     type: number
 *     title: original_total
 *     description: The order preview's original total.
 *   original_subtotal:
 *     type: number
 *     title: original_subtotal
 *     description: The order preview's original subtotal.
 *   original_tax_total:
 *     type: number
 *     title: original_tax_total
 *     description: The order preview's original tax total.
 *   total:
 *     type: number
 *     title: total
 *     description: The order preview's total.
 *   subtotal:
 *     type: number
 *     title: subtotal
 *     description: The order preview's subtotal.
 *   tax_total:
 *     type: number
 *     title: tax_total
 *     description: The order preview's tax total.
 *   discount_total:
 *     type: number
 *     title: discount_total
 *     description: The order preview's discount total.
 *   discount_tax_total:
 *     type: number
 *     title: discount_tax_total
 *     description: The order preview's discount tax total.
 *   gift_card_total:
 *     type: number
 *     title: gift_card_total
 *     description: The order preview's gift card total.
 *   gift_card_tax_total:
 *     type: number
 *     title: gift_card_tax_total
 *     description: The order preview's gift card tax total.
 *   shipping_total:
 *     type: number
 *     title: shipping_total
 *     description: The order preview's shipping total.
 *   shipping_subtotal:
 *     type: number
 *     title: shipping_subtotal
 *     description: The order preview's shipping subtotal.
 *   shipping_tax_total:
 *     type: number
 *     title: shipping_tax_total
 *     description: The order preview's shipping tax total.
 *   original_shipping_total:
 *     type: number
 *     title: original_shipping_total
 *     description: The order preview's original shipping total.
 *   original_shipping_subtotal:
 *     type: number
 *     title: original_shipping_subtotal
 *     description: The order preview's original shipping subtotal.
 *   original_shipping_tax_total:
 *     type: number
 *     title: original_shipping_tax_total
 *     description: The order preview's original shipping tax total.
 *   customer:
 *     $ref: "#/components/schemas/AdminCustomer"
 *   sales_channel:
 *     $ref: "#/components/schemas/AdminSalesChannel"
 * 
*/

