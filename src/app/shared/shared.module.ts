import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PopupComponent } from './popup/popup.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

// angular material
import {
  MatButtonModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  // MatMomentDateModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    // angular material
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    // MatMomentDateModule,
  ],
  declarations: [
    PopupComponent
  ],
  exports: [
    PopupComponent,
    // angular material
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    // MatMomentDateModule,
  ],
  providers: [],
  entryComponents: [PopupComponent]
})

export class SharedModule { }
