import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent {
  public home: MenuItem;
  public items: MenuItem[] = [];
  public qtdIngressos: number = 0;
  ngOnInit() {
    this.items = [{ label: 'Home' }, { label: 'Eventos' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
