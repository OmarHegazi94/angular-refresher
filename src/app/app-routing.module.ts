import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsComponent } from './Persons/persons.component';
import { PersonInputComponent } from './Persons/person-input.component';

const routes: Routes = [
    { path: '', component: PersonsComponent },
    { path: 'input', component: PersonInputComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}