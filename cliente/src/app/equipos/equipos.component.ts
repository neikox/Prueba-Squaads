import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Team} from '../models/teams.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  @ViewChild('paginator') set paginator(pager:MatPaginator) {
    if(pager) {
    this.dataSource.paginator = pager;
    }
  }
  
  @ViewChild(MatSort) set sort(sorter:MatSort) {
    if (sorter) {
      this.dataSource.sort = sorter;
    }
  }
  displayedColumns: string[] = ['NombreEquipo', 'LogoEquipo', 'acciones'];
  dataSource = new MatTableDataSource<Team>();

  constructor(private httpClient: HttpClient, private router: Router,private dialog: MatDialog) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8060/teams/')
    .subscribe((Equipos: any) => {
      this.dataSource.data = Equipos;
      console.log("Resultado:",this.dataSource.data);
    });
  }

  onRowClicked(row: any) {
    console.log('Row clicked: ',row);
      this.router.navigateByUrl('/teams/'+row.Identificador);
  }

  openDialog(dato: any){
    this.httpClient.get('http://localhost:8060/borrar/'+dato._id).subscribe((articulo: any) => {
        console.log("dale ahi");
    });
    window.location.reload();
  }

}
