import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouterModule } from './shared/app-routing.module';
import { AuthGuard } from './shared/auth-guard.service';

import { AuthService } from './auth/auth.service';
import { DataService } from './shared/data.service';
import { EducationService } from './education/education.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { EducationComponent } from './education/education-display/education.component';
import { LoginComponent } from './auth/login/login.component';
import { EducationEditComponent } from './education/education-edit/education-edit.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceEditComponent } from './experience/experience-edit/experience-edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsEditComponent } from './projects/projects-edit/projects-edit.component';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    EducationComponent,
    LoginComponent,
    EducationEditComponent,
    SkillsComponent,
    SkillsEditComponent,
    ExperienceComponent,
    ExperienceEditComponent,
    ProjectsComponent,
    ProjectsEditComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, DataService, EducationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
