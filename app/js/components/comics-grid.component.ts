import { Component, Input } from '@angular/core';


@Component({
    selector: 'mw-comicsg',
    templateUrl: 'app/templates/comics-grid.component.html',
    styleUrls: ['app/css/comics-grid.component.css']
})


export class ComicsGComponent{
    @Input() grid;

    rows = [];

    splitGrid(){
        var rows  = [];
        var grid = this.grid.slice();
        while (grid.length > 0){rows.push(grid.splice(0, 3));}
        return rows;
    }

    getLinkHref(el){
        return `/comics/${el.id}`;
    }

    getImageSrc(el){
        return `${el.thumbnail.path}.${el.thumbnail.extension}`;
    }

    getImageCopy(el){
        return //el.name.replace(/\(/, '<br>(');
    }


    ngOnInit(){
        this.rows = this.splitGrid();
    }

}
