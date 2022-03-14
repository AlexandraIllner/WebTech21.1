import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service'; //(5) Service importieren
import { Member } from '../shared/member';
import { Router } from '@angular/router'; //(8) für delete


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  members!: Member[]; //(5)Var für Member[], wird in table.html verwendet in ngFor; ! -> eine evtl. nicht erfolgte Initialisierung wird behandelt (sonst Fehlermeldg.)
  deleted = false; //(8) für delete
  
  //(5) Service (als bs) über dependency injection einbinden
  constructor(private bs: BackendService, private router: Router) { } 

  //(5) beim Init von table comp werden alle Member eingelesen mit eigener Fkt readAll s.u.
  ngOnInit(): void {
    this.readAll(); 
  }

  //(5) Aufruf der getAll()-Fkt des Backend-Service, subscribe (subscribe in der Form offenbar deprecated)
  readAll(): void {    
      this.bs.getAll().subscribe(
      (
        //(5) response wie next-Fkt, wird mit Member[] members belegt
        response: Member[]) => {
                this.members = response; 
                console.log(this.members);
                return this.members;
        },
        error => console.log(error) //(5) Fehler-Behandlg. von members
      );
    }

    //(8) 
    delete(id: string): void {
      //(8) Aufruf delete von backend.service mit subscribe
      this.bs.deleteOne(id).subscribe(
        (
          response: any) => {
            console.log('response : ', response);
            //(8) je nach HTTP-Statuscode passiert was (204=Anfrage erfolgreich, aber kein Content)
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

