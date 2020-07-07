import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomainService } from 'src/app/services/domain.service';
import { Domain } from 'src/app/models/Domain.model';
@Component({
  selector: 'app-domain-update',
  templateUrl: './domain-update.component.html',
  styleUrls: ['./domain-update.component.scss']
})
export class DomainUpdateComponent implements OnInit {
  errorMessage: string;
  updateDomainForm: FormGroup;
  domain: Domain;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private domainService: DomainService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.updateDomainForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    // TODO:make validation
    this.route.params.subscribe(
      (params: Params) => {
        this.domainService.getDomainById(params.id).then(
          (domain: Domain) => {
            this.domain = domain;
            this.updateDomainForm.get('name').setValue(this.domain.name);
            this.updateDomainForm.get('description').setValue(this.domain.description);
          }
        );
      }
    );
  }
  onSubmitForm() {
    const formValue = this.updateDomainForm.value;

    const domain = new Domain();
    domain.name = formValue.name;
    domain.description = formValue.description;
    domain._id = this.domain._id;
    this.domainService.modifyDomain(this.domain._id, domain).then(
      () => {
        this.updateDomainForm.reset();
        this.router.navigate(['/domain/list']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );


  }

}
