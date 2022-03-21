import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartsiteComponent } from './startsite/startsite.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OffersComponent } from './offers/offers.component';
import { OwnOffersComponent } from './own-offers/own-offers.component';
import { TestComponent } from './test/test.component'
import { RouterModule } from '@angular/router';
import {routes} from './app-routing.module';
import { CreateOffersComponent } from './create-offers/create-offers.component'
//import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
//import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    StartsiteComponent,
    ImprintComponent,
    LoginComponent,
    RegisterComponent,
    OffersComponent,
    OwnOffersComponent,
    TestComponent,
    CreateOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    //MarkdownModule.forRoot(),
    //MarkdownToHtmlModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
