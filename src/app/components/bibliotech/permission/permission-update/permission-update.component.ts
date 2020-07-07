import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PermissionService } from 'src/app/services/permission.service';
import { Permission } from 'src/app/models/Permission.model';

@Component({
  selector: 'app-permission-update',
  templateUrl: './permission-update.component.html',
  styleUrls: ['./permission-update.component.scss']
})
export class PermissionUpdateComponent implements OnInit {

  public permission: Permission;
  public errorMessage: string;
  updatePermissionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.updatePermissionForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    // TODO:make validation
    this.route.params.subscribe(
      (params: Params) => {
        this.permissionService.getPermissionById(params.id).then(
          (permission: Permission) => {
            this.permission = permission;
            this.updatePermissionForm.get('name').setValue(this.permission.name);
          }
        );
      }
    );
  }

  onSubmitForm() {
    const formValue = this.updatePermissionForm.value;

    const permission = new Permission();
    permission.name = formValue.name;
    // TODO: Permission crated by id
    permission._id = this.permission._id;
    this.permissionService.modifyPermission(this.permission._id, permission).then(
      () => {
        this.updatePermissionForm.reset();
        this.router.navigate(['/permission/list']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );


  }

}
