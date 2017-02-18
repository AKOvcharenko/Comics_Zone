import { Component, Input } from '@angular/core';

@Component({
    selector: 'mw-lifelines-panel',
    templateUrl: 'app/templates/lifelines-panel.component.html',
    styleUrls: ['app/css/lifelines-panel.component.css']
})


export class LifelinesPanelComponent {

    @Input() lifelines;

    getLifelines(obj){
        return Object.keys(obj);
    }


}
