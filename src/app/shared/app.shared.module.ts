import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
/* Material */
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SnackbarService } from '../services/snackbar/snackbar.service';
/* Utility Components */
import { ComfirmDialogComponent } from '../utilities/comfirm-dialog/comfirm-dialog.component';
/* Common */
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        MatListModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        NgxSpinnerModule
    ],
    declarations: [
        HeaderComponent,
        ComfirmDialogComponent
    ],
    exports: [
        HeaderComponent,
        ComfirmDialogComponent,
        MatCheckboxModule,
        MatListModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        NgxSpinnerModule
    ],
    providers: [SnackbarService],
    entryComponents: [ComfirmDialogComponent]
})
export class SharedModule {}
