import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() user = new EventEmitter();
  form: FormGroup;

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.FormBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern("^[a-zA-Z -']+"),
        ],
      ],
      age: ['', [Validators.required, Validators.max(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get controls() {
    return this.form.controls;
  }

  onSubmit() {
    this.user.emit(this.form.value);
    this.form.reset();
  }
}
