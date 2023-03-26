import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GaugeComponent} from '../gauge/gauge.component';
import {IGaugeTrackConf} from '../gauge/gauge-component.interfaces';

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
    return [
      {
        strokeWidth: this.strokeWidth,
        bgStrokeColor: this.bgColor,
        circles: [
          {
            value: this.value,
            maxValue: this.aim || this.value,
            color: this.mainColor,
            blink: false,
          },
        ],
      },
    ];
  }
}
