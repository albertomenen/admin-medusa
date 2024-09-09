import { asValue } from "awilix"
import { ContainerRegistrationKeys, isObject } from "@medusajs/utils"

export function applyEnvVarsToProcess(env?: Record<any, any>) {
  if (isObject(env)) {
    Object.entries(env).forEach(([k, v]) => (process.env[k] = v))
  }
}
