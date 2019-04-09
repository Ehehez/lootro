import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../shared/empresa/empresa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empresas-edit',
  templateUrl: './empresas-edit.component.html',
  styleUrls: ['./empresas-edit.component.css']
})
export class EmpresasEditComponent implements OnInit, OnDestroy {

  empresas: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private empresaService: EmpresaService,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.empresaService.get(id).subscribe((car: any) => {
          if (car) {
            this.empresas = car;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoList() {
    this.router.navigate(['/empresas-list']);
  }
  save(form: NgForm) {
    this.empresaService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(href) {
    this.empresaService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
