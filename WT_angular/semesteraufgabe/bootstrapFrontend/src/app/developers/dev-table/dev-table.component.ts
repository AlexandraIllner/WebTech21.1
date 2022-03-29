import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/shared/backend.service';

//import { DevService } from '../../shared/dev.service';
import { Developer } from '../../shared/developer';

@Component({
  selector: 'app-dev-table',
  templateUrl: './dev-table.component.html',
  styleUrls: ['./dev-table.component.css']
})
export class DevTableComponent implements OnInit {
  developers!: Developer[];
  deleted = false;

  //wann wird eigentlich was wo deklariert???
  constructor(private service: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.service.getAllDev().subscribe(
      (
        response: Developer[]) => {
                this.developers = response;
                console.log(this.developers);
                return this.developers;
        },
        error => console.log(error)
      );
  }

  delete(id: string): void {
    this.service.deleteOneDev(id).subscribe(
      (
        response: any) => {
          console.log('delete-dev response : ', response);
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
