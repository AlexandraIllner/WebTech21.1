import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { LangService } from '../shared/lang.service';
import { Language } from "../shared/language";

@Component({
  selector: 'app-lang-detail',
  templateUrl: './lang-detail.component.html',
  styleUrls: ['./lang-detail.component.css']
})
export class LangDetailComponent implements OnInit {
  id: string = '';
  language!: Language;
  formular!: FormGroup;

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
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);

  }

  readOne(id: string): void {
      this.service.getOne(id).subscribe(
      (
        response: Language) => {
                this.language = response;
                console.log(this.language);

                // mit setValue alle Werte setzen --> create?
                this.formular.patchValue({
                  paradigmControl: this.language?.paradigm,
                  nameControl: this.language?.name,
                  tokenControl: this.language?.token,
                  infoControl: this.language?.info,
                  yearControl: this.language?.year,
                  helloworldControl: this.language?.helloworld
                })

                return this.language;
        },
        error => console.log(error)
      );
  }

  update(): void {
    const values = this.formular.value;
    this.language.paradigm = values.paradigmControl;
    this.language.name = values.nameControl;
    this.language.token = values.tokenControl;
    this.language.info = values.infoControl;
    this.language.year = values.yearControl;
    this.language.helloworld = values.helloworldControl;
    this.service.update(this.id, this.language)
      .subscribe(
        response => {
          console.log(response);
          console.log(response._id);
        },
        error => {
          console.log(error);
        }
      );
    this.router.navigateByUrl('/langtable');
  }

/*   new(): void {
    const values = this.formular.value;
    this.language.paradigm = values.paradigmControl;
    this.language.name = values.nameControl;
    this.language.token = values.tokenControl;
    this.language.info = values.infoControl;
    this.language.year = values.yearControl;
    this.language.helloworld = values.helloworldControl;
    this.service.post(this.id, this.language)
      .subscribe(
        response => {
          console.log(response);
          console.log(response._id);
        },
        error => {
          console.log(error);
        }
      );
    this.router.navigateByUrl('/langtable');
  } */

  

  cancel(): void {
    this.currentLocation.back();

  }
}
