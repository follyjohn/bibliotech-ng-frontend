import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/Tag.model';


@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit, OnDestroy {

  public tags: Tag[];

  private tagSub: Subscription;
  private errorMessage: string;

  constructor(private router: Router,private tagService: TagService) { }
  ngOnDestroy(): void {
    this.tagSub.unsubscribe();
  }


  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
     console.log('test');
    });
    this.freshTag();
  }

  onDeleteTag(id: string) {
    this.tagService.deleteTag(id).then(
      () => {
        // this.newTagForm.reset();
        this.freshTag();
        // this.router.navigate(['/dashboard/tags']);
      }
    ).catch(
      (error) => {
        // this.errorMessage = error;
      }
    );
    // this.router.navigate(['/dashboard']);
  }

  freshTag() {
    this.tagSub = this.tagService.tags$.subscribe(
      (tags) => {
        this.tags = tags;
      }
    );
    this.tagService.getAllTag();
  }

  openToEditTag(id: string) {
    this.router.navigate(['/dashboard/tag/' + id]);
  }

  openToModify(id: string) {
    this.router.navigate(['/dashboard/tag/' + id + '/update']);
  }
}
