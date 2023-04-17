import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {
  public items: MenuItem[] = [];
  public listMedias: any[] = [];

  ngOnInit() {
    let $ = this;


    this.getListMedias();
  }

  getListMedias() {
    this.listMedias.push({ id: 1, title: "Entenda como evitar o teatro da inovação corporativa", text: "Vivemos uma realidade em que algumas empresas estão mais preocupadas ..." })
    this.listMedias.push({ id: 2, title: "Fintechs: o que são e como essas empresas impactam o mercado?", text: "Com um sistema financeiro historicamenteengessado e burocrático, o B ..." })
    this.listMedias.push({ id: 3, title: "Qual é o panorama atual dasfintechs no Brasil?", text: "A crise econômica causada pela pandemia decovid-19 não abalou o set ..." })
  }

  teste() {
    console.log("AA");
  }
}
