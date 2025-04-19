import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {GaugeCircleDirective} from './gauge-circle.directive'
import {IGaugeCircleConf, IGaugeTrackConf} from './gauge-component.interfaces'
import {CommonModule} from '@angular/common'

interface IGaugeInternalTrackConfig extends IGaugeTrackConf {
  radius: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pfc-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
  imports: [
    CommonModule, GaugeCircleDirective,
  ],
})
export class GaugeComponent implements OnChanges {
  @Input() animationDuration = 3
  @Input() title!: string
  @Input() subtitle?: string

  @Input() titleFontSize = 35
  @Input() subtitleFontSize = 20

  titleX = 50
  titleY = 50
  subtitleX = 52
  subtitleY = 70
  width = 100
  height = 100
  viewBox = '0 0 100 100'

  _tracks: IGaugeInternalTrackConfig[] = []

  private cumulativeRadius = 40

  constructor() {
  }

  @Input()
  set values(values: IGaugeTrackConf[]) {
    this.cumulativeRadius = 40
    this._tracks = values.map((track, idx) => {
      this.cumulativeRadius += track.strokeWidth
      return {
        ...track,
        trackId: track.trackId != null ? track.trackId : idx,
        radius: this.cumulativeRadius - (track.strokeWidth / 2),
        circles: track.circles.map((circle, idx) => {
          return {
            ...circle,
            circleId: circle.circleId != null ? circle.circleId : idx,
          }
        }),
      }
    })
    for (const track of this._tracks) {
      track.circles.sort((c1, c2) => c2.value - c1.value)
    }
  }

  trackTrackByFn = (idx: number, track: IGaugeTrackConf) => {
    return track.trackId != null ? track.trackId : idx
  }

  circleTrackByFn = (idx: number, circle: IGaugeCircleConf) => {
    return circle.circleId ? circle.circleId : idx
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.width = this.height = this.cumulativeRadius * 2
    this.titleX = this.cumulativeRadius
    this.titleY = this.subtitle != null ? this.cumulativeRadius : this.cumulativeRadius + (this.titleFontSize * 0.39)
    this.subtitleX = this.cumulativeRadius
    this.subtitleY = this.cumulativeRadius + this.subtitleFontSize
    this.viewBox = `0 0 ${this.width} ${this.height}`
  }
}
