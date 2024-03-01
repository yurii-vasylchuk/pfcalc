import {IPage, IPfcc} from './models/common.models';
import {combineLatest, map, Observable, of, OperatorFunction, switchMap} from 'rxjs';
import {DateTime} from 'luxon';

export function isToday(date: DateTime): boolean {
  const now = DateTime.now();
  return now.hasSame(date, 'year') && now.hasSame(date, 'month') && now.hasSame(date, 'day');
}


export function isDefined<T>(value: T | null | undefined): value is T {
  return value != null;
}

export function sumPfccs(...pfccs: IPfcc[]) {
  return pfccs
    .reduce((m1, m2) => {
      return {
        protein: (m1.protein || 0) + (m2.protein || 0),
        fat: (m1.fat || 0) + (m2.fat || 0),
        carbohydrates: (m1.carbohydrates || 0) + (m2.carbohydrates || 0),
        calories: (m1.calories || 0) + (m2.calories || 0),
      };
    }, {} as IPfcc);
}

export function ceilPfcc(pfcc: IPfcc, afterDotSigns = 2, caloriesAfterDotSign = 0): IPfcc {
  return {
    protein: pfcc.protein != null ? ceil(pfcc.protein, afterDotSigns) : null,
    fat: pfcc.fat != null ? ceil(pfcc.fat, afterDotSigns) : null,
    carbohydrates: pfcc.carbohydrates != null ? ceil(pfcc.carbohydrates, afterDotSigns) : null,
    calories: pfcc.calories != null ? ceil(pfcc.calories, caloriesAfterDotSign) : null,
  };
}

export function multiplyPfcc(pfcc: IPfcc, multiplier: number): IPfcc {
  return {
    protein: pfcc.protein != null ? (pfcc.protein * multiplier) : null,
    fat: pfcc.fat != null ? (pfcc.fat * multiplier) : null,
    carbohydrates: pfcc.carbohydrates != null ? (pfcc.carbohydrates * multiplier) : null,
    calories: pfcc.calories != null ? (pfcc.calories * multiplier) : null,
  };
}

export function withDefaults<T>(input: Partial<T>, defaults: T): T {
  const result = {...input};
  for (const key in defaults) {
    if (result[key] == null) {
      result[key] = defaults[key];
    }
  }

  return result as T;
}

export function ceil(value: number, afterDotSigns = 2): number {
  const multiplier = Math.pow(10, afterDotSigns);

  return Math.ceil(value * multiplier) / multiplier;
}

export function loadAllPages<T>(loadFunc: (page: number, pageSize: number) => Observable<IPage<T>>, pageSize: number): Observable<T[]> {
  return loadFunc(0, pageSize)
    .pipe(
      switchMap(page0 => {
        let loaders: Observable<T[]>[] = [];
        for (let i = 1; i < page0.totalPages; i++) {
          loaders.push(loadFunc(i, pageSize).pipe(map(page => page.data)));
        }
        return combineLatest([
          of(page0.data),
          ...loaders,
        ]);
      }),
      map(data => {
        let res: T[] = [];

        data.forEach(page => res.push(...page));

        return res;
      }),
    );
}

export const mapToVoid: () => OperatorFunction<unknown, null> = () => map(_ => null);
