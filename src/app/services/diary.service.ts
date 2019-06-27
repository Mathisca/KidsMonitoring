import {Injectable} from '@angular/core';
import {KidService} from './kid.service';
import {Storage} from '@ionic/storage';

interface Diary {
    date: string;
    title: string;
    notes: string;
}

@Injectable({
    providedIn: 'root'
})
export class DiaryService {

    diaries: Diary[][] = [];

    constructor(private kids: KidService, private storage: Storage) {
    }

    get currentDiary() {
        if (this.diaries[this.kids.currentKidIndex] !== undefined) {
            this.diaries[this.kids.currentKidIndex].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
        return this.diaries[this.kids.currentKidIndex];
    }

    addDiary(title: string, notes: string, date: string) {
        if (this.diaries[this.kids.currentKidIndex] === undefined) {
            this.diaries[this.kids.currentKidIndex] = [];
        }

        this.diaries[this.kids.currentKidIndex].push({title, notes, date});
        this.saveDiaries();
    }

    initService() {
        this.storage.get('diaries').then((val) => {
            if (val != null) {
                this.diaries = val;
            }
        });
    }

    private saveDiaries() {
        this.storage.set('diaries', this.diaries);
    }
}
