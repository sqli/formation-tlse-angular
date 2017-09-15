import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from '../Author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorForm = new FormGroup({
    name: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(4)
      ])
  });

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  onSubmit() {
    const formModel = this.authorForm.value;
    const saveAuthor: Author = {
      id: 0,
      name: formModel.name as string
    };
    this.authorService.create(saveAuthor).subscribe();
  }

}
