import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './services/auth-guard.service';

import { HomeComponent } from './pages/common/home/home.component';
import { LoginComponent } from './pages/common/auth/login/login.component';
import { RegisterComponent } from './pages/common/auth/register/register.component';
import { PasswordComponent } from './pages/common/auth/password/password.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/bibliotech/dashboard/dashboard.component';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/bibliotech/breadcrumb/breadcrumb.component';
import { TagListComponent } from './components/bibliotech/tag/tag-list/tag-list.component';
import { TagCreateComponent } from './components/bibliotech/tag/tag-create/tag-create.component';
import { TagDetailComponent } from './components/bibliotech/tag/tag-detail/tag-detail.component';
import { DomainDetailComponent } from './components/bibliotech/domain/domain-detail/domain-detail.component';
import { DomainListComponent } from './components/bibliotech/domain/domain-list/domain-list.component';
import { DomainCreateComponent } from './components/bibliotech/domain/domain-create/domain-create.component';
import { TagsListComponent } from './pages/bibliotech/tag/tags-list/tags-list.component';
import { TagsCreateComponent } from './pages/bibliotech/tag/tags-create/tags-create.component';
import { TagsDetailsComponent } from './pages/bibliotech/tag/tags-details/tags-details.component';
import { TagService } from 'src/app/services/tag.service';
import { TagsUpdateComponent } from './pages/bibliotech/tag/tags-update/tags-update.component';
import { TagUpdateComponent } from './components/bibliotech/tag/tag-update/tag-update.component';
import { DomainService } from './services/domain.service';
import { RoleService } from './services/role.service';
import { PermissionService } from './services/permission.service';
import { RoleListComponent } from './components/bibliotech/role/role-list/role-list.component';
import { RolesListComponent } from './pages/bibliotech/role/roles-list/roles-list.component';
import { RoleCreateComponent } from './components/bibliotech/role/role-create/role-create.component';
import { RolesCreateComponent } from './pages/bibliotech/role/roles-create/roles-create.component';
import { RoleDetailComponent } from './components/bibliotech/role/role-detail/role-detail.component';
import { RolesDetailComponent } from './pages/bibliotech/role/roles-detail/roles-detail.component';
import { RoleUpdateComponent } from './components/bibliotech/role/role-update/role-update.component';
import { RolesUpdateComponent } from './pages/bibliotech/role/roles-update/roles-update.component';
import { DomainsListComponent } from './pages/bibliotech/domain/domains-list/domains-list.component';
import { DomainsCreateComponent } from './pages/bibliotech/domain/domains-create/domains-create.component';
import { DomainsDetailComponent } from './pages/bibliotech/domain/domains-detail/domains-detail.component';
import { DomainUpdateComponent } from './components/bibliotech/domain/domain-update/domain-update.component';
import { DomainsUpdateComponent } from './pages/bibliotech/domain/domains-update/domains-update.component';
import { PermissionListComponent } from './components/bibliotech/permission/permission-list/permission-list.component';
import { PermissionsListComponent } from './pages/bibliotech/permission/permissions-list/permissions-list.component';
import { PermissionCreateComponent } from './components/bibliotech/permission/permission-create/permission-create.component';
import { PermissionsCreateComponent } from './pages/bibliotech/permission/permissions-create/permissions-create.component';
import { PermissionDetailComponent } from './components/bibliotech/permission/permission-detail/permission-detail.component';
import { PermissionsDetailComponent } from './pages/bibliotech/permission/permissions-detail/permissions-detail.component';
import { PermissionUpdateComponent } from './components/bibliotech/permission/permission-update/permission-update.component';
import { PermissionsUpdateComponent } from './pages/bibliotech/permission/permissions-update/permissions-update.component';
import { UserListComponent } from './components/bibliotech/user/user-list/user-list.component';
import { UsersListComponent } from './pages/bibliotech/user/users-list/users-list.component';
import { UserCreateComponent } from './components/bibliotech/user/user-create/user-create.component';
import { UsersCreateComponent } from './pages/bibliotech/user/users-create/users-create.component';
import { UserDetailComponent } from './components/bibliotech/user/user-detail/user-detail.component';
import { UsersDetailComponent } from './pages/bibliotech/user/users-detail/users-detail.component';
import { UserUpdateComponent } from './components/bibliotech/user/user-update/user-update.component';
import { UsersUpdateComponent } from './pages/bibliotech/user/users-update/users-update.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    BreadcrumbComponent,
    TagListComponent,
    TagCreateComponent,
    TagDetailComponent,
    DomainDetailComponent,
    DomainListComponent,
    DomainCreateComponent,
    TagsListComponent,
    TagsCreateComponent,
    TagsDetailsComponent,
    TagsUpdateComponent,
    TagUpdateComponent,
    RoleListComponent,
    RolesListComponent,
    RoleCreateComponent,
    RolesCreateComponent,
    RoleDetailComponent,
    RolesDetailComponent,
    RoleUpdateComponent,
    RolesUpdateComponent,
    DomainsListComponent,
    DomainsCreateComponent,
    DomainsDetailComponent,
    DomainUpdateComponent,
    DomainsUpdateComponent,
    PermissionListComponent,
    PermissionsListComponent,
    PermissionCreateComponent,
    PermissionsCreateComponent,
    PermissionDetailComponent,
    PermissionsDetailComponent,
    PermissionUpdateComponent,
    PermissionsUpdateComponent,
    UserListComponent,
    UsersListComponent,
    UserCreateComponent,
    UsersCreateComponent,
    UserDetailComponent,
    UsersDetailComponent,
    UserUpdateComponent,
    UsersUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    TagService,
    DomainService,
    RoleService,
    PermissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
