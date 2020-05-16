import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/* Material */
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
/* Others */
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NgxSpinnerModule } from 'ngx-spinner';
/* Utility Components */
import { ComfirmDialogComponent } from '../utilities/comfirm-dialog/comfirm-dialog.component';

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
        MatIconModule
    ],
    declarations: [
        ComfirmDialogComponent
    ],
    exports: [
        ComfirmDialogComponent,
        MatCheckboxModule,
        MatListModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        NgxSpinnerModule,
        MatExpansionModule,
        PerfectScrollbarModule,
        MatIconModule
    ],
    providers: [
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ],
    entryComponents: [ComfirmDialogComponent]
})
export class SharedModule {}
