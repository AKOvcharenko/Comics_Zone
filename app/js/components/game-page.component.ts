import { Component } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
    selector: 'mw-game-page',
    templateUrl: 'app/templates/game-page.component.html',
    styleUrls: ['app/css/game-page.component.css']
})


export class GamePageComponent {

    requestPending = false;

    lives = [true, true, true, true, false];

    lifelines = {
        'get-all-letters': 5,
        'skip': 10,
        'get-letter': 15
    };

    scores = 0;

    character;

    constructor(
        private dataService: DataService
    ){}
    
    getCharacter(){
        this.dataService.getRandomCharacter().subscribe(data => {
            
        });
    }


    ngOnInit(){
        //this.getCharacter();
    }

}
