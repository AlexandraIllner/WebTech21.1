import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

import {Language} from '../../shared/language';
//import {LangService} from '../../shared/lang.service';
import {BackendService} from '../../shared/backend.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  id: string = '';
  language!: Language;
  formular: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: BackendService,
    private builder: FormBuilder,
    private currentLocation: Location,
    private router: Router
  ) 
  {
    this.formular = this.builder.group(
      {
        nameControl: ['', Validators.required],
	      paradigmControl: ['', Validators.required], 	
        tokenControl: ['', Validators.required],               
        infoControl: ['', Validators.required],
        yearControl: ['', Validators.required],
        helloworldControl: ['', Validators.required],
      }
    );
    this.language = { _id: '', name: '', token: '', paradigm: '', info: '', year: '', helloworld: ''};
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    //this.readOne(this.id);
  }

  create(): void {

    const values = this.formular.value;
    console.log(values);
    //was soll das eigentlich???
    console.log("parad  [" + values.paradigmControl + "]");
    // this.language ist nicht defined 
    this.language.paradigm = values.paradigmControl;
    this.language.name = values.nameControl;
    this.language.token = values.tokenControl;
    this.language.info = values.infoControl;
    this.language.year = values.yearControl;
    this.language.helloworld = values.helloworldControl;

    console.log(this.language);
    console.log("trying to create ...");
    this.service.createLang(this.language).subscribe(
    //this.service.create(mydata).subscribe(
        response => {
          console.log(response);
          console.log(response.name);
        },
        error => {
          console.log(error);
        }
      );
    console.log("created!");
    this.router.navigate(['langtable']);
  }

  cancel(): void {
    this.router.navigate(['langtable']);
  }
}

