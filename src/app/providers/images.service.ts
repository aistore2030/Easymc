import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private _READER : any  			=	new FileReader();
  private _REMOTE_URI : string 	=	"http://YOUR-REMOTE-URI-HERE/parse-upload.php";
  constructor() { }
}
