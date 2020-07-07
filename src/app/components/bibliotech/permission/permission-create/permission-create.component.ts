import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionService } from 'src/app/services/permission.service';
import { Permission } from 'src/app/models/Permission.model';

@Component({
  selector: 'app-permission-create',
  templateUrl: './permission-create.component.html',
  styleUrls: ['./permission-create.component.scss']
})
export class PermissionCreateComponent implements OnInit {

  errorMessage: string;
  newPermissionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute, private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newPermissionForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    // TODO:make validation
  }

  onSubmitForm() {
    const formValue = this.newPermissionForm.value;

    const permission = new Permission();
    permission.name = formValue.name;
    // TODO: Permission crated by id
    const userId = String(JSON.parse(localStorage.getItem('authData')).userId);
    this.permissionService.createNewPermission(permission, userId).then(
      () => {
        this.newPermissionForm.reset();
        this.router.navigate(['/permission/list']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );


  }


}
