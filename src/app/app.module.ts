import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OnlineStatusModule } from 'ngx-online-status';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule  } from 'ngx-toastr';
// import { HelloComponent } from './hello.component';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    OnlineStatusModule,
    AppRoutingModule,
    FormsModule,
    ClipboardModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NotifierModule,
    NotifierModule.withConfig({
      // Custom options in here
    }),
    ToastrModule.forRoot(),

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
