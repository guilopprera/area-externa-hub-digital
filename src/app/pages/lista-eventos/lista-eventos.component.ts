import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent {
  public home: MenuItem;
  public items: MenuItem[] = [];
  public qtdIngressos: number = 0;
  public categoriaSelecionada = 0;
  public categorias: any = [];
  public listaAgenda: any = [];
  public products: [];
  public responsiveOptions: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getCategorias();

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getCategorias() {
    for (let i = 0; i < 5; i++) {
      this.categorias.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
  }

  getAgenda() {
    for (let i = 0; i < 5; i++) {
      this.listaAgenda.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
  }

  public abrirDetalhes() {
    this.router.navigateByUrl("evento-detalhes");
  }
}
