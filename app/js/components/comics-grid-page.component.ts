import { Component, HostListener, Inject} from '@angular/core';
import { DataService } from './../services/data.service';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
    selector: 'mw-comicsgp',
    templateUrl: 'app/templates/comics-grid-page.component.html',
    styleUrls: ['app/css/comics-grid-page.component.css']
})

export class ComicsGPComponent{


    grids = {};
    year:number = 2016;
    requestPending = false;


    constructor(
        private dataService: DataService,
        @Inject(DOCUMENT) private document: Document
    ){}

    getGrids(){
        !this.requestPending && this.request();
    }

    determineParams(comicsReferences, year){
        var params = {
            dateRange: `${year}-01-01,${year}-01-12`,
            limit: 100
        };
        return params;
    }

    isNonEmptyObject(obj){
        var keys = Object.keys(obj);
        var lastKey = keys[keys.length - 1];
        return keys.length && lastKey && obj[lastKey].length;
    }

    makeIterative(obj){
        return  Object.keys(obj).sort((a, b) => a > b ? -1 : 1);
    }

    createYearKey(year){
        !this.grids[year] && (this.grids[year] = []);
    }

    changeYearIfNeeded(year){

        var forYear = this.grids[year];

        if(forYear && forYear.length){
            year -= 1;
            this.year = year;
            this.createYearKey(year);
        }

        if(!forYear) this.createYearKey(year);

        return year;
    }

    request(){
        var year = this.year;
        var comicsReferences;
        var params;

        year = this.changeYearIfNeeded(year);

        comicsReferences = this.grids[year];
        params = this.determineParams(comicsReferences, year);

        this.requestPending = true;
        this.dataService.getComics(params).subscribe(data => {
            comicsReferences.push(data.data.results);
            this.requestPending = false;
            !data.data.results.length && this.getGrids();
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
