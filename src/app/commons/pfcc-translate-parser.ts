import {TranslateDefaultParser, TranslateParser} from '@ngx-translate/core';
import {DateTime} from 'luxon';

export class PfccTranslateParser extends TranslateParser {
  private static readonly formatters = [
    {
      regex: /(.*)\.date$/,
      formatter: (date: DateTime) => date.toLocaleString(DateTime.DATE_SHORT),
    },
  ];
  private parser: TranslateParser;

  constructor() {
    super();
    this.parser = new TranslateDefaultParser();
  }

  override interpolate(expr: string | Function, params?: any): string {
    params = this.replace(params);
    return this.parser.interpolate(expr, params);
  }

  private replace(params: any): any {
    if (params == null || typeof params != 'object') {
      return params;
    }
    let paramsPatch: { [key: string]: string } = {};

    for (const pKey in params) {
      if (!params.hasOwnProperty(pKey)) {
        continue;
      }

      for (let formatter of PfccTranslateParser.formatters) {
        if (pKey.match(formatter.regex)) {
          paramsPatch[pKey.replace(formatter.regex, '$1')] = formatter.formatter(params[pKey]);
        }
      }
    }

    return {
      ...params,
      ...paramsPatch,
    };
  }

  override getValue(target: any, key: string) {
    return this.parser.getValue(target, key);
  }
}
