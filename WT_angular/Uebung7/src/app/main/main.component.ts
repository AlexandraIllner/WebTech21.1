import { Component, OnInit } from '@angular/core';
import MembersJson from '../../assets/members.json'; // einbinden der json

// ist im angular-tutorial eine eigene datei... ?
interface MEMBER {
  forename: string;
  surname: string;
  email: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

// eigenschaften beim initialen einbinden in app.comp.html
export class MainComponent implements OnInit {
  tableOn = true;  
  buttonText = 'Tabelle verstecken';
  members: MEMBER[] = MembersJson; // variable für zugriff auf members-array



  constructor() {}

  // das passiert beim initialen laden der component
  ngOnInit(): void {
    console.log(this.members); 
  }

  tableOnOff() {
    this.tableOn = !this.tableOn;
    if(this.tableOn==false) {
      this.buttonText = "Tabelle zeigen"
    }

  }
}
