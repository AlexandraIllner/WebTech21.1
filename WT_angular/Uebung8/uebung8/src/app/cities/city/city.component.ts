import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/shared/data';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {
id : number=0;
stadt!: Data; //sonst gemecker weil typisiert in interface, aber hier nicht initialisiert. ! bedeutet, wir sichern zu, dass wir uns darum kümmern

  constructor(private ar: ActivatedRoute, //activatedRoute (ist 1 service) sorgt dafür, dass die id geholt werden kann
     private ds: DataService) { } 

  ngOnInit(): void {
    // this.id = this.ar.snapshot.paramMap.get('id'); //collection aller parameter in der URL ab, hier :id aus app-routing.module.ts
    this.id = Number(this.ar.snapshot.paramMap.get('id')); //muss auf Number gemappt werden, weil eigentlich String-Rückgabe in d. Fkt. (wie wrapper in java)
    
    this.stadt =this.ds.getOne(this.id); 
    console.log(this.stadt);
  }

}
