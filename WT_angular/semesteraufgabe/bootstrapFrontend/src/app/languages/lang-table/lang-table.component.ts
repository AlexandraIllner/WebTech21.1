import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LangService } from '../../shared/lang.service';
import { Language } from '../../shared/language';

@Component({
  selector: 'app-lang-table',
  templateUrl: './lang-table.component.html',
  styleUrls: ['./lang-table.component.css']
})
export class LangTableComponent implements OnInit {
  languages!: Language[];
  deleted = false;

  //wann wird eigentlich was wo deklariert???
  constructor(private service: LangService, private router: Router) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.service.getAll().subscribe(
      (
        response: Language[]) => {
                this.languages = response;
                console.log(this.languages);
                return this.languages;
        },
        error => console.log(error)
      );
  }

  delete(id: string): void {
    this.service.deleteOne(id).subscribe(
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
