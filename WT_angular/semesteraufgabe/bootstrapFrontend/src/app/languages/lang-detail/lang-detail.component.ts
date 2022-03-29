import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Language } from "../../shared/language";
import { BackendService } from 'src/app/shared/backend.service';
import { Developer } from 'src/app/shared/developer';

@Component({
  selector: 'app-lang-detail',
  templateUrl: './lang-detail.component.html',
  styleUrls: ['./lang-detail.component.css']
})
export class LangDetailComponent implements OnInit {
  get_id: string = '';
  language!: Language;
  developers!: Developer[];
  //formular!: FormGroup;
  token: string = '';
  //collaboration: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: BackendService,
    private currentLocation: Location      
  ) 
  {  
    //this.language = { _id: '', name: '', token: '', paradigm: '', info: '', year: '', helloworld: ''};
  }

  ngOnInit(): void {
    this.get_id = this.route.snapshot.paramMap.get('id') || '';
    
    //console.log('calling readOne...');
    this.readOne(this.get_id);

    // Hier ist der backend-Aufruf in readOne() noch nicht returned
    // und damit this.token noch nicht gesetzt.
    // -> Auruf readDeveloper() direkt in readOne()
    //this.readDeveloper(this.token);
  }

  readOne(id: string): void {
    console.log('...readOne: calling getOneLang(' + id + ')...');
    this.service.getOneLang(id).subscribe(
      (
        response: Language) => {
          console.log('   readOne: getOneLang() returned:');
          this.language = response;
          //this.language.helloworld = "DUMMY PROGRAMM\nprint \"hello world\";";
          console.log(this.language);

          // Jetzt haben wir den token und holen dazu die developers.
          this.token = this.language.token;
          console.log('   calling readDeveloper - token (' + this.token + ') ...');
          this.readDeveloper();
          console.log('readDeveloper ... DONE');

          // Wozu brauchen wir dieses return? Geht ohne.
          //return this.language;
        },
        error => console.log(error)
    );
  }

  readDeveloper(): void {
    console.log('...readDeveloper(' + this.token + ')...');
    this.service.getCollaborators(this.token).subscribe(
      (
        response: Developer[]) => {
          this.developers = response;
          console.log('   ...readDeveloper 1');
          console.log(this.developers);
          console.log('   ...readDeveloper 2');
          
          // Wozu brauchen wir dieses return? Geht ohne.
          //return this.developers;
        },
        error => console.log(error)
      ); 
  }

  back(): void {
    this.currentLocation.back();

  }
}
