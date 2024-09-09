import { FulfillmentDTO, FulfillmentWorkflow } from "@medusajs/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@medusajs/workflows-sdk"
import { createFulfillmentStep } from "../steps"

export const createFulfillmentWorkflowId = "create-fulfillment-workflow"
/**
 * This workflow creates a fulfillment.
 */
export const createFulfillmentWorkflow = createWorkflow(
  createFulfillmentWorkflowId,
  (
    input: WorkflowData<FulfillmentWorkflow.CreateFulfillmentWorkflowInput>
  ): WorkflowResponse<FulfillmentDTO> => {
    return new WorkflowResponse(createFulfillmentStep(input))
  }
)
