
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { AceptarComponent } from 'src/app/dialogo/aceptar/aceptar.component';




@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  form:FormGroup;
  hidde:boolean= true;
  //encargado de gestionar para que no tenga la img inyecciones de codigo
  dataSource:any;
  _id: any;
  accion:String = '';
  
  constructor(private httpClient :HttpClient, private _Activatedroute:ActivatedRoute,private _formBuilder:FormBuilder, private sanitizer: DomSanitizer, private router:Router, public dialog: MatDialog) {
    console.log("Datos Recibidos");
    console.log(_Activatedroute);
    this._id = this._Activatedroute.snapshot.paramMap.get("_id");

    console.log("Resultado del codigo: ", this._id);
    this.buildForm();
   }

  ngOnInit() : void{
    if(this._id != 0){
      this.httpClient.get('http://localhost:8060/teams/ficha/'+this._id)
      .subscribe((equipo:any) =>{
        this.accion = "Modificar";
        console.log("equipos de 0 :",equipo);
        this.dataSource = equipo;
        console.log("resultado:" , this.dataSource);
        //patchvalue mete todo lo del objeto seleccionado en el from group
        this.form.patchValue(equipo);
      });
    }else{
      this.httpClient.get('http://localhost:8060/ficha/nueva').subscribe((equipo: any) => {
        this.accion = "Nuevo";
        console.log("equipo vale:",equipo);
        this.dataSource = equipo[0];
        console.log( this.dataSource)
        //pathvalue pasa los datos al formulario
        this.form.patchValue(equipo[0]);
      });
    }
  };

  private buildForm(){
    this.form = this._formBuilder.group({
      _id:['',[Validators.required]],
      NombreEquipo:['',[Validators.required]],
      LogoEquipo:['',[Validators.required]],
      Liga:['',[Validators.required]],
      id:['',[Validators.required]],
      
    })
  }

  guardar(event: Event){
    console.log("ENTRE EN GUARDAR");
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log("contenido del form", this.form);
      if(this.accion == "Modificar"){
        this.httpClient.post('http://localhost:8060/save/'+this._id, value).subscribe((mensaje:any) =>{
        console.log("datos del formulario",mensaje);
        this.openDialog();
      });
      }else{
        console.log(value);
        this.httpClient.post('http://localhost:8060/nueva', value).subscribe((mensaje:any) =>{
          console.log('pasé por aqui');
          console.log("datos del formulario",mensaje);
          this.openDialog();
        });
      }
      this.router.navigateByUrl('/');
    }else{
      this.form.markAllAsTouched();
    }
    
  }
  
  getErrorMessage(){
    if(this.form.controls['NombreEquipo'].hasError('required')){
      return 'Tiene que entrar un valor no puede quedar vacio'; 
    }
    return;
  }

  openDialog(){
    const dialogRef = this.dialog.open(AceptarComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result: ${result}`);
    })
  }
}