import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  form: FormGroup

  constructor(private _formBuilder:FormBuilder, private httpClient :HttpClient, private router: Router) { }

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
      this.httpClient.post('http://localhost:8060/players/search/'+value, value).subscribe((mensaje:any) =>{
        console.log("datos del formulario",mensaje);
      });
      this.router.navigateByUrl('/players/'+value);
    }

  }
}
