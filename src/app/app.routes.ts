import { Routes } from '@angular/router';
import {DashboardComponent} from './presentation/dashboard/dashboard.component';
import {StudentListComponent} from './presentation/student/student-list/student-list.component';
import {TeacherComponent} from './presentation/teacher/teacher.component';
import {UserComponent} from './presentation/user/user.component';
import {ReportComponent} from './presentation/report/report.component';
import {StudentCreateComponent} from './presentation/student/student-create/student-create.component';
import {StudentEditComponent} from './presentation/student/student-edit/student-edit.component';
import {TeacherCreateComponent} from './presentation/teacher-create/teacher-create.component';
import {TeacherEditComponent} from './presentation/teacher-edit/teacher-edit.component';
import {UserCreateComponent} from './presentation/user-create/user-create.component';
import {UserEditComponent} from './presentation/user-edit/user-edit.component';
import {RoleListComponent} from './presentation/role-list/role-list.component';
import {RoleCreateComponent} from './presentation/role-create/role-create.component';
import {RoleEditComponent} from './presentation/role-edit/role-edit.component';
import {LeaveListComponent} from './presentation/leave-list/leave-list.component';
import {LeaveCreateComponent} from './presentation/leave-create/leave-create.component';
import {LeaveEditComponent} from './presentation/leave-edit/leave-edit.component';
import {StudentCardsComponent} from './presentation/student-cards/student-cards.component';
import {StudentCardsEditComponent} from './presentation/student-cards-edit/student-cards-edit.component';
import {StudentCardsAddComponent} from './presentation/student-cards-add/student-cards-add.component';

export const routes: Routes = [
  // other routes can be added here
  {path: '', component: DashboardComponent},
  {path: 'student', redirectTo: 'student-list', pathMatch:'full' },
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-create', component: StudentCreateComponent},
  {path: 'student-edit', component: StudentEditComponent},
  {path: 'teacher', redirectTo: 'teacher-list', pathMatch:'full' },
  {path: 'teacher-list', component: TeacherComponent},
  {path: 'teacher-create', component: TeacherCreateComponent},
  {path: 'teacher-edit', component: TeacherEditComponent},
  {path: 'user', redirectTo: 'user-list', pathMatch:'full' },
  {path: 'user-create', component: UserCreateComponent},
  {path: 'user-edit', component: UserEditComponent},
  {path: 'user-list', component: UserComponent},
  {path: 'report', component: ReportComponent},
  {path: 'role', redirectTo: 'role-list', pathMatch:'full' },
  {path: 'role-list', component: RoleListComponent},
  {path: 'role-create', component: RoleCreateComponent},
  {path: 'role-edit', component: RoleEditComponent},
  {path: 'leave', redirectTo: 'leave-list', pathMatch:'full' },
  {path: 'leave-list', component: LeaveListComponent},
  {path: 'leave-create', component: LeaveCreateComponent},
  {path: 'leave-edit', component: LeaveEditComponent},
  {path: 'student_cards', component: StudentCardsComponent},
  {path: 'student_card_edit', component: StudentCardsEditComponent},
  {path: 'student_card_create', component: StudentCardsAddComponent}

];
