import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartsiteComponent } from './startsite/startsite.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationInterceptor } from './services/authorization.interceptor';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';

registerLocaleData(de);

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
    RouterModule,  
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthorizationInterceptor, multi:true},
    { provide: NZ_I18N, useValue: de_DE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
