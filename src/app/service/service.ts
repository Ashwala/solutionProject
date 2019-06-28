import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {
    constructor(private http: HttpClient) { }

    /* Fetch Data*/
    getData(url) {
        return this.http.get(url);
    }
} 