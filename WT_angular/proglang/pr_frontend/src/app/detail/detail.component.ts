import { Component, OnInit } from '@angular/core';
//(2b)
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//(2c) 
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Language } from '../shared/language';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  //(2a) var für fkt unten
  id: string = '';
  language!: Language;
  //(2b) zeigt auf formular
  form: FormGroup;
  


  constructor(
    //(2a) parametris. routen, import oben
    private route: ActivatedRoute,
    private bs: BackendService,
    //(2b) formular dependency injection
    private fb: FormBuilder,
    //(2c)
    private location: Location,
    //(2c)
    private router: Router
  ) 
  { 
    { //(2b) formular als ts-objekt erzeugen, wird in detail.html eingebunden
      this.form = this.fb.group(
        {
          nameControl: ['', Validators.required],
          jahrControl: ['', Validators.required],
          lizenzControl: ['', Validators.required],
        }
      );
    }
  }

  ngOnInit(): void {
    //(2a) onInit daten auslesen
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }

  readOne(id: string): void {
    //(2a) backendservice holt id, entspr. lang-objekt wird erzeugt und zurückgegeben (in formular, 2b)
    this.bs.getOne(id).subscribe(
    (
      response: Language) => {
              this.language = response;
              console.log(this.language);

              //(2b) daten d. aktuellen items in formular eintragen, mit patchV einzelne, mit setV für alle werte
              this.form.patchValue({
                //(2b) ? -> safe navigation operator: darstellung des werts erst, wenn objekt nicht mehr undefined
                nameControl: this.language?.name,
                jahrControl: this.language?.jahr,
                lizenzControl: this.language?.lizenz
              });
              return this.language;
      },
      error => console.log(error)
    );
  }

  //(2c) aufruf durch ngsubmit --> aktualisieren-button in .html
  update(): void {
    // speichern der daten aus form
    const values = this.form.value;
    // daten der aufgerufenen language überschreiben mit denen aus form
    this.language.name = values.nameControl;
    this.language.jahr = values.jahrControl;
    this.language.lizenz = values.lizenzControl;
    // ruft mit id und language-obj als param rest-api-patch-fkt auf und gibt die dort definierte response (language-objekt als json) zurück
    this.bs.update(this.id, this.language)
      .subscribe(
        response => {
          console.log(response);
          console.log(response._id);
        },
        error => {
          console.log(error);
        }
      );
    // im anschluss zurück zu table mit parametrisierter route
    this.router.navigateByUrl('/table');
  }

  //(2c) aufruf durch click auf abbrechen-button in .html, danach zurück zu tabellenansicht mittels location
  cancel(): void {
    this.location.back();
  }
}
