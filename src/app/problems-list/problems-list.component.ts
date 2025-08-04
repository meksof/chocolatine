import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problems-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.scss']
})
export class ProblemsListComponent {

  // Mock data for problems
  problems = [
    { id: 1, filename: 'aust.fzn', date: '20/02/2024 14:21', format: 'fzn' },
    { id: 2, filename: 'chess-queen.auz', date: '20/02/2024 14:21', format: 'auz' },
    { id: 3, filename: 'marble-test.auz', date: '20/02/2024 14:21', format: 'auz' },
    { id: 4, filename: 'frozen-yaourt.fzn', date: '20/02/2024 14:21', format: 'fzn' },
    { id: 5, filename: 'mitsubishi-plan.fzn', date: '20/02/2024 14:21', format: 'fzn' }
  ];

  constructor(private router: Router) { }

  onResolve(problem: any): void {
    console.log('Resolve problem:', problem.filename);
  }

  onConsult(problem: any): void {
    this.router.navigate(['/problem-details', problem.id]);
  }

  onDownload(problem: any): void {
    console.log('Download problem:', problem.filename);
  }

  onDelete(problem: any): void {
    console.log('Delete problem:', problem.filename);
  }

  onAddProblem(): void {
    console.log('Add new problem');
  }
}
