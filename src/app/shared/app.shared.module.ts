import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Material */
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
/* Others */
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NgxSpinnerModule } from 'ngx-spinner';
/* Directives */
import { DecimalNumber, NoSpaceDirective, OnlyAlphabet, OnlyAlphaName, OnlyAlphaNumeric, OnlyAlphaNumericEmail, OnlyNumber } from '../shared/directives/app.directive';
/* Utility Components */
import { ComfirmDialogComponent } from '../utilities/comfirm-dialog/comfirm-dialog.component';
import { InputComponent } from './ui-components/input/input.component';
import { MobileNumberComponent } from './ui-components/mobile-number/mobile-number.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
};
@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        MatListModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        NgxSpinnerModule,
        MatExpansionModule,
        PerfectScrollbarModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        MatInputModule
    ],
    declarations: [
        ComfirmDialogComponent,
        MobileNumberComponent,
        InputComponent,
        OnlyNumber,
        OnlyAlphabet,
        OnlyAlphaNumeric,
        OnlyAlphaNumericEmail,
        OnlyAlphaName,
        DecimalNumber,
        NoSpaceDirective
    ],
    exports: [
        ComfirmDialogComponent,
        MobileNumberComponent,
        MatCheckboxModule,
        MatListModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        NgxSpinnerModule,
        MatExpansionModule,
        PerfectScrollbarModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        InputComponent,
        OnlyNumber,
        OnlyAlphabet,
        OnlyAlphaNumeric,
        OnlyAlphaNumericEmail,
        OnlyAlphaName,
        DecimalNumber,
        NoSpaceDirective,
        MatInputModule
    ],
    providers: [
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ],
    entryComponents: [ComfirmDialogComponent]
})
export class SharedModule {}
