import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-student-cards',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './student-cards.component.html',
  styleUrl: './student-cards.component.css'
})
export class StudentCardsComponent {

}
