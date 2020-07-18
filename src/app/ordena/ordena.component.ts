import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-ordena',
  templateUrl: './ordena.component.html',
  styleUrls: ['./ordena.component.css'],
})
export class OrdenaComponent implements OnInit {
  formSubmitted: boolean = false;
  orderForm: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    phone: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp('^[0-9]*$')),
      ]),
    ],
    address: ['', Validators.required],
    zip: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp('^[0-9]*$')),
      ]),
    ],
    order: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.orderForm.value);
    this.formSubmitted = true;
  }
}
