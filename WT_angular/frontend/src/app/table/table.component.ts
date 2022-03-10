import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service'; //(5) Service importieren
import { Member } from '../shared/member';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  members!: Member[]; //(5)Var für Member[], ! -> eine evtl. nicht erfolgte Initialisierung wird behandelt (sonst Fehlermeldg.)

   constructor(private bs: BackendService) { } //(5) Service (als bs) über dependency injection einbinden

  ngOnInit(): void {
    this.readAll(); //(5)beim Init von table comp werden alle eingelesen mit eigener Fkt readAll
  }

  //(5) Aufruf der getAll()-Fkt des Backend-Service, subscribe (subscribe in der Form offenbar deprecated)
  readAll(): void {    
      this.bs.getAll().subscribe(
      (
        response: Member[]) => {
                this.members = response; //(5) next-Fkt, wird mit Member[] members belegt
                console.log(this.members);
                return this.members;
        },
        error => console.log(error) //(5) Fehler-Behandlg. von members
      );
    }

    delete(id: string): void {
      console.log("id :" ,id );
    }
  }

