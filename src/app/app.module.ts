import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { StartPage1Component } from './start-page1/start-page1.component';
import { VotingPageComponent } from './voting-page/voting-page.component';
import { ConfirmVoteComponent } from './confirm-vote/confirm-vote.component';
import { PageEndComponent } from './page-end/page-end.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StartPageComponent,
    AuthenticationPageComponent,
    AuthMessageComponent,
    StartPage1Component,
    VotingPageComponent,
    ConfirmVoteComponent,
    PageEndComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
