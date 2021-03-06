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
    gender: string;
    headmeasures: Measure[];
    weightmeasures: Measure[];
    heightmeasures: Measure[];
}

@Injectable({
    providedIn: 'root'
})
export class KidService {
    private kids: Kid[] = [];

    constructor(private storage: Storage) {

    }

    private _currentKidIndex: number;

    get currentKidIndex(): number {
        return this._currentKidIndex;
    }

    set currentKidIndex(value: number) {
        this._currentKidIndex = value;
        this.storage.set('kidIndex', this.currentKidIndex);
    }

    get currentKid() {
        return this.kidsArray[this.currentKidIndex];
    }

    get kidsArray() {
        return this.kids;
    }

    public removeHeadMeasure(index: number) {
        this.kids[this.currentKidIndex].headmeasures.splice(index, 1);
        this.saveKids();
    }

    public removeHeightMeasure(index: number) {
        this.kids[this.currentKidIndex].heightmeasures.splice(index, 1);
        this.saveKids();
    }

    public removeWeightMeasure(index: number) {
        this.kids[this.currentKidIndex].weightmeasures.splice(index, 1);
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

    public ageOfCurrentKidInDays(): number {
        return Math.abs(Math.ceil((new Date().valueOf() -
            new Date(this.currentKid.birth).valueOf())));
    }

    public lastRecordedWeight(): number {
        if (this.currentKid.weightmeasures === undefined
            || this.currentKid.weightmeasures[this.currentKid.weightmeasures.length - 1] === undefined) {
            return undefined;
        }

        return this.currentKid.weightmeasures[this.currentKid.weightmeasures.length - 1].value;
    }


    public addHeightMeasure(length: number, date: number) {
        if (this.kids[this.currentKidIndex].heightmeasures == null) {
            this.kids[this.currentKidIndex].heightmeasures = [{adddate: date, value: length}];
        } else {
            this.kids[this.currentKidIndex].heightmeasures.push({adddate: date, value: length});
        }
        this.saveKids();
    }

    public addKid(pbirthdate: number, pname: string, psurname: string, pimage: string, kgender: string) {
        if (this.kids == null) {
            this.kids = [{
                image: pimage,
                birth: pbirthdate,
                name: pname,
                surname: psurname,
                gender: kgender,
                headmeasures: [],
                heightmeasures: [],
                weightmeasures: []
            }];
        } else {
            this.kids.push({
                image: pimage,
                birth: pbirthdate,
                name: pname,
                gender: kgender,
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

    initService() {
        this.storage.get('kids').then((val) => {
            if (val != null) {
                this.kids = val;
            }
        });

        this.storage.get('kidIndex').then((val) => {
            if (val != null) {
                this.currentKidIndex = val;
            } else {
                this.currentKidIndex = 0;
            }
        });
    }

    private saveKids() {
        this.storage.set('kids', this.kids);
    }
}
