import {FormGroup, ValidatorFn} from '@angular/forms';

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

export const pfccFormGroupIsNotEmpty: ValidatorFn = control => {
  if (!(control instanceof FormGroup)
  ) {
    throw new Error('This validator can be applied only to FormGroup');
  }

  const proteinControl = control.get('protein');
  const fatControl = control.get('fat');
  const carbohydratesControl = control.get('carbohydrates');
  const caloriesControl = control.get('calories');

  if (proteinControl == null || fatControl == null || carbohydratesControl == null || caloriesControl == null) {
    throw new Error('This validator can be applied only to FormGroup containing "protein", "fat", "carbohydrates" and "calories" FormControl-s');
  }

  const protein = proteinControl.value;
  const fat = fatControl.value;
  const carbohydrates = carbohydratesControl.value;
  const calories = caloriesControl.value;

  if (protein != null && typeof protein !== 'number') {
    throw Error('Protein control value is not a number');
  }
  if (fat != null && typeof fat !== 'number') {
    throw Error('Fat control value is not a number');
  }
  if (carbohydrates != null && typeof carbohydrates !== 'number') {
    throw Error('Carbohydrates control value is not a number');
  }
  if (calories != null && typeof calories !== 'number') {
    throw Error('Calories control value is not a number');
  }

  if (protein + fat + carbohydrates + calories === 0) {
    return {
      pfccIsZero: 'PFCC all zeroes',
    };
  }

  return null;
};
