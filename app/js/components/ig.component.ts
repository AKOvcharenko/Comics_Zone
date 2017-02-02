import { Component, Input } from '@angular/core';


@Component({
    selector: 'mw-image-grid',
    templateUrl: 'app/templates/ig.component.html',
    styleUrls: ['app/css/ig.component.css']
})


export class IGComponent{
    @Input() grid;

    rows = [];

    splitGrid(){
        var rows  = [];
        var grid = this.grid.slice();
        while (grid.length > 0){rows.push(grid.splice(0, 4));}
        return rows;
    }

    getLinkHref(el){
        return `/characters/${el.id}`;
    }

    getImageSrc(el){
        return `${el.thumbnail.path}.${el.thumbnail.extension}`;
    }

    getImageCopy(el){
        if(el.name.indexOf('(') > -1){debugger;}
        return el.name.replace(/\(/, '<br>(');
    }

    ngOnInit(){
        this.rows = this.splitGrid();
    }
}
