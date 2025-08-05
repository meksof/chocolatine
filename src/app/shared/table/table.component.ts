import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface SolverData {
  name: string;
  status: string;
  solutions: number;
  actions: string[];
}

@Component({
  selector: "app-table",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent {
  @Input() solvers: SolverData[] = [];
  @Output() actionClick = new EventEmitter<{
    solver: SolverData;
    action: string;
  }>();

  onActionClick(solver: SolverData, action: string): void {
    this.actionClick.emit({ solver, action });
  }
}
