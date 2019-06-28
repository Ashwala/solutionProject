import { Injectable } from '@angular/core';
@Injectable()
export class UrlConstants {
    private baseUrl = 'https://randomuser.me/';
    private baseMock = '../assets/mock.json';
    getUrl() {
        const urls = {
            getList: this.baseMock.concat()
        };
        return urls;
    }
}