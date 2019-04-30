import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import BScroll from 'better-scroll';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  public slider: BScroll;
  public dots: Array<any> = [];
  public currentPageIndex = 0;
  public timer;
  private resizeTimer: number;

  @Input() public sliderData: Array<any> = [];
  @Input() public showDot = true;
  @Input() public loop = true;
  @Input() public autoPlay = true;
  @Input() public interval = 4000;
  @Input() public threshold = 0.3;
  @Input() public speed = 400;
  @Input() public click = true;
  @ViewChild('sliderWrapper') public sliderWrapper: ElementRef;
  @ViewChild('sliderGroup') public sliderGroup: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnChanges() {
    setTimeout(() => {
      if (this.slider) {
        this._update();
      }
    }, 20);
  }

  ngOnInit() {}

  ngAfterContentInit() {
    if (typeof window !== 'undefined') {
      this._update();
    }
    window.addEventListener('resize', () => {
      if (!this.slider || !this.slider.enabled) {
        return;
      }
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (this.slider.isInTransition) {
          this._onScrollEnd();
        } else {
          if (this.autoPlay) {
            this._play();
          }
        }
        this._refresh();
      });
    });
  }

  ngOnDestroy() {
    if (this.slider) {
      this.slider.disable();
      clearTimeout(this.timer);
    }
  }

  private _update(): void {
    if (this.slider) {
      this.slider.destroy();
    }
    this._init();
  }

  private _refresh(): void {
    this._setSlideWidth(true);
    this.slider.refresh();
  }

  private _init(): void {
    clearTimeout(this.timer);
    this.currentPageIndex = 0;
    this._setSlideWidth();
    if (this.showDot) {
      this._initDots();
    }
    this._initSlider();
    if (this.autoPlay) {
      this._play();
    }
  }

  private _setSlideWidth(isResize?: boolean): void {
    const { children } = this.sliderGroup.nativeElement;
    const { clientWidth } = this.sliderWrapper.nativeElement;
    let width = 0;
    const sliderWidth = clientWidth;
    for (const item of children) {
      // 设置每个子元素的宽度
      this.renderer.setStyle(item, 'width', sliderWidth + 'px');
      // 计算总宽度
      width += sliderWidth;
    }
    // 循环播放首尾各加一个,因此总宽度还要加两倍的宽度
    if (this.loop && !isResize) {
      width += 2 * sliderWidth;
    }
    this.renderer.setStyle(this.sliderGroup.nativeElement, 'width', width + 'px');
  }

  private _initDots(): void {
    const { children } = this.sliderGroup.nativeElement;
    this.dots = new Array(children.length);
  }

  private _initSlider(): void {
    this.slider = new BScroll(this.sliderWrapper.nativeElement, {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop: this.loop,
        threshold: this.threshold,
        speed: this.speed
      },
      bounce: false,
      stopPropagation: true,
      click: this.click
    });

    this.slider.on(
      'scrollEnd',
      (): void => {
        this._onScrollEnd();
      }
    );

    this.slider.on(
      'touchEnd',
      (): void => {
        if (this.autoPlay) {
          this._play();
        }
      }
    );

    this.slider.on(
      'beforeScrollStart',
      (): void => {
        if (this.autoPlay) {
          clearTimeout(this.timer);
        }
      }
    );
  }

  private _onScrollEnd(): void {
    const pageIndex = this.slider.getCurrentPage().pageX;
    this.currentPageIndex = pageIndex;
    if (this.autoPlay) {
      this._play();
    }
  }

  public prev(): void {
    this.slider.prev();
  }

  public next(): void {
    this.slider.next();
  }

  private _play(): void {
    this.timer = setTimeout(() => {
      this.slider.next();
    }, this.interval);
  }
}
