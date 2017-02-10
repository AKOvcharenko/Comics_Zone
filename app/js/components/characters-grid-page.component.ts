import { Component, HostListener, Inject} from '@angular/core';
import { DataService } from './../services/data.service';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
    selector: 'mw-charactersgp',
    templateUrl: 'app/templates/characters-grid-page.component.html',
    styleUrls: ['app/css/characters-grid-page.component.css']
})

export class CGPComponent{

    grids = [];
    requestPending = false;


    constructor(
        private dataService: DataService,
        @Inject(DOCUMENT) private document: Document
    ){}

    getGrids(){
        !this.requestPending && this.request();
    }

    request(){
        var params = {};

        if(this.grids.length){
            params = {
                offset: this.grids.length * 20
            }
        }
        this.requestPending = true;
        this.dataService.getCharacters(params).subscribe(data => {
            this.grids.push(data.data.results);
            this.requestPending = false;
        });
    }

    @HostListener("window:scroll", [])
    scrollHandler(){
        var scrollTop = (window.scrollY || this.document.documentElement.scrollTop) + 10; // user almost scrolled down
        if ((window.innerHeight + scrollTop) >= this.document.body.offsetHeight) {
            this.getGrids();
        }
    }

    ngOnInit() {
        this.getGrids();
    }
}
