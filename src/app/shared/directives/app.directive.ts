import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumber {

  regexStr = '^[0-9]*$';

  constructor(private el: ElementRef) {
  }

  @Input() OnlyNumber: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = event as KeyboardEvent;
    if (this.OnlyNumber) {
      if ([46, 8, 9, 27, 13, 37, 39, 40, 38].indexOf(e.keyCode) !== -1) {
        return;
      }
      // Ctrl+C or Cmd+C pressed?
      if ((event.ctrlKey || event.metaKey) && event.keyCode == 67) {
        return;
      }
      // Ctrl+V or Cmd+V pressed?
      if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
        return;
      }
      const ch = (e.key);
      const regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  }

  @HostListener('paste', ['$event']) onPaste(event) {
    const e = event as KeyboardEvent;
    if (this.OnlyNumber) {
      let numbers = event.clipboardData.getData('text/plain').match(/[0-9]/g);
      if (numbers && numbers.length > 0) {
        numbers = numbers.join('').substring(0, 14);
        setTimeout( () => {
          event.target.value = numbers;
        }, 50);
        /* event.clipboardData.setData('text/plain', numbers); */
        return;
      } else {
        e.preventDefault();
      }
    }
  }
}


@Directive({
  selector: '[OnlyAlphabet]'
})
export class OnlyAlphabet {

  regexStr = '^[ a-zA-Z]*$';

  constructor(private el: ElementRef) {
  }

  @Input() OnlyAlphabet: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = event as KeyboardEvent;
    if (this.OnlyAlphabet) {
      if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1) {
        return;
      }
      const ch = (e.key);
      const regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  }
}

@Directive({
  selector: '[OnlyAlphaNumeric]'
})
export class OnlyAlphaNumeric {

  regexStr = '^[a-zA-Z0-9]*$';

  constructor(private el: ElementRef) {
  }

  @Input() OnlyAlphaNumeric: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = event as KeyboardEvent;
    if (this.OnlyAlphaNumeric) {
      if ([46, 8, 9, 27, 13, 37, 39].indexOf(e.keyCode) !== -1) {
        return;
      }
      const ch = (e.key);
      const regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  }
}

@Directive({
  selector: '[OnlyAlphaNumericEmail]'
})
export class OnlyAlphaNumericEmail {

  regexStr = '^[a-zA-Z0-9\ @.]*$';

  constructor(private el: ElementRef) {
  }

  @Input() OnlyAlphaNumericEmail: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = event as KeyboardEvent;
    if (this.OnlyAlphaNumericEmail) {
      if ([46, 8, 9, 27, 13, 37, 39].indexOf(e.keyCode) !== -1) {
        return;
      }
      const ch = (e.key);
      const regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  }
}

@Directive({
  selector: '[OnlyAlphaName]'
})
export class OnlyAlphaName {

  regexStr = '^[a-zA-Z_\ ]*$';

  constructor(private el: ElementRef) {
  }

  @Input() OnlyAlphaName: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = event as KeyboardEvent;
    if (this.OnlyAlphaName) {
      if ([46, 8, 9, 27, 13, 37, 39].indexOf(e.keyCode) !== -1) {
        return;
      }
      const ch = (e.key);
      const regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  }
}

@Directive({
  selector: '[DecimalNumber]'
})
export class DecimalNumber {

  regexStr = '^[0-9\.]*$';
  // regexStr = /^[0-9]+(.[0-9]{1,3})?$/;

  constructor(private el: ElementRef) {
  }

  @Input() decimalNumber: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = event as KeyboardEvent;
    if (this.decimalNumber) {
      if ([46, 8, 9, 27, 13, 37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
        return;
      }
      const ch = (e.key);
      // let a  = e.target['value'];
      const regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  }
}

@Directive({
  selector: '[appNoSpace]'
})
export class NoSpaceDirective {

  constructor(private el: ElementRef) {
  }

  @Input() appNoSpace: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = event as KeyboardEvent;
    if (this.appNoSpace) {
      if (e.key === ' ') {
        e.preventDefault();
      }
    }
  }

}
