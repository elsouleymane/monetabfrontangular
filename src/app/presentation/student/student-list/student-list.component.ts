import { Component } from '@angular/core';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import  { StudentService } from '../../../core/services/student/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    SidebarComponent, CommonModule, RouterModule
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

}
