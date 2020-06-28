import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
    // @Input() personList: string[];
    // private personService: PersonsService;
    personList: string[];
    isLoading = false;

    private personListSubs: Subscription;

    constructor(private personSrv: PersonsService){
        // this.personList = personSrv.persons;
        // this.personService = personSrv;
    }

    ngOnInit() {
        this.isLoading = true;
        
        //this.personList = this.personSrv.persons;
        this.personListSubs = this.personSrv.personsChanged.subscribe( persons => {
            this.personList = persons;
            this.isLoading = false;
        });
        this.personSrv.fetchPersons();
    }

    onRemovePerson(personName: string) {
        this.personSrv.removePerson(personName);
    }

    ngOnDestroy(){
        this.personListSubs.unsubscribe();
    }

}