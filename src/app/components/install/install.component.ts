import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
	selector: 'app-install',
	template: `
		<div *ngIf="showInstallationBanner">
			<div class="install-pwa">
				<div class="install-pwa-icon">
					<img src="assets/icons/icon-96x96.png" alt="App Icon" />
				</div>
				<div class="install-pwa-text">
					<h2>Add the app to Home Screen</h2>
					<p>Install this app on your device for a better experience.</p>
				</div>
				<div class="install-pwa-button">
					<button (click)="addToHomeScreen()">Install</button>
				</div>
			</div>
		</div>
	`,
	styles: [
		`
			.install-pwa {
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #f8f8f8;
				border: 1px solid #e0e0e0;
				border-radius: 4px;
				box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
				padding: 24px;
				margin: 0 20px 16px 20px;
			}

			.install-pwa-icon {
				flex-shrink: 0;
				margin-right: 16px;
			}

			.install-pwa-text {
				flex-grow: 1;
			}

			.install-pwa-text h2 {
				font-size: 24px;
				margin-bottom: 8px;
			}

			.install-pwa-text p {
				font-size: 18px;
				margin-bottom: 16px;
			}

			.install-pwa-button {
				flex-shrink: 0;
			}

			.install-pwa-button button {
				background-color: #1a73e8;
				color: #fff;
				border: none;
				border-radius: 4px;
				font-size: 18px;
				font-weight: 600;
				padding: 8px 16px;
				cursor: pointer;
			}

			.install-pwa-button button:hover {
				background-color: #0d47a1;
			}

			@media screen and (max-width: 480px) {
				.install-pwa-icon img {
					height: 48px;
					width: 48px;
				}
			}
		`,
	],
})
export class InstallComponent implements OnInit {
	public showInstallationBanner = false;
	private deferredPrompt: any = null;

	constructor(private readonly swUpdate: SwUpdate) {}

	async ngOnInit(): Promise<void> {
		this.addToHomeScreenBanner();
		this.loadNewVersion();
	}

	private addToHomeScreenBanner(): void {
		window.addEventListener('beforeinstallprompt', e => {
			e.preventDefault();
			this.deferredPrompt = e;
			this.showInstallationBanner = true;
		});
	}

	public addToHomeScreen() {
		this.deferredPrompt.prompt();
		this.deferredPrompt.userChoice.then((choiceResult: any) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			} else {
				console.log('User dismissed the A2HS prompt');
			}
			this.deferredPrompt = null;
			this.showInstallationBanner = false;
		});
	}

	private loadNewVersion(): void {
		if (this.swUpdate.isEnabled) {
			this.swUpdate.versionUpdates.subscribe(() => window.location.reload());
		}
	}
}
