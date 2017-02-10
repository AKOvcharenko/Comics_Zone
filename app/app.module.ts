import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './js/components/app.component';
import { HeaderComponent } from './js/components/header.component';
import { LoaderComponent } from './js/components/loader.component';
import { CGPComponent } from './js/components/characters-grid-page.component';
import { CGComponent } from './js/components/characters-grid.component';
import { ComicsGPComponent } from './js/components/comics-grid-page.component';
import { ComicsGComponent } from './js/components/comics-grid.component';
import { DataService } from './js/services/data.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        LoaderComponent,
        CGPComponent,
        CGComponent,
        ComicsGPComponent,
        ComicsGComponent
    ],
    providers:[
        DataService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}