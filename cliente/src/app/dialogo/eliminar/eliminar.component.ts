import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  _id: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{tarea:any}, private httpClient: HttpClient, private _Activatedroute:ActivatedRoute){
    this._id = this._Activatedroute.snapshot.paramMap.get("id");
    
    console.log(data);
  }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8060/borrar/'+this._id);
  }

}
