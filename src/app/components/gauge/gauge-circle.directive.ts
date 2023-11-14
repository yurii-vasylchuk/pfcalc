import {AfterViewInit, ChangeDetectorRef, Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {IGaugeCircleConf} from './gauge-component.interfaces';

@Directive({
  selector: '[pfcGaugeCircle]',
  standalone: true,
})
export class GaugeCircleDirective implements OnDestroy, OnInit, AfterViewInit {

  private static readonly STROKE_DASHARRAY = 'stroke-dasharray';
  private static readonly TRANSFORM = 'transform';
  private static readonly DEFAULT_COLOR = '#ee1d1d';
  private static readonly OBSERVING_ATTRIBUTES = ['r', 'cx', 'cy'];

  color: string = GaugeCircleDirective.DEFAULT_COLOR;
  value!: number;
  blink: boolean = false;
  radius!: number;
  cx!: number;
  cy!: number;

  private radiusChangedObserver: MutationObserver;
  private maxValue: number = 100;

  constructor(private el: ElementRef<SVGCircleElement>,
              private cdr: ChangeDetectorRef) {
    this.radiusChangedObserver = new MutationObserver((mutations: MutationRecord[]) => {
      const interestAttrPresent = mutations.some(m => m.type == 'attributes' &&
        m.attributeName != null &&
        GaugeCircleDirective.OBSERVING_ATTRIBUTES.includes(m.attributeName));

      if (interestAttrPresent) {
        this.scanCircleProperties();
      }
    });
    this.radiusChangedObserver.observe(this.el.nativeElement, {
      attributes: true,
      attributeFilter: GaugeCircleDirective.OBSERVING_ATTRIBUTES,
    });
  }

  @Input() set pfcGaugeCircle(conf: IGaugeCircleConf) {
    this.value = Math.max(0, conf.value);
    this.maxValue = conf.maxValue;

    this.color = conf.color;

    this.blink = !!conf.blink;
    this.recalculate();
  }

  ngAfterViewInit() {
    this.scanCircleProperties();
  }

  ngOnDestroy(): void {
    this.radiusChangedObserver.disconnect();
  }

  ngOnInit(): void {
    this.scanCircleProperties();
  }

  private recalculate(): void {
    if (this.radius == null || this.value == null) {
      return;
    }

    const circumference = this.radius * 2 * Math.PI;
    const arc = circumference * this.value / this.maxValue;

    this.el.nativeElement.setAttribute(GaugeCircleDirective.STROKE_DASHARRAY, `${arc} ${circumference - arc}`);
    this.el.nativeElement.setAttribute(GaugeCircleDirective.TRANSFORM, `rotate(-90, ${this.cx}, ${this.cy})`);
  }

  private scanCircleProperties() {
    const newRadius = this.el.nativeElement.r.baseVal.value;
    const newCx = this.el.nativeElement.cx.baseVal.value;
    const newCy = this.el.nativeElement.cy.baseVal.value;

    if (newRadius === this.radius && newCx === this.cx && newCy === this.cy) {
      return;
    }

    this.radius = newRadius;
    this.cx = newCx;
    this.cy = newCy;

    this.recalculate();
    this.cdr.detectChanges();
  }

}
