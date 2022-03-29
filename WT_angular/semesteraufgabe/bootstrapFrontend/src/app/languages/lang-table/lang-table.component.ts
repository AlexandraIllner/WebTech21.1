import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../shared/backend.service';
import { Language } from '../../shared/language';

//sorted table-Versuch

@Component({
  selector: 'app-lang-table',
  templateUrl: './lang-table.component.html',
  styleUrls: ['./lang-table.component.css']
})
export class LangTableComponent implements OnInit {
  languages!: Language[];
  deleted = false;


  constructor(private service: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.service.getAllLang().subscribe(
      (
        response: Language[]) => {
                this.languages = response;
                console.log(this.languages);
                return this.languages;
        },
        error => console.log(error)
      );
  }

  //Warnung wäre noch schick
  delete(id: string): void {
    this.service.deleteOneLang(id).subscribe(
      (
        response: any) => {
          console.log('response : ', response);
          if(response.status == 204){
                  console.log(response.status);
                  this.reload(true);
                } else {
                  console.log(response.status);
                  console.log(response.error);
                  this.reload(false);
                }
        },
        error => console.log(error)
      );
  }

  reload(deleted: boolean)
  {
    this.deleted = deleted;
    this.readAll();
    this.router.navigateByUrl('/table');
  }

}
