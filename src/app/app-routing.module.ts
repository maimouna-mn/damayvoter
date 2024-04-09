import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { StartPage1Component } from './start-page1/start-page1.component';
import { VotingPageComponent } from './voting-page/voting-page.component';
import { ConfirmVoteComponent } from './confirm-vote/confirm-vote.component';
import { PageEndComponent } from './page-end/page-end.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component:  HomeComponent },
  { path: "startPage", component: StartPageComponent },
  { path: "startPage1", component: StartPage1Component },
  { path: "auth", component: AuthenticationPageComponent },
  { path: "authMessage", component: AuthMessageComponent },
  { path: "votingPage", component: VotingPageComponent },
  { path: "confirmVote", component: ConfirmVoteComponent },
  { path: "pageEnd", component: PageEndComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
