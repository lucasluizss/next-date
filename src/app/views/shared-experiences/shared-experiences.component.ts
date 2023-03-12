import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shared-experiences',
	templateUrl: './shared-experiences.component.html',
	styleUrls: ['./shared-experiences.component.css'],
})
export class SharedExperiencesComponent implements OnInit {
	mediaList: any[] = [];
	constructor(private readonly http: HttpClient) {}

	ngOnInit(): void {
		this.http
			.get<any>('https://feeds.behold.so/Y09yaobOPiunKib6akKh')
			.subscribe(response => {
				this.mediaList = response.media;
			});
	}
}
