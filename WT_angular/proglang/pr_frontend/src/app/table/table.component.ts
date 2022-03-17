import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Language } from '../shared/language';
//(2c)
import { Router } from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  languages!: Language[];
  //(2c) wird in delete, reload und button in löschnachricht genutzt
  deleted = false;

  //(1b) dep inj -> einbinden backendservice als bs
  constructor(private bs: BackendService, 
    private router: Router) { }

  //(1c) aufruf readAll(): lanuguages-array einlesen und in table.comp.html in tabelle eintragen
  ngOnInit(): void {
    this.readAll();
  }

  //(1b) eigene fkt, die durch getall().subscribe() aus getall() backendservice aufruft und observer-objekt 'holt'
  readAll(): void {
      this.bs.getAll().subscribe(
      //next-callback-fkt des observer-objekts liefert angefragtes objekt als response-fkt zurück (response selbst gewählter name)
      //fkt response erwartet Lang[], das durch die bs.getall() entsteht
      (response: Language[]) => {
                this.languages = response;
                console.log(this.languages);
                return this.languages;
        },
        error => console.log(error)
      );
    }

    //(2c) aufruf backendservice-deleteone-fkt mittels subscribe
    delete(id: string): void {
      this.bs.deleteOne(id).subscribe(
        (
          response: any) => {
            console.log('response : ', response);
            // wenn erfolgreich
            if(response.status == 204){
                    console.log(response.status);
                    this.reload(true);
                  } 
                  // nicht erfolgreich
                  else {
                    console.log(response.status);
                    console.log(response.error);
                    this.reload(false);
                  }
          },
          error => console.log(error)
        );
    }
  
    //(2c) wird ausgeführt wenn deleted true/erfolgreich: liest alles ein und routet zu tabelle
    reload(deleted: boolean)
    {
      this.deleted = deleted;
      this.readAll();
      this.router.navigateByUrl('/table');
    }
}
