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
        var rand = Math.floor(Math.random() * 20);
        this.requestPending = true;
        this.dataService.getCharacters({offset: rand * 34}).subscribe(data => {
            while(/image_not_available/.test(data.data.results[rand].thumbnail.path)){
                rand = Math.floor(Math.random() * 20);
            }
            this.requestPending = false;
            return data.data.results[rand];
        });
    }
    
    onFilled(){
    }

    asfd(){
       return !this.requestPending && this.character;
    }


    ngOnInit(){
        this.character = this.getCharacter();
    }

}
