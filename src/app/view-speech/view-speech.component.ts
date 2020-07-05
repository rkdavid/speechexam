import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';

import { DataService } from '../../helpers/data.service';

@Component({
  selector: 'app-view-speech',
  templateUrl: './view-speech.component.html',
  styleUrls: ['./view-speech.component.scss']
})
export class ViewSpeechComponent implements OnInit, OnDestroy {

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
      if( result == 'confirm' ) {
        this.confirmDelete();
      }
    });
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.dataService.fetchData('../../assets/speech-list.json').subscribe(data => {
      this.addProperty(data);
      this.speechObj = data;
      this.viewSpeech(this.speechObj[0]);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addProperty(obj) {
    return obj.forEach(function(element) {
      element.active = false;
    });
  }

  getDate(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
  }

  viewSpeech(speech) {
    this.speech = speech;
    this.speechID = speech.id;
    this.addProperty(this.speechObj);
    this.speechObj.filter(opt => opt.id == speech.id)[0].active = true;
    this.date = new Date(speech.date);
  }

  delete() {
    this.dataService.openPopup('delete', '', 'Are you sure you want to delete this?', [ 'confirm', 'cancel' ]);
  }

  confirmDelete() {
    this.dataService.openPopup('success', '', 'Speech deleted!', [ 'done' ]);
  }

  save() {
    this.dataService.openPopup('success', '', 'Speech saved!', [ 'done' ]);
  }

  share() {
    this.dataService.openPopup('share', '', '', [ 'send' ]);
  }

}
