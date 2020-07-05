import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewSpeechComponent } from './view-speech/view-speech.component';
import { AddSpeechComponent } from './add-speech/add-speech.component';
import { SearchSpeechComponent } from './search-speech/search-speech.component';

const routes: Routes = [
    { path: '', redirectTo: 'speeches', pathMatch: 'full' },
    {
      path: 'speeches',
      component: ViewSpeechComponent,
      data: {
        label: 'View my speeches',
      }
    },
    {
      path: 'new-speech',
      component: AddSpeechComponent,
      data: {
        label: 'Submit a new speech',
      }
    },
    {
      path: 'search-speech',
      component: SearchSpeechComponent,
      data: {
        label: 'Search all speeches',
      }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
