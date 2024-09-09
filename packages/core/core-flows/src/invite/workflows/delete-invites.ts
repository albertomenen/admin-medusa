import { InviteWorkflow } from "@medusajs/types"
import { InviteWorkflowEvents } from "@medusajs/utils"
import {
  WorkflowData,
  createWorkflow,
  transform,
} from "@medusajs/workflows-sdk"
import { emitEventStep } from "../../common/steps/emit-event"
import { deleteInvitesStep } from "../steps"

export const deleteInvitesWorkflowId = "delete-invites-workflow"
/**
 * This workflow deletes one or more invites.
 */
export const deleteInvitesWorkflow = createWorkflow(
  deleteInvitesWorkflowId,
  (
    input: WorkflowData<InviteWorkflow.DeleteInvitesWorkflowInput>
  ): WorkflowData<void> => {
    deleteInvitesStep(input.ids)

    const invitesIdEvents = transform({ input }, ({ input }) => {
      return input.ids?.map((id) => {
        return { id }
      })
    })

    emitEventStep({
      eventName: InviteWorkflowEvents.DELETED,
      data: invitesIdEvents,
    })
  }
)
