import {ChangeDetectionStrategy, Component, input} from '@angular/core'

import {GaugeComponent} from '../gauge/gauge.component'
import {IGaugeTrackConf} from '../gauge/gauge-component.interfaces'
import * as fromFunctions from '../../commons/functions'

@Component({
  selector: 'pfc-nutrition-gauge',
  imports: [GaugeComponent],
  templateUrl: './nutrition-gauge.component.html',
  styleUrls: ['./nutrition-gauge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NutritionGaugeComponent {
  readonly value = input(0)
  readonly aim = input<number | null>(100)
  readonly addingValue = input(0)
  readonly title = input.required<string>()

  readonly strokeWidth = input(15)
  readonly mainColor = input('#ff4081')
  readonly bgColor = input('#bf3060')
  protected readonly fromFunctions = fromFunctions

  constructor() {
  }

  get titleShorten(): string {
    return this.title().charAt(0).toUpperCase()
  }

  get gaugeConfig(): IGaugeTrackConf[] {
    const result = [
      {
        strokeWidth: this.strokeWidth(),
        bgStrokeColor: this.bgColor(),
        circles: [
          {
            value: this.value(),
            maxValue: this.aim() || (this.value() + (this.addingValue() > 0 ? this.addingValue() : 0)),
            color: this.mainColor(),
            blink: false,
          },
        ],
      },
    ]

    const addingValue = this.addingValue()
    if (addingValue) {
      result[0].circles.push({
        value: this.value() + addingValue,
        maxValue: this.aim() || (this.value() + (addingValue > 0 ? addingValue : 0)),
        color: this.mainColor(),
        blink: true,
      })
    }
    return result
  }
}
