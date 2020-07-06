import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Permission } from '../models/Permission.model';
import { Subject } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/permission';

@Injectable({
  providedIn: 'root'
})

export class PermissionService {

  constructor(private router: Router,
    private http: HttpClient) {
  }

  public permissions$ = new Subject<Permission[]>();
  public permissions: Permission[] = [];

  getAllPermission() {
    this.http.get(baseUrl).subscribe(
      (permissions: Permission[]) => {
        if (permissions) {
          this.permissions = permissions;
          this.emitPermissions();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitPermissions() {
    this.permissions$.next(this.permissions);
  }

  getPermissionById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(baseUrl + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewPermission(permission: Permission, createdBy: string) {
    const name = permission.name;
    return new Promise((resolve, reject) => {
      this.http.post(baseUrl,
        {
          name,
          createdBy
        }
      ).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyPermission(id: string, permission: Permission) {
    return new Promise((resolve, reject) => {
      this.http.put(baseUrl + id, permission).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deletePermission(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(baseUrl + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
