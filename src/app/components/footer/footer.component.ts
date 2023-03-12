import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
		<footer class="footer">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<a routerLink="/activity">Home</a> | &nbsp;
						<a routerLink="/shared-experiences">Shared Experiences</a> | &nbsp;
						<a routerLink="/about">About</a> | &nbsp;
						<a routerLink="/terms-of-use">Terms of Use</a>
					</div>
				</div>
			</div>
		</footer>
	`,
	styles: [
		`
			.footer {
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100%;
				background-color: transparent;
				color: white;
				text-align: center;
				padding: 20px;
			}

			.footer a {
				color: white;
				text-decoration: none;
				margin-right: 10px;
			}

			.footer a:last-child {
				margin-right: 0;
			}

			.footer a:hover {
				text-decoration: underline;
			}

			@media screen and (max-width: 480px) {
				.footer {
					max-width: 360px;
				}
			}
		`,
	],
})
export class FooterComponent {}
