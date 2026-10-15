import type { CiProviderId } from './types'

/** Label for a single build/run link after publish, deploy, or scaffold. */
export function ciTrackBuildLabel(_provider?: CiProviderId | null, _url?: string | null): string {
  return 'Track build on GitHub →'
}

/** Label when only the workflow index URL is available. */
export function ciViewRunsLabel(_provider?: CiProviderId | null, _url?: string | null): string {
  return 'View workflow runs on GitHub →'
}

/** Shorter label for import/setup actions. */
export function ciViewRunLabel(_provider?: CiProviderId | null, _url?: string | null): string {
  return 'View workflow run →'
}

/** Label for stored lastDeployRunUrl on tenant edit view. */
export function ciViewLatestRunLabel(_provider?: CiProviderId | null, _url?: string | null): string {
  return 'View GitHub Actions run →'
}

export type { CiProviderId }
