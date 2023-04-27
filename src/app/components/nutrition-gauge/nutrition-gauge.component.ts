import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GaugeComponent} from '../gauge/gauge.component';
import {IGaugeTrackConf} from '../gauge/gauge-component.interfaces';
import * as fromFunctions from "../../commons/functions";

@Component({
  selector: 'pfc-nutrition-gauge',
  standalone: true,
  imports: [CommonModule, GaugeComponent],
  templateUrl: './nutrition-gauge.component.html',
  styleUrls: ['./nutrition-gauge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NutritionGaugeComponent {
  @Input() value = 0;
  @Input() aim: number | null = 100;
  @Input() addingValue = 0;
  @Input() title!: string;

  @Input() strokeWidth = 15;
  @Input() mainColor = '#ff4081';
  @Input() bgColor = '#bf3060';

  constructor() {
  }

  get titleShorten(): string {
    return this.title.charAt(0).toUpperCase();
  }

  get gaugeConfig(): IGaugeTrackConf[] {
    const result = [
      {
        strokeWidth: this.strokeWidth,
        bgStrokeColor: this.bgColor,
        circles: [
          {
            value: this.value,
            maxValue: this.aim || (this.value + (this.addingValue > 0 ? this.addingValue : 0)),
            color: this.mainColor,
            blink: false,
          },
        ],
      },
    ];

    if (this.addingValue) {
      result[0].circles.push({
        value: this.value + this.addingValue,
        maxValue: this.aim|| (this.value + (this.addingValue > 0 ? this.addingValue : 0)),
        color: this.mainColor,
        blink: true
      });
    }
    return result;
  }

  protected readonly fromFunctions = fromFunctions;
}
