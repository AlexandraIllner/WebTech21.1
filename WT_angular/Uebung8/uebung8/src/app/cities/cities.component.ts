import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Data } from '../shared/data'; // data-Interface importieren, sonst wird Data nicht erkannt

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
    staedte: Data[]; // Array aus importierten Data-Objekten (?)

/*  statt hier einzeln so:               {
                  jahr: 1237,
                  stadt: "Berlin",
                  link: "http://de.wikipedia.org/wiki/Berlin",
                  bild: "assets/images/berlin.png"
                }, */               
              

  constructor(private ds: DataService) {  // dependency injection/Einbinden, ds referenziert DataService, ist jetzt property von cities
    this.staedte = this.ds.getAll(); // staedte wird durch Funktion in data.service.ts befüllt
  }

  ngOnInit(): void {
  }

}
