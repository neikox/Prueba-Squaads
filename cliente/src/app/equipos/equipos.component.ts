import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Team} from '../models/teams.interface';
// import {Liga} from '../models/leagues.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  liga: any


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

  constructor(private httpClient: HttpClient,private _Activatedroute:ActivatedRoute, private router: Router,private dialog: MatDialog) { 
    this.liga = this._Activatedroute.snapshot.paramMap.get("Identificador");
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:8060/teams/'+this.liga)
    .subscribe((Equipos: any) => {
      this.dataSource.data = Equipos;
      console.log("Resultado:",this.dataSource.data);
    });
  }

  onRowClicked(row: any) {
    console.log('Row clicked: ',row);
    this.httpClient.get('http://localhost:8060/players/'+row.id).subscribe((articulo: any) => {
    });
      this.router.navigateByUrl('/players/'+row.id);
  }

  modifyTeam(row: any) {
    console.log('Row clicked: ',row);
    // this.httpClient.get('http://localhost:8060/teams/ficha/'+row._id).subscribe((articulo: any) => {
    //     console.log("llego a ficha");
    // });
    if (row != 0){
      this.router.navigateByUrl('/teams/ficha/'+row._id)
    } else {
      this.router.navigateByUrl('/teams/ficha/0')
    }
  }

  openDialog(dato: any){
    console.log(dato);
    this.httpClient.get('http://localhost:8060/teams/borrar/'+dato._id).subscribe((articulo: any) => {
        console.log("dale ahi");
    });
    window.location.reload();
  }

}
