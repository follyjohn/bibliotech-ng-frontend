import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/common/home/home.component';
import { LoginComponent } from './pages/common/auth/login/login.component';
import { RegisterComponent } from './pages/common/auth/register/register.component';
import { PasswordComponent } from './pages/common/auth/password/password.component';
import { DashboardComponent } from './pages/bibliotech/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { TagsListComponent } from './pages/bibliotech/tag/tags-list/tags-list.component';
import { TagsCreateComponent } from './pages/bibliotech/tag/tags-create/tags-create.component';
import { TagsDetailsComponent } from './pages/bibliotech/tag/tags-details/tags-details.component';
import { TagsUpdateComponent } from './pages/bibliotech/tag/tags-update/tags-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password', component: PasswordComponent },
  {
    path: 'dashboard',
    canActivate: [
      AuthGuard
    ],
    // outlet: 'ListComponent',
    component: DashboardComponent
  },
  // permission routes
  {
    path: 'dashboard/permission',
    canActivate: [
      AuthGuard
    ],
    component: TagsListComponent
  },
  {
    path: 'dashboard/permission/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: TagsUpdateComponent
  },
  {
    path: 'dashboard/permission/new',
    canActivate: [
      AuthGuard
    ],
    component: TagsCreateComponent
  },
  {
    path: 'dashboard/permission/:id',
    canActivate: [
      AuthGuard
    ],
    component: TagsDetailsComponent
  },
  // permission routes
  {
    path: 'dashboard/permission',
    canActivate: [
      AuthGuard
    ],
    component: TagsListComponent
  },
  {
    path: 'dashboard/permission/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: TagsUpdateComponent
  },
  {
    path: 'dashboard/permission/new',
    canActivate: [
      AuthGuard
    ],
    component: TagsCreateComponent
  },
  {
    path: 'dashboard/permission/:id',
    canActivate: [
      AuthGuard
    ],
    component: TagsDetailsComponent
  },
  // permission routes
  {
    path: 'dashboard/permission',
    canActivate: [
      AuthGuard
    ],
    component: TagsListComponent
  },
  {
    path: 'dashboard/permission/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: TagsUpdateComponent
  },
  {
    path: 'dashboard/permission/new',
    canActivate: [
      AuthGuard
    ],
    component: TagsCreateComponent
  },
  {
    path: 'dashboard/permission/:id',
    canActivate: [
      AuthGuard
    ],
    component: TagsDetailsComponent
  },
  // permission routes
  {
    path: 'dashboard/permission',
    canActivate: [
      AuthGuard
    ],
    component: TagsListComponent
  },
  {
    path: 'dashboard/permission/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: TagsUpdateComponent
  },
  {
    path: 'dashboard/permission/new',
    canActivate: [
      AuthGuard
    ],
    component: TagsCreateComponent
  },
  {
    path: 'dashboard/permission/:id',
    canActivate: [
      AuthGuard
    ],
    component: TagsDetailsComponent
  },
  // tag routes
  {
    path: 'dashboard/tag',
    canActivate: [
      AuthGuard
    ],
    component: TagsListComponent
  },
  {
    path: 'dashboard/tag/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: TagsUpdateComponent
  },
  {
    path: 'dashboard/tag/new',
    canActivate: [
      AuthGuard
    ],
    component: TagsCreateComponent
  },
  {
    path: 'dashboard/tag/:id',
    canActivate: [
      AuthGuard
    ],
    component: TagsDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
