import {Injectable} from '@angular/core';

interface Diary {
    date: string;
    title: string;
    description: string;
    photo: string;
}

@Injectable({
    providedIn: 'root'
})
export class DiaryService {

    diaries: Diary[];

    constructor() {
    }
}
