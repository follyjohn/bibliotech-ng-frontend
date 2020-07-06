import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage: string;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
     // TODO:make validation
  }
  onSubmitForm() {
    const formValue = this.registerForm.value;

    const userName = formValue.userName;
    const email = formValue.email;
    const password = formValue.password;
    this.auth.createNewUser(userName, email, password).then(
      () => {
        this.router.navigate(['/dashboard']);
      }
    ).catch(
      (error) => {
        // this.loading = false;
        this.errorMessage = error.message;
      }
    );

  }

}
