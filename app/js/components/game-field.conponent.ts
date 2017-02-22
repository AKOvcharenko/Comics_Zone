import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'mw-game-field',
    templateUrl: 'app/templates/game-field.component.html',
    styleUrls: ['app/css/game-field.component.css']
})


export class GameFieldComponent {

    @Input() character;
    @Output() filled = new EventEmitter();

    name;

    goNext(el){
        var next = el.nextSibling;
        next ? next.focus() : el.blur();
    }

    isEverythingFilled(){
        var letters = document.querySelectorAll('.letter');
        var lettersAsArr = [].slice.call(letters);
        return lettersAsArr.every(el => !!el.textContent);
    }

    getAnswer(){
        var letters = document.querySelectorAll('.letter');
        var lettersAsArr = [].slice.call(letters);
        return lettersAsArr.map(el => el.textContent).join('');
    }
    
    showCharIfSpecial(char){
        if(/\.|\-/.test(char)){return char;}
        if(/\s/.test(char)){return '<br>';}
        return '';
    }

    getName(){
        return this.character.name.replace(/\(.+\)/g, '');
    }

    onKeyPress(event){
        var target = event.target;
        var value = event.key;
        target.textContent = '';
        setTimeout(()=>{
            this.goNext(target);
            this.isEverythingFilled() && this.filled.emit(this.getAnswer());
        }, 0);
    }

    ngOnInit(){
        this.name = this.getName().trim().split('');
    }


}
