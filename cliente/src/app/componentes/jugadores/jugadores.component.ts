import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Player} from '../../models/players.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  equipo: any

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
  displayedColumns: string[] = ['NombreJugador', 'Avatar', 'acciones'];
  dataSource = new MatTableDataSource<Player>();

  constructor(private httpClient: HttpClient,private _Activatedroute:ActivatedRoute, private router: Router,private dialog: MatDialog) { 
    this.equipo = this._Activatedroute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:8060/players/'+this.equipo)
    .subscribe((Jugadores: any) => {
      this.dataSource.data = Jugadores;
      console.log("Resultado:",this.dataSource.data);
    });
  }

  onRowClicked(row: any) {
    if (row != 0){
      this.router.navigateByUrl('/players/ficha/'+row._id)
    } else {
      this.router.navigateByUrl('/players/ficha/0')
    }
  }

  openDialog(dato: any){
    this.httpClient.get('http://localhost:8060/players/borrar/'+dato._id).subscribe((x: any) => {
        console.log("dale ahi", x);
    });
    window.location.reload();
  }

}

