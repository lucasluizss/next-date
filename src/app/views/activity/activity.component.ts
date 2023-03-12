import {
	OnInit,
	OnDestroy,
	Component,
	AfterViewInit,
	ChangeDetectorRef,
} from '@angular/core';
import 'add-to-calendar-button';

import database from '@data/database.json';

type CalendarEvent = {
	summary: string;
	description: string;
	location: string;
	startDate: string;
	endDate: string;
	startTime: string;
	endTime: string;
	timeZone: string;
};

const SATURDAY = 6;

@Component({
	selector: 'app-activity',
	templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit, AfterViewInit, OnDestroy {
	public calendarEvent?: CalendarEvent;
	public title: string = 'Suggested start in';
	public timer: string = '';
	public activity: string = 'Loading...';

	public activities: string[] = database.activities;
	private intervalId: any;
	private nextSaturday = new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		new Date().getDate() + (SATURDAY - new Date().getDay())
	);

	constructor(private readonly cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.setTimer();
		this.intervalId = setInterval(() => {
			this.setTimer();
			this.cdr.detectChanges();
		}, 1000);
	}

	ngAfterViewInit() {
		this.sortActivity();
	}

	ngOnDestroy(): void {
		clearInterval(this.intervalId);
	}

	private setTimer(): void {
		const today = new Date();
		this.nextSaturday.setHours(19, 0, 0);
		const diff = this.nextSaturday.getTime() - today.getTime();
		const isToday = diff < 0;

		if (isToday) {
			this.timer = 'NOW';
		} else {
			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((diff % (1000 * 60)) / 1000);

			this.timer = `${days}d ${hours}h ${minutes}m ${seconds}s`;
		}
	}

	private getFormatedDate(date: Date) {
		return date.toISOString().substring(0, 10);
	}

	sortActivity(): void {
		const index = Math.floor(Math.random() * this.activities.length);
		this.activity = this.activities[index];

		this.calendarEvent = {
			summary: this.activity,
			description: `Planned date: ${this.activity}`,
			location: 'Unknown Location',
			startDate: this.getFormatedDate(this.nextSaturday),
			endDate: this.getFormatedDate(this.nextSaturday),
			startTime: '19:00',
			endTime: '23:59',
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		};
		this.cdr.detectChanges();
	}
}
