import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UptimeComponent } from './uptime/uptime.component';
import{ MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    UptimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
