import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'stringify',
  standalone: true,
  pure: true,
})
export class StringifyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value == null) {
      return 'NULL'
    }
    return JSON.stringify(value, null, 2)
  }

}
