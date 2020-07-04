import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../models/Tag.model';
import { Subject } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/admin/tag';

@Injectable({
  providedIn: 'root'
})

export class TagService {

  constructor(private router: Router,
              private http: HttpClient) {
  }

  public tags$ = new Subject<Tag[]>();
  public tags: Tag[] = [];

  getAllTag(){
    this.http.get('http://localhost:3000/api/admin/tag').subscribe(
      (tags: Tag[]) => {
        if (tags) {
          this.tags = tags;
          this.emitTags();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitTags() {
    this.tags$.next(this.tags);
  }

  getTagById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/admin/tag/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createNewTag(tag: Tag) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/admin/tag/', tag).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  modifyTag(id: string, tag: Tag) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/admin/tag/' + id, tag).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteTag(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/admin/tag/' + id).subscribe(
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
