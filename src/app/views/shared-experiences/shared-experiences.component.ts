import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shared-experiences',
	templateUrl: './shared-experiences.component.html',
	styleUrls: ['./shared-experiences.component.css'],
})
export class SharedExperiencesComponent implements OnInit {
	public images: Array<any> = [];
	private readonly ACCESS_TOKEN = localStorage.getItem('auth_token');
	private readonly API_URL =
		'https://api.instagram.com/v1/tags/{TAG_NAME}/media/recent?access_token=' +
		this.ACCESS_TOKEN;

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.getInstagramImagesByTag('cb500f');
	}

	getInstagramImagesByTag(tag: string) {
		const apiUrl = this.API_URL.replace('{TAG_NAME}', tag);
		this.http.get(apiUrl).subscribe((data: any) => {
			this.images = data.data;
		});
	}
}
