import { OrganizerComponent } from './organizer/organizer.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TeamsListsComponent } from './teams-lists/teams-lists.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamsComponent } from './teams/teams.component';
import { ScoringAdminComponent } from './scoring-admin/scoring-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { ProgramComponent } from './program/program.component';
import { ResultsComponent } from './results/results.component';
import { DayAdminComponent } from './day-admin/day-admin.component';

const routes: Routes = [
  // Private Routes
  { path: 'homeAdmin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'teams', component: TeamsComponent, canActivate: [AuthGuardAdmin] },
  { path: 'score-admin', component: ScoringAdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'day-admin', component: DayAdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },

  // Public Routes
  { path: '', component: HomeComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'teamsLists', component: TeamsListsComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'organizer', component: OrganizerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class RoutingModule { }
