import { Component, Input } from '@angular/core';

@Component({
    selector: 'mw-life-panel',
    templateUrl: 'app/templates/life-panel.component.html',
    styleUrls: ['app/css/life-panel.component.css']
})


export class LifePanelComponent {

    @Input() lives;
    

}
