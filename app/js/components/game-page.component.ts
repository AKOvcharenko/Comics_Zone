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

    lifeLinesAction = {
        'skip': this.getCharacter,
        'get-all-letters': this.showAllLetters,
        'get-letter': this.showOneLetter
    };

    scores = 15;

    character;

    constructor(
        private dataService: DataService
    ){}

    getZeroedScores(){
        var string = this.scores.toString();
        while(string.length < 6){
            string = '0' + string;
        }
        return string;
    }
    
    getCharacter(){
        this.requestPending = true;
        var rand = Math.floor(Math.random() * 20);
        this.dataService.getCharacter().subscribe(data => {
            console.log(data.data.results[rand])
            while(/image_not_available/.test(data.data.results[rand].thumbnail.path)){
                rand = Math.floor(Math.random() * 20);
            }
            this.requestPending = false;
            this.character = data.data.results[rand];
        });
    }

    useLifeline(type){
        if(this.requestPending) return;
        var currentValue = this.lifelines[type];
        this.lifelines[type] = currentValue - 1;
        this.lifeLinesAction[type].call(this);
    }

    showAllLetters(){}

    showOneLetter(){}

    onFilled(event){
    }

    ngOnInit(){
        this.getCharacter();
    }

}
