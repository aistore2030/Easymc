import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../providers/usuarios.service';
import { Usuario } from 'src/app/modals/usuario.model';

@Component({
  selector: 'app-bookmarkem',
  templateUrl: './bookmarkem.page.html',
  styleUrls: ['./bookmarkem.page.scss'],
})
export class BookmarkemPage {
 
  usuarios: Usuario[] = [];
  textoBuscar = '';
  
  constructor( private UsuariosService: UsuariosService ) {

    this.UsuariosService.getUsuarios()
      .subscribe( resp => this.usuarios = resp );

  }

  buscarUsuario( event ) {

    const texto = event.target.value;
    this.textoBuscar = texto;


  }

}
