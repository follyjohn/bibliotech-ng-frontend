import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/Role.model';
import { PermissionService } from 'src/app/services/permission.service';
import { Permission } from 'src/app/models/Permission.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.scss']
})
export class RoleUpdateComponent implements OnInit {

  public permissions: Permission[];
  private permissionSub: Subscription;
  errorMessage: string;
  updateRoleForm: FormGroup;
  test: string;
  public selectedPermission: [string];
  public selectedPermissionIDs: Array<string>;
  public role: Role;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private permissionService: PermissionService,
    private roleService: RoleService) { }

  ngOnInit(): void {
    this.selectedPermissionIDs = new Array<string>();
    this.setPermission();
    this.initForm();
    console.log(this.selectedPermissionIDs);

  }
  initForm() {

    this.updateRoleForm = this.formBuilder.group({
      name: ['', Validators.required],
      // permissions: ['', Validators.required],
    });
    // TODO:make validation
    this.route.params.subscribe(
      (params: Params) => {
        this.roleService.getRoleById(params.id).then(
          (role) => {
            console.log(role);
            // // tslint:disable-next-line: variable-name
            // const _role = JSON.parse(JSON.stringify(this.role));
            // // console.log(JSON.stringify(this.role));
            // role.premissions.forEach(perm => {
            //   this.selectedPermissionIDs.push(perm._id);
            // });
            // this.role = role;
            // this.updateRoleForm.get('name').setValue(this.role.name);
            // this.updateRoleForm.get('description').setValue(this.role.description);
          }
        );
      }
    );

    this.fillSlectedPermission();
  }
  fillSlectedPermission() {
    // tslint:disable-next-line: variable-name
    // const _role = JSON.parse(JSON.stringify(this.role));
    // console.log(JSON.stringify(this.role));
    // _role.permissions.forEach(perm => {
    //   this.selectedPermissionIDs.push(perm._id);
    // });
    // console.log(this.role.name);

  }
  setPermission() {
    this.permissionSub = this.permissionService.permissions$.subscribe(
      (permissions) => {
        this.permissions = permissions;
      }
    );
    this.permissionService.getAllPermission();

  }
  isChecked(id: string) {
    // tslint:disable-next-line: prefer-const
    // return this.selectedPermissionIDs.includes(String(id));
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
    const formValue = this.updateRoleForm.value;
    const role = new Role();
    role.name = formValue.name;
    const userId = String(JSON.parse(localStorage.getItem('authData')).userId);
    const permissions = this.selectedPermissionIDs;
    this.roleService.createNewrole(role, userId, permissions).then(
      () => {
        this.updateRoleForm.reset();
        // this.router.navigate(['/domain/list']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
