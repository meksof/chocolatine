import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { ActionsComponent } from '../shared/actions/actions.component';
import { TableComponent, SolverData } from '../shared/table/table.component';

@Component({
  selector: 'app-problem-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.scss']
})
export class ProblemDetailsComponent implements OnInit {
  problemId: string | null = null;
  problemName: string = 'aust.fzn';

  // Mock data for solvers
  solvers = [
    { name: 'Choco Solver', status: 'In progress', solutions: 0, actions: ['Consult', 'Refresh', 'Close'] },
    { name: 'Choco 2 solver', status: 'Closed', solutions: 11, actions: ['Consult'] },
    { name: 'Choco 3 solver', status: 'Closed', solutions: 22, actions: ['Consult'] },
    { name: 'Extra solver', status: 'Closed', solutions: 112, actions: ['Consult'] },
    { name: 'Extra 2 solver', status: 'Closed', solutions: 2, actions: ['Consult'] }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.problemId = this.route.snapshot.paramMap.get('id');
    if (this.problemId) {
      // In a real app, you would fetch problem details based on the ID
      this.loadProblemDetails(this.problemId);
    }
  }

  private loadProblemDetails(id: string): void {
    // Mock implementation - in a real app, this would fetch from a service
    switch (id) {
      case '1':
        this.problemName = 'aust.fzn';
        break;
      case '2':
        this.problemName = 'chess-queen.auz';
        break;
      case '3':
        this.problemName = 'marble-test.auz';
        break;
      case '4':
        this.problemName = 'frozen-yaourt.fzn';
        break;
      case '5':
        this.problemName = 'mitsubishi-plan.fzn';
        break;
      default:
        this.problemName = 'aust.fzn';
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  onResolve(): void {
    // Handle resolve action
    console.log('Resolve problem:', this.problemName);
  }

  onDelete(): void {
    // Handle delete action
    console.log('Delete problem:', this.problemName);
  }

  onActionClick(solver: any, action: string): void {
    console.log(`Action ${action} for solver ${solver.name}`);
  }
}
