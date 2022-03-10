import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Member } from '../shared/member';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: string = ''; //(7b) Var id als leerer String
  member!: Member; ////(7b) Var für einzelnes Member-Objekt
  
  constructor(
    private route: ActivatedRoute, //(7b) Vars für die Routen
    private bs: BackendService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }

  readOne(id: string): void {
    this.bs.getOne(id).subscribe(
    (
      response: Member) => {
              this.member = response;
              console.log(this.member);
              return this.member;
      },
      error => console.log(error)
    );
}


}
