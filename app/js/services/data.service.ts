import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { keys } from './../../details';
import { Md5 } from 'ts-md5/dist/md5';



@Injectable()
export class DataService {
    constructor(private http: Http) {}

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private createDefaultParams(){
        var ts = this.getRandomInt(0, 100000);
        var hash = ts + keys.privateKey + keys.publicKey;
        var md5Hash;
        md5Hash = Md5.hashStr(hash);
        return {
            ts:ts,
            apikey: keys.publicKey,
            hash: md5Hash
        }
    }

    private get(url, params){
        let searchParams = new URLSearchParams();
        let commonParams = Object.assign({}, this.createDefaultParams(), params);
        for(let key in commonParams){
            if (commonParams.hasOwnProperty(key)){
                searchParams.append(key, commonParams[key]);
            }
        }

        return this.http.get(url, { search: searchParams })
            .map(response => {
                return response.json();
            });
    }

    getCharacters(params) {
        return this.get('http://gateway.marvel.com:80/v1/public/characters', params);

    }

    getComics(params){
        return this.get('http://gateway.marvel.com:80/v1/public/comics', params);
    }
}
