import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule , MatFormFieldModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { DialogElementsExampleDialog } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
const routes: Routes = [{
  path: '',
  component: LoginComponent,
}];
@NgModule({
  declarations: [LoginComponent,DialogElementsExampleDialog],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[DialogElementsExampleDialog]
})
export class LoginModule { }
