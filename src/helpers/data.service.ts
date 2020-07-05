import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material'; // material properties
import { PopupComponent } from '../app/shared/popup/popup.component'; // popup component

@Injectable()

export class DataService {

  popupDialogRef: MatDialogRef<PopupComponent>; // referencing the component as a material dialog box
  popupResult = new BehaviorSubject<string>('');

  constructor(private http: Http, private dialog: MatDialog) { }

  fetchData(param: string) {
    return this.http.get(param)
      .map(response => response.json());
  }

  openPopup(type, title, message, buttons) {

    let dialogConfig = new MatDialogConfig(); // instantiate dialog config of material dialog box
    dialogConfig.disableClose = true;
    dialogConfig.minWidth = '335px';
    dialogConfig.data = { // modal details to be passed into the dialog
      type: type,
      title: title,
      message: message,
      buttons: buttons
    };

    this.popupDialogRef = this.dialog.open(PopupComponent, dialogConfig); // open popup method
    this.checkPopup(); // run afterClosed method (cannot be called other than here)

  }

  checkPopup() {
    this.popupDialogRef.afterClosed().subscribe(result => { // subscribe to result of dialog box using afterClosed method
      this.dialogRes(result); // subscribe result
    });
  }

  dialogRes(result: string) {
		this.popupResult.next(result);
	}

}
