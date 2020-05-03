import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
/* Material */
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
/* Common */
import { HeaderComponent } from './header/header.component';
// Utility Components
import { ComfirmDialogComponent } from './utilities/comfirm-dialog/comfirm-dialog.component';




@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        MatListModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule
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
        MatButtonModule
    ],
    entryComponents: [ComfirmDialogComponent]
})
export class SharedModule {}
