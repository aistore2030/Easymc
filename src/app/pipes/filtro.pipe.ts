import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../modals/usuario.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( usuarios: Usuario[], texto: string ): Usuario[] {

    if ( texto.length === 0 ) { return usuarios; }

    texto = texto.toLocaleLowerCase();

    return usuarios.filter( usuario => {
      return usuario.fname.toLocaleLowerCase().includes(texto)
             || usuario.lname.toLocaleLowerCase().includes(texto)
             || usuario.genders.toLocaleLowerCase().includes(texto)
             || usuario.type_works.toLocaleLowerCase().includes(texto);
    });

  }

}