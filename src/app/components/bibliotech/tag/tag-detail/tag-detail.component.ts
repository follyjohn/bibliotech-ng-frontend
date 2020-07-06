import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.scss']
})
export class TagDetailComponent implements OnInit {

  public tag: Tag;

  private tagSub: Subscription;
  private errorMessage: string;
  constructor(private route: ActivatedRoute, private router: Router, private tagService: TagService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.tagService.getTagById(params.id).then(
          (tag: Tag) => {
            this.tag = tag;
          }
        );
      }
    );
  }

}
