/** CI backend for tenant pipelines (GitHub Actions only in this fork). */
export type CiProviderId = 'github_actions'

export interface CiDispatchResult {
  ok: boolean
  status: number
  error?: string
  runUrl?: string | null
  runsUrl?: string | null
  ciProvider?: CiProviderId
  /** Retried with legacy workflow inputs when the workflow file is outdated. */
  usedLegacyWorkflowInputs?: boolean
}

export interface CiJobDispatchOptions {
  /** Logical job key — mapped to workflow filename under .github/workflows/. */
  job: CiJobKey
  parameters: Record<string, string>
  /** GitHub workflow ref branch. */
  ref?: string
  /** Fallback input keys when workflow is outdated. */
  legacyParameterKeys?: string[]
}

export type CiJobKey =
  | 'tenant-deploy'
  | 'tenant-import-blog'
  | 'tenant-repo-setup'
  | 'tenant-scaffold'

const GITHUB_WORKFLOW: Record<CiJobKey, string> = {
  'tenant-deploy': 'tenant-deploy.yml',
  'tenant-import-blog': 'tenant-import-blog.yml',
  'tenant-repo-setup': 'tenant-repo-setup.yml',
  'tenant-scaffold': 'tenant-scaffold.yml',
}

export function githubWorkflowForJob(job: CiJobKey): string {
  return GITHUB_WORKFLOW[job]
}
