export interface IApiError {
  message: string;
}

export interface IPfcc {
  protein: number | null;
  fat: number | null;
  carbohydrates: number | null;
  calories: number | null;
}

export const emptyPfcc: IPfcc = {
  protein: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
};

export class UnknownBoolean {
  static readonly TRUE = new UnknownBoolean('TRUE');
  static readonly FALSE = new UnknownBoolean('FALSE');
  static readonly UNKNOWN = new UnknownBoolean('UNKNOWN');

  private constructor(public readonly value: string) {
  }

  public and(other: UnknownBoolean): UnknownBoolean {
    if (this == UnknownBoolean.UNKNOWN || other == UnknownBoolean.UNKNOWN) {
      return UnknownBoolean.UNKNOWN;
    } else if (this == UnknownBoolean.FALSE || other == UnknownBoolean.FALSE) {
      return UnknownBoolean.FALSE;
    } else {
      return UnknownBoolean.TRUE;
    }
  }

  public or(other: UnknownBoolean): UnknownBoolean {
    if (this == UnknownBoolean.UNKNOWN || other == UnknownBoolean.UNKNOWN) {
      return UnknownBoolean.UNKNOWN;
    } else if (this == UnknownBoolean.FALSE && other == UnknownBoolean.FALSE) {
      return UnknownBoolean.FALSE;
    } else {
      return UnknownBoolean.TRUE;
    }
  }

  public not(): UnknownBoolean {
    if (this == UnknownBoolean.UNKNOWN) {
      return UnknownBoolean.UNKNOWN;
    } else if (this == UnknownBoolean.TRUE) {
      return UnknownBoolean.FALSE;
    } else {
      return UnknownBoolean.TRUE;
    }
  }

  public get isTrue(): boolean {
    return this === UnknownBoolean.TRUE;
  }

  public get isFalse(): boolean {
    return this === UnknownBoolean.FALSE;
  }

  static of(value: boolean) {
    return value ? UnknownBoolean.TRUE : UnknownBoolean.FALSE;
  }
}
