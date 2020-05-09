import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppConfig } from 'src/app/utilities/constants/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snackbarRef;
  config;

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.config = AppConfig.SNACKBAR_CONFIG;
  }

  showSuccess(
    message = 'Success!',
    customConfig: MatSnackBarConfig = {}
  ) {
    this.snackBar.dismiss();
    this.snackbarRef = this.snackBar.open(message, 'Close' , {
      panelClass: ['snack-success', 'snack'],
      duration: customConfig.duration || this.config.TIMEOUT,
      verticalPosition: this.config.VERTICAL,
      horizontalPosition: this.config.HORIZONTAL,
      ...customConfig
    });
  }

  showError(
    message = 'Something went wrong, please try again later !!',
    customConfig: MatSnackBarConfig = {}
  ) {
    this.snackBar.dismiss();
    this.snackbarRef = this.snackBar.open(message, 'Close' , {
      panelClass: ['snack-error', 'snack'],
      duration: customConfig.duration || this.config.ERROR_TIMEOUT,
      verticalPosition: this.config.VERTICAL,
      horizontalPosition: this.config.HORIZONTAL,
      ...customConfig
    });
  }

  showWarning(
    message = 'Warning!',
    customConfig: MatSnackBarConfig = {}
  ) {
    this.snackBar.dismiss();
    this.snackbarRef = this.snackBar.open(message, 'Close' , {
      panelClass: ['snack-warning', 'snack'],
      duration: customConfig.duration || this.config.TIMEOUT,
      verticalPosition: this.config.VERTICAL,
      horizontalPosition: this.config.HORIZONTAL,
      ...customConfig
    });
  }

  showInfo(
    message = 'Info',
    customConfig: MatSnackBarConfig = {}
  ) {
    this.snackBar.dismiss();
    this.snackbarRef = this.snackBar.open(message, 'Close' , {
      panelClass: ['snack-info', 'snack'],
      duration: customConfig.duration || this.config.TIMEOUT,
      verticalPosition: this.config.VERTICAL,
      horizontalPosition: this.config.HORIZONTAL,
      ...customConfig
    });
  }

}
