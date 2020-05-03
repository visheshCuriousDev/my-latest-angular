import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
/* Material */
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
// Utility Components
import { ComfirmDialogComponent } from './utilities/comfirm-dialog/comfirm-dialog.component';




@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        MatListModule,
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
