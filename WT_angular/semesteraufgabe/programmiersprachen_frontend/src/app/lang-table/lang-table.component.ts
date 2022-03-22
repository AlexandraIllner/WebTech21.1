//eigene importe
import { BackendService } from '../shared/backend.service';
import { Developer } from '../shared/developer';
//OnInit selsbst importieret
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LangTableDataSource, LangTableItem } from './lang-table-datasource';

@Component({
  selector: 'app-lang-table',
  templateUrl: './lang-table.component.html',
  styleUrls: ['./lang-table.component.css']
})
export class LangTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<LangTableItem>;
  //alt: dataSource: LangTableDataSource;
  developers!: Developer[];

  /* Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'firstname', 'gender', 'url'];

  constructor(private service: BackendService) {
    //alt: this.dataSource = new LangTableDataSource();
  }
  ngOnInit(): void {
    this.readAll();
    //alt: throw new Error('Method not implemented.');
  }

  readAll(): void {
    this.service.getAll().subscribe(
    (
      response: Developer[]) => {
              this.developers = response;
              console.log(this.developers);
              return this.developers;
      },
      (      error: any) => console.log(error)
    );
  }

/*  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource; 
  }*/
}
 