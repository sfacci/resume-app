import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StartComponent } from '../start/start.component';
import { LoginComponent } from '../auth/login/login.component';
import { EducationComponent } from '../education/education.component';
import { EducationEditComponent } from '../education/education-edit/education-edit.component';
import { SkillsComponent } from '../skills/skills.component';
import { SkillsEditComponent } from '../skills/skills-edit/skills-edit.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ExperienceEditComponent } from '../experience/experience-edit/experience-edit.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectsEditComponent } from '../projects/projects-edit/projects-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },

  { path: 'login', component: LoginComponent },
  { path: 'education', component: EducationComponent, children: [
    { path: 'edit', component: EducationEditComponent}
  ]},
  { path: 'skills', component: SkillsComponent, children: [
    { path: 'edit', component: SkillsEditComponent}
  ]},
  { path: 'experience', component: ExperienceComponent, children: [
    { path: 'edit', component: ExperienceEditComponent}
  ]},
  { path: 'projects', component: ProjectsComponent, children: [
    { path: 'edit', component: ProjectsEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule { }