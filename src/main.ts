import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if ('production' === process.env.NODE_ENV) enableProdMode();

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}
