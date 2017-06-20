import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutingComponent = [
    HomeComponent
];

export const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}
