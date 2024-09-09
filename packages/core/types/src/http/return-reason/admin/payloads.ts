import { AdminReturnReason } from "./entities"

type AdminBaseReturnReasonPayload = Pick<
  AdminReturnReason,
  "value" | "label" | "description"
>

export interface AdminCreateReturnReason extends AdminBaseReturnReasonPayload {
  metadata?: Record<string, unknown> | null
}

export interface AdminUpdateReturnReason extends AdminBaseReturnReasonPayload {
  metadata?: Record<string, unknown> | null
}
