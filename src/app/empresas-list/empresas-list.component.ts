import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../shared/empresa/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {

  empresas: Array<any>;

  constructor(private empresaService: EmpresaService,
              private router: Router
              ) { }

  ngOnInit() {
    this.empresaService.getAll().subscribe(data => {
      this.empresas = data;
    })
  }
  gotoList() {
    this.router.navigate(['/empresas-list']);
  }

  delete(id) {
    console.log(id);
    this.empresaService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
    window.location.reload();


  }
}
