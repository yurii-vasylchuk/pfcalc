export interface IGaugeCircleConf {
  circleId?: any;
  value: number;
  maxValue: number;
  color: string;
  blink?: boolean;
}

export interface IGaugeTrackConf {
  trackId?: any;
  bgStrokeColor: string;
  strokeWidth: number;
  circles: IGaugeCircleConf[];
}
