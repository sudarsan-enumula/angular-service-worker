import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  ServiceWorkerModule.register('/admin-console/ngsw-worker.js', { enabled: true})
   ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
