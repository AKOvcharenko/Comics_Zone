import { Component, Inject, HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
    selector: 'mw-back-to-top',
    templateUrl: 'app/templates/back-to-top.component.html',
    styleUrls: ['app/css/back-to-top.component.css']
})


export class BackToTopComponent{

    constructor(
        @Inject(DOCUMENT) private document: Document
    ){}

    showButton:Boolean = false;
    

    scrollTop(el){
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
        scrollTo(el, 0, 600);
    }

    @HostListener("window:scroll", [])
    scrollHandler(){
        var scrollTop = (window.scrollY || this.document.documentElement.scrollTop);
        this.showButton = scrollTop > 100;
    }
}
