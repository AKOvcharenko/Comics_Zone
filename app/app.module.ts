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
import { GamePageComponent } from './js/components/game-page.component';
import { LifePanelComponent } from './js/components/life-panel.component';
import { LifelinesPanelComponent } from './js/components/lifelines-panel.component';
import { BackToTopComponent } from './js/components/back-to-top.component';
import { FixedYearPanelComponent } from './js/components/fixed-years-panel.component';
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
        ComicsGComponent,
        BackToTopComponent,
        FixedYearPanelComponent,
        GamePageComponent,
        LifePanelComponent,
        LifelinesPanelComponent
    ],
    providers:[
        DataService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}