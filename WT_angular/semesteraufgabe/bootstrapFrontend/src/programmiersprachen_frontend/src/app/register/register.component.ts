//import { ExistDialogComponent } from './exist-dialog/exist-dialog.component';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//import { BackendService } from '../shared/backend.service';
//import { User } from '../shared/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
//skript
  hide = true;

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = this.registerForm?.get('password')?.value;
    let confirmPass = this.registerForm?.get('passwordrepeat')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  registerForm = this.fb.group(
    {
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(8),
        Validators.maxLength(20)])
      ],
      passwordrepeat: [null],
      role: [null, Validators.required],
    }, 
  { validators: this.checkPasswords });

roles = [
  {name: 'Admin', abbreviation: 'admin'},
  {name: 'User', abbreviation: 'user'}
];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Schön, dass Du dabei bist!');
  }
/* 
  checkPasswords() {

  } */

  checkIfExists() {

  }
}
