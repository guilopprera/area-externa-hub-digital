import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-evento-detalhes',
  templateUrl: './evento-detalhes.component.html',
  styleUrls: ['./evento-detalhes.component.scss']
})
export class EventoDetalhesComponent {
  public home: MenuItem;
  public items: MenuItem[] = [];
  public qtdIngressos: number = 0;
  ngOnInit() {
    this.items = [{ label: 'Home' }, { label: 'Eventos' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
