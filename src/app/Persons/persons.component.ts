import { Component, Input, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit {
    // @Input() personList: string[];
    // private personService: PersonsService;
    personList: string[];

    constructor(private personSrv: PersonsService){
        // this.personList = personSrv.persons;
        // this.personService = personSrv;
    }

    ngOnInit() {
        this.personList = this.personSrv.persons;
    }

}