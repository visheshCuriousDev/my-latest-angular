import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppConstants } from 'src/app/utilities/constants/AppConstants';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(
    private ref: ChangeDetectorRef
  ) {
    this.onBlur = new EventEmitter();
  }

  @Input() appAutoFocus = false;
  @Input() formGroup: FormGroup;
  @Input() control: FormControl;
  @Input() type: 'text' | 'password' = 'text';
  @Input() id = '';
  @Input() name: string = this.id || '';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() hasHint = false;
  @Input() hintMessage = '';
  @Input() errorMessage: string | boolean = null;
  @Input() extraClass: string | string[] = '';

  // directives
  @Input() onlyNumber = false;
  @Input() decimalNumber = false;
  @Input() onlyAlphabet = false;
  @Input() onlyAphaNumber = false;
  @Input() onlyPhone = false;
  @Input() onlyFax = false;
  @Input() noSpace = false;

  @Input() maxLength: number =  AppConstants.DEFAULT_MAX_LENGTH_FORM_INPUT;
  @Input() minLength = 0;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onBlur: EventEmitter<boolean>;

  ngOnInit() { }

  blur() {
    this.onBlur.emit(true);
  }

}
