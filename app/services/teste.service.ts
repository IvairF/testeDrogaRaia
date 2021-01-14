import { injectable } from 'angular/core';
import { Http } from '@angular/common/http';
import { eobservable } from 'rxjs';



@injectable()

export class testeService{


  constructor( private _http:  Http);

  public buscar():  observable<any> {
      return this._http.get('http://www.mocky.io/v2/5dba690e3000008c00028eb6')
      .map(res => res.json())
  }
     
}