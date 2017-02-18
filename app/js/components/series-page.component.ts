import { Component } from '@angular/core';

@Component({
    selector: 'mw-series-page',
    templateUrl: 'app/templates/series-page.component.html',
    styleUrls: ['app/css/series-page.component.css']
})


export class SeriesPageComponent {

    series:Object = {
        1009165 : [], // avengers
        1009726 : [], // x-men
        1011299 : [], // Guardians of the Galaxy
        1009299 : [] // fantastic-four
    };


}
