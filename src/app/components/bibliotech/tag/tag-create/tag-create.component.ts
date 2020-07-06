import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/Tag.model';

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  styleUrls: ['./tag-create.component.scss']
})
export class TagCreateComponent implements OnInit {
  errorMessage: string;
  newTagForm: FormGroup;
  test: string;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private tagService: TagService) { }

  ngOnInit(): void {
    this.test = JSON.parse(localStorage.getItem('authData')).userId;
    this.initForm();
  }
  initForm() {
    this.newTagForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    // TODO:make validation
  }
  onSubmitForm() {
    const formValue = this.newTagForm.value;

    const tag = new Tag();
    tag.name = formValue.name;
    tag.description = formValue.description;
    // TODO: tag crated by id
    const userId = String(JSON.parse(localStorage.getItem('authData')).userId);
    this.tagService.createNewTag(tag, userId).then(
      () => {
        this.newTagForm.reset();
        this.router.navigate(['/tag/list']);
      }
    ).catch(
      (error) => {
        this.errorMessage = error;
      }
    );


   }
}
