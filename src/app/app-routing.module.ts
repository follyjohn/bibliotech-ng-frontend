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
import { PermissionsListComponent } from './pages/bibliotech/permission/permissions-list/permissions-list.component';
import { PermissionsUpdateComponent } from './pages/bibliotech/permission/permissions-update/permissions-update.component';
import { PermissionsCreateComponent } from './pages/bibliotech/permission/permissions-create/permissions-create.component';
import { RolesListComponent } from './pages/bibliotech/role/roles-list/roles-list.component';
import { RolesUpdateComponent } from './pages/bibliotech/role/roles-update/roles-update.component';
import { RolesCreateComponent } from './pages/bibliotech/role/roles-create/roles-create.component';
import { UsersListComponent } from './pages/bibliotech/user/users-list/users-list.component';
import { UsersUpdateComponent } from './pages/bibliotech/user/users-update/users-update.component';
import { UsersCreateComponent } from './pages/bibliotech/user/users-create/users-create.component';
import { PermissionsDetailComponent } from './pages/bibliotech/permission/permissions-detail/permissions-detail.component';
import { RolesDetailComponent } from './pages/bibliotech/role/roles-detail/roles-detail.component';
import { UsersDetailComponent } from './pages/bibliotech/user/users-detail/users-detail.component';
import { DomainsListComponent } from './pages/bibliotech/domain/domains-list/domains-list.component';
import { DomainsCreateComponent } from './pages/bibliotech/domain/domains-create/domains-create.component';
import { DomainsDetailComponent } from './pages/bibliotech/domain/domains-detail/domains-detail.component';
import { DomainsUpdateComponent } from './pages/bibliotech/domain/domains-update/domains-update.component';

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
    path: 'permission/list',
    canActivate: [
      AuthGuard
    ],
    component: PermissionsListComponent
  },
  {
    path: 'permission/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: PermissionsUpdateComponent
  },
  {
    path: 'permission/new',
    canActivate: [
      AuthGuard
    ],
    component: PermissionsCreateComponent
  },
  {
    path: 'permission/:id',
    canActivate: [
      AuthGuard
    ],
    component: PermissionsDetailComponent
  },
  // roles routes
  {
    path: 'role/list',
    canActivate: [
      AuthGuard
    ],
    component: RolesListComponent
  },
  {
    path: 'role/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: RolesUpdateComponent
  },
  {
    path: 'role/new',
    canActivate: [
      AuthGuard
    ],
    component: RolesCreateComponent
  },
  {
    path: 'role/:id',
    canActivate: [
      AuthGuard
    ],
    component: RolesDetailComponent
  },
  // user routes
  {
    path: 'user/list',
    canActivate: [
      AuthGuard
    ],
    component: UsersListComponent
  },
  {
    path: 'user/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: UsersUpdateComponent
  },
  {
    path: 'user/new',
    canActivate: [
      AuthGuard
    ],
    component: UsersCreateComponent
  },
  {
    path: 'user/:id',
    canActivate: [
      AuthGuard
    ],
    component: UsersDetailComponent
  },
  // domain routes
  {
    path: 'domain/list',
    canActivate: [
      AuthGuard
    ],
    component: DomainsListComponent
  },
  {
    path: 'domain/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: DomainsUpdateComponent
  },
  {
    path: 'domain/new',
    canActivate: [
      AuthGuard
    ],
    component: DomainsCreateComponent
  },
  {
    path: 'domain/:id',
    canActivate: [
      AuthGuard
    ],
    component: DomainsDetailComponent
  },
  // tag routes
  {
    path: 'tag/list',
    canActivate: [
      AuthGuard
    ],
    component: TagsListComponent
  },
  {
    path: 'tag/:id/update',
    canActivate: [
      AuthGuard
    ],
    component: TagsUpdateComponent
  },
  {
    path: 'tag/new',
    canActivate: [
      AuthGuard
    ],
    component: TagsCreateComponent
  },
  {
    path: 'tag/:id',
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
