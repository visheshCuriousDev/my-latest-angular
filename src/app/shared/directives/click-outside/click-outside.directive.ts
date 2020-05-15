import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {

  private listening: boolean;
  private globalClick: any; // : Observable<MouseEvent>;
  private keypress: any;

  @Output() clickOutside: EventEmitter<Object>;

  constructor(private _elRef: ElementRef) {
    this.listening = false;
    this.clickOutside = new EventEmitter();
  }

  ngOnInit() {
    this.globalClick = fromEvent(document, 'click')
      .pipe(delay(1), tap(() => {
        this.listening = true;
      }))
      .subscribe((event: MouseEvent) => {
        this.onGlobalClick(event);
      });
    this.keypress = fromEvent(document, 'keydown')
      .pipe(delay(1), tap(() => {
        this.listening = true;
      }))
      .subscribe((event: KeyboardEvent) => {
        this.onGlobalClick(event);
      });
  }

  ngOnDestroy() {
    if (this.globalClick) {
      this.globalClick.unsubscribe();
    }
  }

  onGlobalClick(event) {
    if (event instanceof MouseEvent && this.listening === true) {
      if (this.isDescendant(this._elRef.nativeElement, event.target) === true) {
        this.clickOutside.emit({
          target: (event.target || null),
          value: false
        });
      } else {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    } else if (event instanceof KeyboardEvent) {
      switch (event.keyCode) {
        case 27: /// up arrow

          this.clickOutside.emit({
            target: (event.target || null),
            value: true
          });
          break;

      }
    }
  }

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }

}
