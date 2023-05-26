import {FormControlStatus, ValidationErrors} from "@angular/forms";

export interface IFormState<T> {
  model: T,
  dirty: boolean,
  status: FormControlStatus,
  errors: ValidationErrors | null
}
