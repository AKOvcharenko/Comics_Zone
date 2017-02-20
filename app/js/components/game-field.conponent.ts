import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'mw-game-field',
    templateUrl: 'app/templates/game-field.component.html',
    styleUrls: ['app/css/game-field.component.css']
})


export class GameFieldComponent {

    @Input() num;
    @Output() filled = new EventEmitter();
    
    numAsArr:Array<number>;

    getNumAsArr(number){
        var i;
        var res = [];
        var num = parseInt(number);
        for( i = 0; i < num; i += 1 ){
            res.push(i);
        }
        return res;
    }

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
        this.numAsArr = this.getNumAsArr(this.num);
    }


}
