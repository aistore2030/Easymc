import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modals/usuario.model';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  getUsuarios() {

    return this.http.get<Usuario[]>( 'http://192.168.64.2/server_easymc/matching.php' )
              .pipe(
                delay( 2500 )
              );

  }

}