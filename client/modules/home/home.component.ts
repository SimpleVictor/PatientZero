import { Component } from "@angular/core";

@Component({
    selector: "home",
    styleUrls: ['client/modules/home/home.component.css'],
    templateUrl: `client/modules/home/home.component.html`
})
export class HomeComponent {


    displayOne:boolean = true;
    displayDoctor: boolean = false;
    displayPatient: boolean = false;

    constructor() {}

    patientClicked(){
        this.displayOne = false;
    }


    doctorClicked(){
        this.displayOne = false;
    }


}
