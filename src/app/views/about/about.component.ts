import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styles: [
		`
			.container {
				min-height: 100vh; /* minimum height = screen height */
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 20px 0 60px 0;
			}

			#about-content {
				max-width: 800px;
				padding: 40px;
				background-color: #fff;
				border-radius: 10px;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
				text-align: justify;
				line-height: 1.5;
				font-size: 16px;
				color: #333;
			}

			h1 {
				margin-top: 0;
				margin-bottom: 20px;
				font-size: 24px;
				font-weight: bold;
				color: #800180;
				text-align: center;
				text-transform: uppercase;
			}

			/* Media queries for mobile screens */
			@media screen and (max-width: 480px) {
				.container {
					margin: 20px 0 60px 0;
				}
			}

			.social-media {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}
		`,
	],
})
export class AboutComponent {}
