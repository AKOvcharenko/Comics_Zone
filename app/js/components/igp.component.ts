import { Component } from '@angular/core';
import { DataService } from './../services/data.service';


@Component({
    selector: 'mw-igp',
    templateUrl: 'app/templates/igp.component.html',
    styleUrls: ['app/css/igp.component.css']
})


export class IGPComponent{

    charactersGrids = [];

    constructor(private dataService: DataService){}


    getMore(){
        this.dataService.getCharacters({}).subscribe(data => {
            this.charactersGrids.push(data.data.results);
        });
    }


    ngOnInit() {
        this.getMore();
    }
}
