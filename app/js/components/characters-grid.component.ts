import { Component, Input } from '@angular/core';


@Component({
    selector: 'mw-charactersg',
    templateUrl: 'app/templates/characters-grid.component.html',
    styleUrls: ['app/css/characters-grid.component.css']
})


export class CGComponent{
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
        return el.name.replace(/\(/, '<br>(');
    }

    ngOnInit(){
        this.rows = this.splitGrid();
    }
}
