import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/Role.model';
import { Permission } from 'src/app/models/Permission.model';



@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  public roles: Role[];

  private roleSub: Subscription;
  private errorMessage: string;

  constructor(private router: Router, private roleService: RoleService) { }
  ngOnDestroy(): void {
    this.roleSub.unsubscribe();
  }


  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function () {
      console.log('test');
    });
    this.freshRole();
  }

  onDeleteRole(id: string) {
    this.roleService.deleteRole(id).then(
      () => {
        // this.newRoleForm.reset();
        this.freshRole();
        // this.router.navigate(['/dashboard/Roles']);
      }
    ).catch(
      (error) => {
        // this.errorMessage = error;
      }
    );
    // this.router.navigate(['/dashboard']);
  }

  freshRole() {
    this.roleSub = this.roleService.roles$.subscribe(
      (roles) => {
        this.roles = roles;
      }
    );
    this.roleService.getAllRole();
  }

  openToEditRole(id: string) {
    this.router.navigate(['/role/' + id]);
  }

  openToModify(id: string) {
    this.router.navigate(['/role/' + id + '/update']);
  }

  getRolePermissions(role: Role) {
    // tslint:disable-next-line: variable-name
    const _role = JSON.parse(JSON.stringify(role));
    // tslint:disable-next-line: no-construct
    let pername = new String('');
    _role.permissions.forEach(perm => {
      pername += perm.name + ' ';
    });
    console.log(pername);
    return pername;

  }

}
