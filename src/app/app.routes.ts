import { Routes } from '@angular/router';
import { ProblemsListComponent } from './problems-list/problems-list.component';
import { ProblemDetailsComponent } from './problem-details/problem-details.component';

export const routes: Routes = [
  { path: '', component: ProblemsListComponent },
  { path: 'problem-details/:id', component: ProblemDetailsComponent },
  { path: '**', redirectTo: '' }
];
