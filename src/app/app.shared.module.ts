import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import {
    MatDialogModule,
    MatButtonModule
  } from '@angular/material';

//Utility Components
import { ComfirmDialogComponent } from './utilities/comfirm-dialog/comfirm-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        HeaderComponent,
        ComfirmDialogComponent
    ],
    exports: [
        HeaderComponent,
        ComfirmDialogComponent
    ],
    entryComponents: [ComfirmDialogComponent]
})
export class SharedModule {}
