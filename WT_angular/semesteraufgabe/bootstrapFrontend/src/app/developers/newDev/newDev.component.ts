import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

import {Developer} from '../../shared/developer';
//import {DevService} from '../../shared/dev.service';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-new',
  templateUrl: './newDev.component.html',
  styleUrls: ['./newDev.component.css']
})
export class NewDevComponent implements OnInit {
  id: string = '';
  developer!: Developer;
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
	      firstnameControl: ['', Validators.required], 	
        genderControl: ['', Validators.required],               
        urlControl: ['', Validators.required],
        collaborationControl: ['', Validators.required]
      }
    );
    this.developer = { _id: '', name: '', firstname: '', gender: '', url: '', collaboration: ''};
  }

  ngOnInit(): void {
    //this.id = this.route.snapshot.paramMap.get('id') || '';
    //this.readOne(this.id);
  }

  create(): void {

    const values = this.formular.value;
    console.log(values);
    console.log("parad  [" + values.firstnameControl + "]");
    // this.developer ist nicht defined 
    this.developer.firstname = values.firstnameControl;
    this.developer.name = values.nameControl;
    this.developer.gender = values.genderControl;
    this.developer.url = values.urlControl;
    this.developer.collaboration = values.collaborationControl;


      console.log(this.developer);
    console.log("trying to create ...");
    this.service.createDev(this.developer).subscribe(
    
        response => {
          console.log(response);
          console.log(response.name);
        },
        error => {
          console.log(error);
        }
      );
    console.log("created!");
    this.router.navigate(['devtable']);
  }

  cancel(): void {
    this.router.navigate(['devtable']);
  }
}
