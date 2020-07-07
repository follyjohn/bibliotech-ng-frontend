import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role.model';
import { Subject } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/role/';

@Injectable({
  providedIn: 'root'
})

export class RoleService {

  constructor(private router: Router,
              private http: HttpClient) {
  }

  public roles$ = new Subject<Role[]>();
  public roles: Role[] = [];

  getAllRole() {
    this.http.get(baseUrl).subscribe(
      (roles: Role[]) => {
        if (roles) {
          this.roles = roles;
          this.emitroles();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitroles() {
    this.roles$.next(this.roles);
  }

  getroleById(id: string) {
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

  createNewrole(role: Role, createdBy: string, permissions: string[]) {
    const name = role.name;
    return new Promise((resolve, reject) => {
      this.http.post(baseUrl,
        {
          name,
          permissions,
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

  modifyRole(id: string, role: Role) {
    return new Promise((resolve, reject) => {
      this.http.put(baseUrl + id, role).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteRole(id: string) {
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
