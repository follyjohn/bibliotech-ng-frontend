import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Domain } from '../models/Domain.model';
import { Subject } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/domain';

@Injectable({
  providedIn: 'root'
})

export class DomainService {

  constructor(private router: Router,
              private http: HttpClient) {
  }

  public domains$ = new Subject<Domain[]>();
  public domains: Domain[] = [];

  getAllDomain() {
    this.http.get(baseUrl).subscribe(
      (domains: Domain[]) => {
        if (domains) {
          this.domains = domains;
          this.emitDomains();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitDomains() {
    this.domains$.next(this.domains);
  }

  getDomainById(id: string) {
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

  createNewDomain(domain: Domain, createdBy: string) {
    const name = domain.name;
    const description = domain.description;
    return new Promise((resolve, reject) => {
      this.http.post(baseUrl,
        {
          name,
          description,
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

  modifyDomain(id: string, domain: Domain) {
    return new Promise((resolve, reject) => {
      this.http.put(baseUrl + id, domain).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteDomain(id: string) {
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
