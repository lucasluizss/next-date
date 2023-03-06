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
					[min]="minDate | date : 'yyyy-MM-dd'"
					[ngModel]="date"
					(ngModelChange)="onChangeDate($event)"
				/>
				<button (click)="onSubmit()" class="confirm-btn">Confirm</button>
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
			.confirm-btn {
				margin-top: 20px;
				margin-right: 5px;
				width: 155px;
			}
		`,
	],
})
export class ActivitySelectorComponent {
	@Input() label: string = 'Next activity';
	@Input() date: string = '';
	@Input() minDate = new Date();
	@Output() dateChange = new EventEmitter<string>();

	constructor(private readonly router: Router) {}

	onChangeDate($event: any) {
		this.date = $event;
		this.dateChange.emit($event);
	}

	onSubmit() {
		this.router.navigate(['activity'], { queryParams: { date: this.date } });
	}
}
