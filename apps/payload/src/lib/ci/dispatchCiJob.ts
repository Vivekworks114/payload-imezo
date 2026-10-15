import type { Payload } from 'payload'

import {
  dispatchWorkflowResilient,
  isWorkflowUnexpectedInputsError,
  workflowRunsUrl,
} from '../githubDispatch'

import { resolveCiProvider } from './resolveCiProvider'
import {
  githubWorkflowForJob,
  type CiDispatchResult,
  type CiJobDispatchOptions,
} from './types'

export type { CiDispatchResult, CiJobDispatchOptions, CiJobKey } from './types'
export { resolveCiProvider } from './resolveCiProvider'

/**
 * Dispatch a tenant pipeline job to GitHub Actions.
 */
export async function dispatchCiJob(
  opts: CiJobDispatchOptions,
  payload?: Payload,
): Promise<CiDispatchResult> {
  const provider = await resolveCiProvider(payload)
  const workflow = githubWorkflowForJob(opts.job)
  const result = await dispatchWorkflowResilient({
    workflow,
    inputs: opts.parameters,
    ref: opts.ref,
    legacyInputKeys: opts.legacyParameterKeys,
  })

  return {
    ok: result.ok,
    status: result.status,
    error: result.error,
    runUrl: result.runUrl,
    runsUrl: result.runUrl ?? workflowRunsUrl(workflow),
    usedLegacyWorkflowInputs: result.usedLegacyWorkflowInputs,
    ciProvider: provider,
  }
}

export { isWorkflowUnexpectedInputsError, workflowRunsUrl }
