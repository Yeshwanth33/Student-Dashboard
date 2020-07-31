import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admission', component: AdmissionFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
