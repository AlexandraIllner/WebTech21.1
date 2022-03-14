import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Member } from '../shared/member';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common'; //(8) brauchen wir für back-Fkt in cancel()


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: string = ''; //(7b) Var id als leerer String
  member!: Member; //(7b) Var für einzelnes Member-Objekt
  form: FormGroup; //(8) Var für Formular, formGroup ist der Typ
  
  
  
  constructor(
    private route: ActivatedRoute, //(7b) Vars für die Routen -> dependency injections
    private bs: BackendService,
    private fb: FormBuilder, //(8) dep inj für Formular-Erzeugung
    private location: Location, //(8) für back() in cancel()
    private router: Router
  ) 
  { 
    //(7b) group ist Eigenschaft von FormBuilder und wird hier unsere formGroup 
    this.form = this.fb.group(
      {
        //(8) Formular erzeugen mit validators (Angular-Service)
        forenameControl: ['', Validators.required],
        surnameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      }
    );

  }

  ngOnInit(): void {
    //(7b) paramMap ist von Service ActivatedRoute, mit snapshot...get-Fkt. kann id ausgelesen werden (oder wenn NULL leere Zeichenkette)
    this.id = this.route.snapshot.paramMap.get('id') || ''; 
    //(7b) Werte werden ins Formular übertragen
    this.readOne(this.id);

  }

  //(7b) eigene Fkt die die Werte des aufgerufenen Member ins Form übergibt
  readOne(id: string): void {
    this.bs.getOne(id).subscribe( //(7b) Aufruf der getOne-Fkt von backendService
    (
      response: Member) => {
              this.member = response;
              console.log(this.member);

              //(8) war vorher in NgOnInit, jetzt hier, damit Werte schon da, wenn Ausführung 
              this.form.patchValue({
                //(8) Formular mit Werten aus this.readOne füllen (id aus URL-Aufruf), patch weist allen oder nur einigen Elementen Werte zu (get auch mit setValue, dann wie PUT)
                forenameControl: this.member?.forename, //(8) ? = safe navigation operator -> Zugriff nur, wenn Wert definiert ist
                surnameControl: this.member?.surname,
                emailControl: this.member?.email
              });

              return this.member;
      },
      error => console.log(error)
    );
  }
  update(): void {
    const values = this.form.value;
    //(8) Auslesen der Werte im Formular, speichern in this.member
    this.member.forename = values.forenameControl;
    this.member.surname = values.surnameControl;
    this.member.email = values.emailControl;
    //(8) Aufruf update aus backend.service mit this.id & this.member -> auf Werte von this.member ändern
    this.bs.update(this.id, this.member)
      .subscribe(
        response => {
          console.log(response);
          console.log(response._id);
        },
        error => {
          console.log(error);
        }
      );
      //(8) zurück zur Tabellenansicht
    this.router.navigateByUrl('/table');
  }

  cancel(): void {
    this.location.back(); //(8) click auf Abbrechen wie back in Browser
  }


}
