import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-activity-selector',
	template: `
		<div class="box">
			<div class="date-selector">
				<label>{{ label }}</label>
				<input
					type="date"
					[min]="minDate"
					[max]="maxDate"
					[ngModel]="date"
					(ngModelChange)="onChangeDate($event)"
				/>
			</div>
		</div>
	`,
	styles: [
		`
			.date-selector {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 1rem;
			}
			label {
				margin-bottom: 0.5rem;
				font-weight: bold;
				font-size: 30px;
			}
			input {
				padding: 0.5rem;
				border-radius: 4px;
				border: 1px solid #ccc;
				font-size: 1rem;
			}
			.box div {
				padding: 20%;
			}
		`,
	],
})
export class ActivitySelectorComponent {
	@Input() label: string = 'Next activity';
	@Input() date: string = '';
	@Input() minDate = new Date().toISOString();
	@Input() maxDate: string = '';
	@Output() dateChange = new EventEmitter<string>();

	constructor(private readonly router: Router) {}

	onChangeDate($event: string) {
		this.dateChange.emit($event);
		this.router.navigate(['activity'], { queryParams: { date: $event } });
	}
}
