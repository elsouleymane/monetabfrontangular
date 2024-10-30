import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [
    RouterLink, ReactiveFormsModule
  ],
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {
  formStudentFormulaire!: FormGroup; //FormGroup permet de créer notre formulaire
  ngOnInit(): void {
    this.formStudentFormulaire = new FormGroup({
      nomInputHtml: new FormControl('', [Validators.required]), // le FormControl pour notre input
      prenomInputHtml: new FormControl('', [Validators.required]), // le FormControl pour notre input
      matriculeInputHtml: new FormControl('', [Validators.required]), // le FormControl pour notre input
      birthdateInputHtml: new FormControl('', [Validators.required]), // le FormControl pour notre input
      classInputHtml: new FormControl('', [Validators.required]), // le FormControl pour notre input
      phoneInputHtml: new FormControl('', [Validators.required]), // le FormControl pour notre input
      cityInputHtml: new FormControl('', [Validators.required]), // le FormControl pour notre input
    })
  }

  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty);
  }
}
