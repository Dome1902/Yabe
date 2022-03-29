import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartsiteComponent } from './startsite/startsite.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { OwnOffersComponent } from './own-offers/own-offers.component';
import { TestComponent } from './test/test.component'
import { RouterModule } from '@angular/router';
import {routes} from './app-routing.module';
import { CreateOffersComponent } from './create-offers/create-offers.component'
//import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
//import { MarkdownModule } from 'ngx-markdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationInterceptor } from './services/authorization.interceptor';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzButtonModule} from "ng-zorro-antd/button";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzInputModule} from "ng-zorro-antd/input";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ArticleComponent } from './article/article.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { SearchPipe } from './services/search.pipe';

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    StartsiteComponent,
    ImprintComponent,
    LoginComponent,
    OffersComponent,
    OwnOffersComponent,
    TestComponent,
    CreateOffersComponent,
    HeaderComponent,
    ArticleComponent,
    SearchPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzModalModule,
    NzCardModule,
    NzDropDownModule,
    NzAvatarModule,
    NzUploadModule,
    NzMessageModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthorizationInterceptor, multi:true},
    {provide: SearchPipe, useClass: SearchPipe},
    { provide: NZ_I18N, useValue: de_DE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
