import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core'

export class PfccMissingTranslationHandler implements MissingTranslationHandler {
  private readonly skipPrefixes = [
    'measurements.',
  ]

  handle(params: MissingTranslationHandlerParams) {
    const skipPrefix = this.skipPrefixes.find(prefix => params.key.startsWith(prefix))
    if (skipPrefix != null) {
      return params.key.substring(skipPrefix.length)
    }

    return null
  }
}
