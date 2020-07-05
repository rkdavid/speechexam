import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';

import { DataService } from '../../helpers/data.service';

@Component({
  selector: 'app-add-speech',
  templateUrl: './add-speech.component.html',
  styleUrls: ['./add-speech.component.scss']
})
export class AddSpeechComponent implements OnInit, OnDestroy {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  subscription: Subscription;

  speechObj: any = [];
  speech: any = '';
  speechID: any = '';

  date: any = new Date();

  innerWidth: number = 0;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.popupResult.subscribe(result => {
      // console.log(result);
      // if( result == 'confirm' ) {
      //   this.confirmDelete();
      // }
    });
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getDate(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
  }

  save() {
    this.dataService.openPopup('success', '', 'Speech saved!', [ 'done' ]);
  }

}
