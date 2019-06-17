import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

export interface Measure {
    adddate: number;
    value: number;
}


export interface Kid {
    image: string;
    birth: number;
    name: string;
    surname: string;
    headmeasures: Measure[];
    weightmeasures: Measure[];
    heightmeasures: Measure[];
}

@Injectable({
    providedIn: 'root'
})
export class KidService {
    private kids: Kid[];

    constructor(private storage: Storage) {
        this.storage.get('kids').then((val) => {
            this.kids = val;
        });

        this.storage.get('kidIndex').then((val) => {
            this.currentKidIndex = val;
        });
    }

    private _currentKidIndex: number;

    get currentKidIndex(): number {
        return this._currentKidIndex;
    }

    set currentKidIndex(value: number) {
        this._currentKidIndex = value;
        this.storage.set('kidIndex', this.currentKidIndex);
    }

    get kidsArray() {
        return this.kids;
    }

    public removeHeadMeasure(index: number) {
        this.kids[this.currentKidIndex].headmeasures.splice(index, 1);
        this.saveKids();
    }

    public removeHeightMeasure(index: number) {
        this.kids[this.currentKidIndex].heightmeasures.splice(index);
        this.saveKids();
    }

    public removeWeightMeasure(index: number) {
        this.kids[this.currentKidIndex].weightmeasures.splice(index);
        this.saveKids();
    }

    public addHeadMeasure(length: number, date: number) {
        if (this.kids[this.currentKidIndex].headmeasures == null) {
            this.kids[this.currentKidIndex].headmeasures = [{adddate: date, value: length}];
        } else {
            this.kids[this.currentKidIndex].headmeasures.push({adddate: date, value: length});
        }
        this.saveKids();
    }

    public addWeightMeasure(length: number, date: number) {
        if (this.kids[this.currentKidIndex].weightmeasures == null) {
            this.kids[this.currentKidIndex].weightmeasures = [{adddate: date, value: length}];
        } else {
            this.kids[this.currentKidIndex].weightmeasures.push({adddate: date, value: length});
        }
        this.saveKids();

    }

    public addHeightMeasure(length: number, date: number) {
        if (this.kids[this.currentKidIndex].heightmeasures == null) {
            this.kids[this.currentKidIndex].heightmeasures = [{adddate: date, value: length}];
        } else {
            this.kids[this.currentKidIndex].heightmeasures.push({adddate: date, value: length});
        }
        this.saveKids();
    }

    public addKid(pbirthdate: number, pname: string, psurname: string, pimage: string) {
        if (this.kids == null) {
            this.kids = [{
                image: pimage,
                birth: pbirthdate,
                name: pname,
                surname: psurname,
                headmeasures: [],
                heightmeasures: [],
                weightmeasures: []
            }];
        } else {
            this.kids.push({
                image: pimage,
                birth: pbirthdate,
                name: pname,
                surname: psurname,
                headmeasures: [],
                heightmeasures: [],
                weightmeasures: []
            });
        }
        this.saveKids();
    }

    public moveKids(event: any) {
        const draggedItem = this.kids.splice(event.detail.from, 1)[0];
        this.kids.splice(event.detail.to, 0, draggedItem);
        this.saveKids();
    }

    private saveKids() {
        this.storage.set('kids', this.kids);
    }

}
