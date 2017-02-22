import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mw-lifelines-panel',
    templateUrl: 'app/templates/lifelines-panel.component.html',
    styleUrls: ['app/css/lifelines-panel.component.css']
})


export class LifelinesPanelComponent {

    @Input() lifelines;
    @Output() usedLifeline = new EventEmitter();

    getLifelines(obj){
        return Object.keys(obj);
    }

    useLifeline(type){
        this.usedLifeline.emit(type);
    }


}
