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

    /*scrollTop(){
        function scrollTo(element, to, duration){
            if (duration <= 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;

            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 10);
            }, 10);
        }
        scrollTo(ddocument.body, 0, 600);
    }*/

    ngOnInit(){
        this.rows = this.splitGrid();
    }
}
