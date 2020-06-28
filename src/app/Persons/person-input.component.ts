import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent implements OnInit {

    // @Output() personCreate = new EventEmitter<string>();
    enteredPersonName = '';

    onCreatePerson() {
        console.log('created a person ' + this.enteredPersonName)
        // this.personCreate.emit(this.enteredPersonName);
        this.personService.addPerson(this.enteredPersonName);
        this.enteredPersonName = '';
    }

    constructor(private personService: PersonsService) {

    }

    ngOnInit() {
        
    }


}