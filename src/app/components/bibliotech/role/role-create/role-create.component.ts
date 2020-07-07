import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/Role.model';
import { PermissionService } from 'src/app/services/permission.service';
import { Permission } from 'src/app/models/Permission.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  public permissions: Permission[];
  private permissionSub: Subscription;
  errorMessage: string;
  newRoleForm: FormGroup;
  test: string;
  public selectedPermission: [string];
  public selectedPermissionIDs: Array<string>;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private permissionService: PermissionService,
    private roleService: RoleService) { }

  ngOnInit(): void {
    this.selectedPermissionIDs = new Array<string>();
    this.setPermission();
    this.initForm();
  }
  initForm() {
    this.newRoleForm = this.formBuilder.group({
      name: ['', Validators.required],
      // permissions: ['', Validators.required],
    });
    // TODO:make validation
  }
  setPermission() {
    this.permissionSub = this.permissionService.permissions$.subscribe(
      (permissions) => {
        this.permissions = permissions;
      }
    );
    this.permissionService.getAllPermission();
  }
  isChecked(permission: Permission) {
    // tslint:disable-next-line: prefer-const
    for (const selectedPermissionID of this.selectedPermissionIDs) {
      if (selectedPermissionID === permission._id) {
        return true;
      }
    }
    return false;
  }

  changeSelection(permission: Permission) {
    if (this.selectedPermissionIDs.includes(String(permission._id))) {
      console.log('rm');
      const index = this.selectedPermissionIDs.indexOf(String(permission._id));
      console.log(index);

      // this.selectedPermissionIDs.slice(index, 2);
      this.selectedPermissionIDs = this.selectedPermissionIDs.filter(id => id !== String(permission._id));

    } else if (!this.selectedPermissionIDs.includes(permission._id)) {
      this.selectedPermissionIDs.push(permission._id);
      console.log('add');
    }
    // this.selectedPermissionIDs.sort();
    console.log(this.selectedPermissionIDs);

    // if (this.selectedPermissionIDs.includes(permission._id))) {
    //   this.selectedPermissionIDs.slice(this.selectedPermissionIDs.indexOf(permission._id), 1);
    // // tslint:disable-next-line: align
    // } else {
    //   this.selectedPermissionIDs.push(permission._id);
    // }
    // this.selectedPermissionIDs.sort();
    // console.log(this.selectedPermissionIDs);

  }


  onSubmitForm() {
    const formValue = this.newRoleForm.value;
    const role = new Role();
    role.name = formValue.name;
    const userId = String(JSON.parse(localStorage.getItem('authData')).userId);
    const permissions = this.selectedPermissionIDs;
    this.roleService.createNewrole(role, userId, permissions).then(
      () => {
        this.newRoleForm.reset();
        // this.router.navigate(['/domain/list']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
