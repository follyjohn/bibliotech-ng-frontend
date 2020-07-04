import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/Tag.model';

@Component({
  selector: 'app-tag-update',
  templateUrl: './tag-update.component.html',
  styleUrls: ['./tag-update.component.scss']
})
export class TagUpdateComponent implements OnInit {

  public tag: Tag;
  public errorMessage: string;
  updateTagForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private tagService: TagService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.updateTagForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    // TODO:make validation
    this.route.params.subscribe(
      (params: Params) => {
        this.tagService.getTagById(params.id).then(
          (tag: Tag) => {
            this.tag = tag;
            this.updateTagForm.get('name').setValue(this.tag.name);
            this.updateTagForm.get('description').setValue(this.tag.description);
          }
        );
      }
    );
  }
  onSubmitForm() {
    const formValue = this.updateTagForm.value;

    const tag = new Tag();
    tag.name = formValue.name;
    tag.description = formValue.description;
    tag._id = this.tag._id;
    this.tagService.modifyTag(this.tag._id, tag).then(
      () => {
        this.updateTagForm.reset();
        this.router.navigate(['/dashboard/tag']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );


  }

}
