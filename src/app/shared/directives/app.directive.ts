import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: '[DecimalNumber]'
// })
// export class DecimalNumber {

//   regexStr = '^[0-9\.]*$';

//   constructor(private el: ElementRef) {
//   }

//   @Input() DecimalNumber: boolean;

//   @HostListener('keydown', ['$event']) onKeyDown(event) {
//     const e = <KeyboardEvent> event;
//     if (this.DecimalNumber) {
//       if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1) {
//         return;
//       }
//       const ch = (e.key);
//       const regEx = new RegExp(this.regexStr);
//       if (regEx.test(ch)) {
//         return;
//       } else {
//         e.preventDefault();
//       }
//     }
//   }
// }

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumber {

  regexStr = '^[0-9]*$';

  constructor(private el: ElementRef) {
  }

  @Input() OnlyNumber: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent> event;
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
    const e = <KeyboardEvent> event;
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
    const e = <KeyboardEvent> event;
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


// @Directive({
//   selector: '[OnlyAphaNumber]'
// })
// export class OnlyAphaNumber {

//   regexStr = '^[ 0-9a-zA-Z\-\&]*$';

//   constructor(private el: ElementRef) {
//   }

//   @Input() OnlyAphaNumber: boolean;

//   @HostListener('keydown', ['$event']) onKeyDown(event) {
//     const e = <KeyboardEvent> event;
//     if (this.OnlyAphaNumber) {
//       if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1) {
//         return;
//       }
//       const ch = (e.key);
//       const regEx = new RegExp(this.regexStr);
//       if (regEx.test(ch)) {
//         return;
//       } else {
//         e.preventDefault();
//       }
//     }
//   }
// }




@Directive({
  selector: '[OnlyPhone]'
})
export class OnlyPhone {

  regexStr = '^[0-9-/(/)/]*$';

  constructor(private el: ElementRef) {
  }

  @Input() OnlyPhone: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent> event;
    if (this.OnlyPhone) {
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
    const e = <KeyboardEvent> event;
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

/* Only aplpha numeric with - and _ allowed */
@Directive({
  selector: '[OnlyAlphaNumericHyphen]'
})
export class OnlyAlphaNumericHyphen {

  regexStr = '^[a-zA-Z0-9-_ ]*$';

  constructor(private el: ElementRef) {
  }

  @Input() OnlyAlphaNumericHyphen: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e: any = <KeyboardEvent> event;
    /* const k = document.all ? e.keyCode : e.which; */
    if (this.OnlyAlphaNumericHyphen) {
      if ([46, 8, 9, 27, 13, 37, 39].indexOf(e.keyCode) !== -1) {
        return;
      }
      /* if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57) || k === 95 || k === 45) {
        return true;
      } else {
        e.preventDefault();
        return false;
      } */
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
    const e = <KeyboardEvent> event;
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
    const e = <KeyboardEvent> event;
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

// @Directive({
//   selector: '[OnlyAlphabetDot]'
// })
// export class OnlyAlphabetDot {

//   regexStr = '^[ a-zA-Z.]*$';

//   constructor(private el: ElementRef) {
//   }

//   @Input() OnlyAlphabetDot: boolean;

//   @HostListener('keydown', ['$event']) onKeyDown(event) {
//     const e = <KeyboardEvent> event;
//     if (this.OnlyAlphabetDot) {
//       if ([46, 8, 9, 27, 13, 37, 39].indexOf(e.keyCode) !== -1) {
//         return;
//       }
//       const ch = (e.key);
//       const regEx = new RegExp(this.regexStr);
//       if (regEx.test(ch)) {
//         return;
//       } else {
//         e.preventDefault();
//       }
//     }
//   }
// }

