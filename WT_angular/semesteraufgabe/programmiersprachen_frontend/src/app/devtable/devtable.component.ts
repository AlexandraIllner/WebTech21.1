/* import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger} from '@angular/animations';

import { BackendService } from '../shared/backend.service';
import { Developer } from '../shared/developer';




@Component({
  selector: 'app-devtable',
  templateUrl: './devtable.component.html',
  styleUrls: ['./devtable.component.css']
})

export class DevtableComponent implements OnInit {
  developers!: Developer[];
  displayedColumns = ["firstname", "name", "gender", "url"];


    constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.readAll();
    //Array-Test
    console.log(this.developers);

    // freakyjolly-tutorial: 
    // this.dataDevelopersList.data = this.developers;
  }

  readAll(): void {
      this.bs.getAll().subscribe(
      (
        response: Developer[]) => {
                this.developers = response;
                console.log(this.developers);
                return this.developers;
        },
        error => console.log(error)
      );
    }
} */


import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatTableModule } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { animate, state, style, transition, trigger} from '@angular/animations';

import { BackendService } from '../shared/backend.service';
import { Developer } from '../shared/developer';

@Component({
  selector: 'app-devtable',
  templateUrl: './devtable.component.html',
  styleUrls: ['./devtable.component.css']
})

export class DevtableComponent implements OnInit {
  developers!: Developer[];
  displayedColumns = ["firstname", "name", "gender", "url"];
  @ViewChild(MatTable) table!: MatTable<Developer>;


  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.readAll();

  }

  readAll(): void {
      this.bs.getAll().subscribe(
      (
        response: Developer[]) => {
                this.developers = response;
                console.log(this.developers);
                return this.developers;
        },
        error => console.log(error)
      );
    }
    

    addData() {
      const randomElementIndex = Math.floor(Math.random() * this.developers.length);
      this.developers.push(this.developers[randomElementIndex]);
      this.table.renderRows();
    }
  
    removeData() {
      this.developers.pop();
      this.table.renderRows();
    }
    
  }



