import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DomainService } from 'src/app/services/domain.service';
import { Domain } from 'src/app/models/Domain.model';

@Component({
  selector: 'app-domain-create',
  templateUrl: './domain-create.component.html',
  styleUrls: ['./domain-create.component.scss']
})
export class DomainCreateComponent implements OnInit {
  errorMessage: string;
  newDomainForm: FormGroup;
  test: string;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private domainService: DomainService) { }

  ngOnInit(): void {
    this.test = JSON.parse(localStorage.getItem('authData')).userId;
    this.initForm();
  }
  initForm() {
    this.newDomainForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    // TODO:make validation
  }
  onSubmitForm() {
    const formValue = this.newDomainForm.value;

    const domain = new Domain();
    domain.name = formValue.name;
    domain.description = formValue.description;
    // TODO: Domain crated by id
    const userId = String(JSON.parse(localStorage.getItem('authData')).userId);
    this.domainService.createNewDomain(domain, userId).then(
      () => {
        this.newDomainForm.reset();
        this.router.navigate(['/domain/list']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );


  }
}
