import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  form: FormGroup;
  NombreJugador: any

  constructor(private _formBuilder:FormBuilder, private httpClient :HttpClient, private router: Router, private _Activatedroute:ActivatedRoute) {
    console.log("Datos Recibidos");
    this.NombreJugador = this._Activatedroute.snapshot.paramMap.get("NombreJugador");

    console.log("Resultado del codigo: ", this.NombreJugador);
    this.buildForm();
   }

  ngOnInit(): void {
    
  }

  private buildForm(){
    this.form = this._formBuilder.group({
        NombreJugador:['',[Validators.required]],
    })
  }

  search(event: Event){
    console.log("ENTRE EN search");
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log("contenido del form", this.form);
      this.httpClient.get('http://localhost:8060/players/search/'+value.NombreJugador).subscribe((mensaje:any) =>{
        console.log("datos del formulario",mensaje);
      });
      this.router.navigateByUrl('/players/search/'+value.NombreJugador);
    }

  }
}
