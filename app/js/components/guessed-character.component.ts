import { Component, Input } from '@angular/core';

@Component({
    selector: 'mw-guessed-character',
    templateUrl: 'app/templates/guessed-character.component.html',
    styleUrls: ['app/css/guessed-character.component.css']
})


export class GuessedCharacterComponent{
    @Input() character;
    
    
}
