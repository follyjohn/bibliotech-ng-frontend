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
    TagUpdateComponent
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
              AuthGuard, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
