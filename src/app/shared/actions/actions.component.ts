import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-actions",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./actions.component.html",
  styleUrls: ["./actions.component.scss"],
})
export class ActionsComponent {
  @Output() resolve = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onResolve(): void {
    this.resolve.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
