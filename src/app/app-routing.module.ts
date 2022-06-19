import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
const routes: Routes = [
  {path:'saveStudent',component:StudentEditComponent},
  {path:'displayStudent',component:StudentDisplayComponent},
  {path:'deleteStudent',component:StudentDeleteComponent},
  {path:'updateStudent',component:StudentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
