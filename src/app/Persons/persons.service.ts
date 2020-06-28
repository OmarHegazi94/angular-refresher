import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PersonsService {
    personsChanged = new Subject<string[]>();
    persons:string[] = [];

    constructor(private http: HttpClient){}

    fetchPersons() {
        this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(map(resData => {
            return resData.map( x =>  x.name)
        })).subscribe(transformedData => {
            this.personsChanged.next(transformedData);
        })
    }

    addPerson(name: string) {
        this.persons.push(name);
        this.personsChanged.next(this.persons);
    }


    removePerson(name: string){
        this.persons = this.persons.filter(person => {
            return person !== name;
        })

        this.personsChanged.next(this.persons);
    }
}