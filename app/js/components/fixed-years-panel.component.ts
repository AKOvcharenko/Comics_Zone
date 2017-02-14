import { Component, HostListener, Inject, Input} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
    selector: 'mw-years-panel',
    templateUrl: 'app/templates/fixed-years-panel.component.html',
    styleUrls: ['app/css/fixed-years-panel.component.css']
})


export class FixedYearPanelComponent{

    constructor(
        @Inject(DOCUMENT) private document: Document
    ){}

    @Input() years;

    present:Boolean = false;

    rows:Array<string> = [];

    getSubArr(arr, index){
        index += 1;
        if (index <= 3){return arr.slice(0, 6);}
        else if (arr.length - index <= 2){return arr.slice(-6);}
        return  arr.slice(index - 4, index + 2);
    }

    checkCurrentYear(grid){
        var result = 0;
        grid.reduce((prev, curr, index)=>{
            var res = Math.abs(this.document.body.scrollTop - this.document.getElementById(curr).offsetTop);
            (res < prev) && (result = index);
            return res;
        }, 100000);
        return result;
    }

    getRow(){
        var row  = [];
        var grid = this.years.slice();
        var currentYear;
        if (grid.length < 7){row = grid.slice(0, 6);}
        else{ currentYear = this.checkCurrentYear(grid); row = this.getSubArr(grid, currentYear);}
        return row;
    }

    scrollTo(year){
        function scroll(element, to, duration){
            if (duration <= 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;

            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scroll(element, to, duration - 10);
            }, 10);
        }

        var direction = this.document.getElementById(year).offsetTop;
        scroll(this.document.body, direction, 600);
    }

    @HostListener("window:scroll", [])
    scrollHandler(){
        var scrollTop = (window.scrollY || this.document.documentElement.scrollTop);
        this.present = scrollTop > 85;
        this.getRow();
    }
}
