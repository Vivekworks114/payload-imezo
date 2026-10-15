import type { Payload } from 'payload'

import type { CiProviderId } from './types'

/** Tenant pipelines run via GitHub Actions workflows in this repo. */
export async function resolveCiProvider(_payload?: Payload): Promise<CiProviderId> {
  return 'github_actions'
}
