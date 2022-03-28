import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
//import { LangService } from '../../shared/lang.service';

import { Language } from "../../shared/language";
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-lang-detail',
  templateUrl: './lang-detail.component.html',
  styleUrls: ['./lang-detail.component.css']
})
export class LangDetailComponent implements OnInit {
  id: string = '';
  language!: Language;
  formular!: FormGroup;
  token: string = '';
  collaboration: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: BackendService,
    private builder: FormBuilder,
    private currentLocation: Location,
    private router: Router    
  ) 
  {   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }

  readOne(id: string): void {
      this.service.getOneLang(id).subscribe(
      (
        response: Language) => {
                this.language = response;
                console.log(this.language);
                console.log(this.language.token);  
                
                return this.language;
        },
        error => console.log(error)
      );
  }

  readDeveloper(collaboration: string): void {
    this.service.getAllDev()

  }

  cancel(): void {
    this.currentLocation.back();

  }
}
