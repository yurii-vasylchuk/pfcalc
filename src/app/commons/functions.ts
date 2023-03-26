import {DateObjectUnits, DateTime} from 'luxon';
import {IPfcc} from './models/common.models';

export function sumUndefined(n1: number | null | undefined,
                             n2: number | null | undefined): number | undefined {
  if (isValueAbsent(n1) && isValueAbsent(n2)) {
    return undefined;
  } else if (isValueAbsent(n1) && isDefined(n2)) {
    return n2;
  } else if (isValueAbsent(n2) && isDefined(n1)) {
    return n1;
  } else if (isDefined(n1) && isDefined(n2)) {
    return n1 + n2;
  }

  throw new Error('Illegal state');
}

export function isToday(date: DateTime): boolean {
  return date.set(atStartOfDay)
    .equals(DateTime.now().set(atStartOfDay));
}

export function isOnCurrentWeek(date: DateTime): boolean {
  return date.set(atStartOfWeek)
    .equals((DateTime.now().set(atStartOfWeek)));
}

const atStartOfDay: DateObjectUnits = {hour: 0, minute: 0, second: 0, millisecond: 0};
const atStartOfWeek: DateObjectUnits = {hour: 0, minute: 0, second: 0, millisecond: 0, weekday: 1};

function isDefined<T>(value: T | null | undefined): value is T {
  return value != null;
}

function isValueAbsent<T>(value: T | null | undefined): value is null | undefined {
  return !isDefined(value);
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

export function ceilPfcc(pfcc: IPfcc, afterDotSigns = 0): IPfcc {
  const multiplier = Math.pow(10, afterDotSigns);
  return {
    protein: pfcc.protein != null ? (Math.ceil((pfcc.protein * multiplier) as number) / multiplier) : null,
    fat: pfcc.fat != null ? Math.ceil((pfcc.fat * multiplier) as number) / multiplier : null,
    carbohydrates: pfcc.carbohydrates != null ? Math.ceil((pfcc.carbohydrates * multiplier) as number) / multiplier : null,
    calories: pfcc.calories != null ? Math.ceil((pfcc.calories * multiplier) as number) / multiplier : null,
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
