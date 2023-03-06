import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-activity',
	templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnDestroy {
	public timer: string = '';
	public activity: string = 'Choose Next Activity';
	public activities: string[] = [
		'Go for a walk',
		'Read a book',
		'Go to the market',
		'Shooping',
		'Picnic',
		'Grab a drink in a pub',
		'Romantic dinner',
		'Take a nap together',
		'Go to the movie',
		'Watch a movie',
		'Try a new recipe',
		'Go for a bike ride',
		'Gym',
		'Music',
		'Party',
		'Bar',
		'No destination ride',
		'Beach',
		'Hiking',
	];
	public activityIndex: number = 0;
	private intervalId: any;

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.setTimer();
		this.intervalId = setInterval(() => {
			this.setTimer();
			this.cdr.detectChanges();
		}, 1000);
	}

	ngOnDestroy(): void {
		clearInterval(this.intervalId);
	}

	setTimer(): void {
		const today = new Date();
		const sunday = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + (7 - today.getDay())
		);

		const diff = sunday.getTime() - today.getTime();
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);
		this.timer = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
	}

	sortActivity(): void {
		const index = Math.floor(Math.random() * this.activities.length);
		this.activity = this.activities[index];
	}
}
