import {ValidatorFn} from '@angular/forms';

export const fieldsMatches: (origin: string, ...toCompare: string[]) => ValidatorFn = (origin: string, ...toCompare: string[]) => {
  return control => {
    if (toCompare == null || toCompare.length == 0) {
      console.warn('Fields to compare is not configured');
      return null;
    }

    const originalValue = control.get(origin)?.value;
    if (originalValue == null) {
      return null;
    }

    for (const field of toCompare) {
      const comparingControl = control.get(field);

      if (comparingControl == null) {
        throw new Error(`Can't find ${field} in provided form`);
      }

      const comparingValue = comparingControl.value || null;

      if (comparingValue !== originalValue) {
        return {
          fieldsMatches: `Value of ${field} (${comparingValue}) doesn't match ${origin} (${originalValue})`,
        };
      }
    }

    return null;
  };
};
