import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {GaugeCircleDirective} from './gauge-circle.directive';
import {IGaugeCircleConf, IGaugeTrackConf} from './gauge-component.interfaces';
import {CommonModule} from '@angular/common';

interface IGaugeInternalTrackConfig extends IGaugeTrackConf {
  radius: number;
}

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pfc-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
  imports: [
    CommonModule, GaugeCircleDirective,
  ],
})
export class GaugeComponent {
  @Input() animationDuration = 3;
  @Input() title!: string;
  @Input() subtitle?: string;

  @Input() titleShift?: number;
  @Input() subtitleShift?: number;

  @Input() titleFontSize = 35;
  @Input() subtitleFontSize = 20;

  titleX = 50;
  titleY = 50;
  subtitleX = 52;
  subtitleY = 70;
  width = 100;
  height = 100;
  viewBox = '0 0 100 100';

  _tracks: IGaugeInternalTrackConfig[] = [];

  constructor(private cdr: ChangeDetectorRef) {
  }

  @Input()
  set values(values: IGaugeTrackConf[]) {
    let cumulativeRadius = 40;
    this._tracks = values.map((track, idx) => {
      cumulativeRadius += track.strokeWidth;
      return {
        ...track,
        trackId: track.trackId != null ? track.trackId : idx,
        radius: cumulativeRadius - (track.strokeWidth / 2),
        circles: track.circles.map((circle, idx) => {
          return {
            ...circle,
            circleId: circle.circleId != null ? circle.circleId : idx,
          };
        }),
      };
    });

    this.width = this.height = cumulativeRadius * 2;
    this.titleY = this.titleX = cumulativeRadius;
    this.subtitleX = cumulativeRadius;
    this.subtitleY = cumulativeRadius + this.subtitleFontSize;
    this.viewBox = `0 0 ${this.width} ${this.height}`;
    for (const track of this._tracks) {
      track.circles.sort((c1, c2) => c2.value - c1.value);
    }
    // this.cdr.markForCheck();
  }

  trackTrackByFn = (idx: number, track: IGaugeTrackConf) => {
    return track.trackId != null ? track.trackId : idx;
  };

  circleTrackByFn = (idx: number, circle: IGaugeCircleConf) => {
    return circle.circleId ? circle.circleId : idx;
  };
}
