import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  public API = 'http://localhost:8080';
  public EMP_API = this.API + '/empresas';
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.EMP_API + '/mostrar');
  }

  get(id: string) {
    return this.http.get(this.EMP_API + '/' + id);
  }
  save(empresa: any): Observable<any> {
    let result: Observable<Object>;
    if (empresa.id){
      result = this.http.get(this.EMP_API + '/update?id='+empresa.id+'&nombre=' + empresa.name);
    } else result = this.http.get(this.EMP_API + '/crear?nombre=' + empresa.name);
    
    return result;
  }


  remove(id: string) {
    return this.http.get(this.EMP_API + '/del?id='+id);
  }
}
