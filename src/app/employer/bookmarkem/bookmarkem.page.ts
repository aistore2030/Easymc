import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../providers/usuarios.service';
import { Usuario } from 'src/app/modals/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmarkem',
  templateUrl: './bookmarkem.page.html',
  styleUrls: ['./bookmarkem.page.scss'],
})
export class BookmarkemPage {
 
  usuarios: Usuario[] = [];
  textoBuscar = '';
  checkBoxList:any;
  isIndeterminate:boolean;
  masterCheck:boolean;
  
  constructor( 
    private UsuariosService: UsuariosService,
    private router: Router
    ) {

    this.UsuariosService.getUsuarios()
      .subscribe( resp => this.usuarios = resp );

      this.checkBoxList = [
        {
          value:"sdfsdf",
          isChecked:false
        },{
          value:"ulzzanggirlt",
          isChecked:false
        },{
          value:"Kaimook",
          isChecked:false
        },{
          value:"sdfsdf",
          isChecked:false
        }
      ];
  }

  buscarUsuario( event ) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }
  showCustomer(mc_id,mcs_id,fname,lname,location,genders){
  	this.router.navigate(['detailmc/' + mc_id  + '/' + mcs_id + '/' + fname + '/' + lname + '/' + location + '/' + genders]);
  }
  checkMaster() {
    setTimeout(()=>{
      this.checkBoxList.forEach(obj => {
        obj.isChecked = this.masterCheck;
      });
    });
  }
 
  checkEvent() {
    const totalItems = this.checkBoxList.length;
    let checked = 0;
    this.checkBoxList.map(obj => {
      if (obj.isChecked) checked++;
    });
    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }

}
