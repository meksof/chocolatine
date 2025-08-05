import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-breadcrumbs",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"],
})
export class BreadcrumbsComponent {
  @Input() problemId: string | null = null;
  @Output() goBack = new EventEmitter<void>();

  onGoBack(): void {
    this.goBack.emit();
  }
}
