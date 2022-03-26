import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { DevService } from '../shared/dev.service';
import { Developer } from "../shared/developer";

@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.css']
})
export class DevdetailComponent implements OnInit {
  id: string = '';
  developer!: Developer;
  formular!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private service: DevService,
    private builder: FormBuilder,
    private currentLocation: Location,
    private router: Router
    
  ) 
  {
    this.formular = this.builder.group(
      {
        firstnameControl: ['', Validators.required],
        nameControl: ['', Validators.required],
        genderControl: ['', Validators.required],
        urlControl: ['', Validators.required]
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
        response: Developer) => {
                this.developer = response;
                console.log(this.developer);

                // mit setValue alle Werte setzen --> create?
                this.formular.patchValue({
                  firstnameControl: this.developer?.firstname,
                  nameControl: this.developer?.name,
                  genderControl: this.developer?.gender,
                  urlControl: this.developer?.url
                })

                return this.developer;
        },
        error => console.log(error)
      );
  }

  update(): void {
    const values = this.formular.value;
    this.developer.firstname = values.firstnameControl;
    this.developer.name = values.nameControl;
    this.developer.gender = values.genderControl;
    this.developer.url = values.urlControl;
    this.service.update(this.id, this.developer)
      .subscribe(
        response => {
          console.log(response);
          console.log(response._id);
        },
        error => {
          console.log(error);
        }
      );
    this.router.navigateByUrl('/devtable');
  }

  

  cancel(): void {
    this.currentLocation.back();

  }
}
