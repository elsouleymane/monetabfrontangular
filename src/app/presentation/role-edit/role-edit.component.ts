import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-role-edit',
  standalone: true,
  imports: [
    RouterLink, ReactiveFormsModule
  ],
  templateUrl: './role-edit.component.html',
  styleUrl: './role-edit.component.css'
})
export class RoleEditComponent {


}
