import { Component } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
    selector: 'mw-header',
    templateUrl: 'app/templates/header.component.html',
    styleUrls: ['app/css/header.component.css']
})


export class HeaderComponent {

    constructor(private dataService: DataService){}

    ngOnInit() {
        this.dataService.getCharacters({}).subscribe(smth => {
        });
    }
}
