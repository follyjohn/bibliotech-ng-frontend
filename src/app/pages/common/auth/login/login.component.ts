import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmitForm() {
    const formValue = this.loginForm.value;

    const email = formValue.email;
    const password = formValue.password;
    this.auth.login(email, password).then(
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
