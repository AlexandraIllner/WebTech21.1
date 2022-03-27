import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

import {Language} from '../../shared/language';
import {LangService} from '../../shared/lang.service';

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
    private service: LangService,
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
    this.service.create(this.language).subscribe(
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

/* import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Language} from './../shared/language';
import {LangService} from './../shared/lang.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  formular: FormGroup;
  language!: Language;

  constructor(
    private route: ActivatedRoute,
    private service: LangService,
    private builder: FormBuilder,
    //private currentLocation: Location,
    private router: Router
  ) 
  {
    this.formular = this.builder.group(
      {
        nameControl: ['', Validators.required],
        tokenControl: ['', Validators.required],
        paradigmControl: ['', Validators.required],        
        infoControl: ['', Validators.required],
        yearControl: ['', Validators.required],
        helloworldControl: ['', Validators.required],
      }
    );
    //this.language = { _id: '', name: '', token: '', paradigm: '', info: '', year: '', helloworld: ''};
  }

  ngOnInit(): void {
  }

  create(): void {
    console.warn(this.formular.value);
    const values = this.formular.value;
    this.language.name = values.NameControl;
    this.language.token = values.TokenControl;
    this.language.paradigm = values.paradigmControl;
    this.language.info = values.InfoControl;
    this.language.year = values.YearControl;
    this.language.helloworld = values.HelloworldControl;

      console.log(this.language);
      console.log("tried to create");
    this.service.create(this.language);
    this.router.navigate(['/langtable']);
  }

  cancel(): void {
    this.router.navigate(['/langtable']);
  }
}
 */