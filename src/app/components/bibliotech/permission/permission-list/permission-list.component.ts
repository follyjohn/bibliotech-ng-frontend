import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission.service';
import { Permission } from 'src/app/models/Permission.model';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit, OnDestroy {

  public permissions: Permission[];

  private permissionSub: Subscription;
  private errorMessage: string;

  constructor(private router: Router, private permissionService: PermissionService) { }
  ngOnDestroy(): void {
    this.permissionSub.unsubscribe();
  }

  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      console.log('test');
    });
    this.freshPermission();
  }

  freshPermission() {
    this.permissionSub = this.permissionService.permissions$.subscribe(
      (permissions) => {
        this.permissions = permissions;
      }
    );
    this.permissionService.getAllPermission();
  }

  openToEditPermission(id: string) {
    this.router.navigate(['/permission/' + id]);
  }

  openToModify(id: string) {
    this.router.navigate(['/permission/' + id + '/update']);
  }

  onDeletePermission(id: string) {
    this.permissionService.deletePermission(id).then(
      () => {
        // this.newTagForm.reset();
        this.freshPermission();
        // this.router.navigate(['/dashboard/tags']);
      }
    ).catch(
      (error) => {
        // this.errorMessage = error;
      }
    );
    // this.router.navigate(['/dashboard']);
  }

}
