import { Component, HostListener, Inject} from '@angular/core';
import { DataService } from './../services/data.service';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
    selector: 'mw-igp',
    templateUrl: 'app/templates/igp.component.html',
    styleUrls: ['app/css/igp.component.css']
})

export class IGPComponent{


    grids = [];

    constructor(
        private dataService: DataService,
        @Inject(DOCUMENT) private document: Document
    ){}

    requestPending = false;

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
        var scrollTop = window.scrollY || this.document.documentElement.scrollTop;
        if ((window.innerHeight + scrollTop) >= this.document.body.offsetHeight) {
            this.getGrids();
        }
    }

    ngOnInit() {
        this.getGrids();
    }
}
