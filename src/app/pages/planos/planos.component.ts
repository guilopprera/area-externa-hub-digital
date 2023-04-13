import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent {
  public items: MenuItem[] = [];
  public listMedias: any[] = [];

  ngOnInit() {
    let $ = this;
    this.items = [
      {
        label: 'Hub',
        command: (() => {
          console.log("Hub");
        })
      },
      {
        label: 'Hub',
        command: (() => {
          console.log("Hub");
        })
      },
      {
        label: 'Startups',
        command: (() => {
          console.log("Startups");
        })
      },
      {
        label: 'Mantenedores',
        command: (() => {
          console.log("Mantenedores");
        })
      },
      {
        label: 'Serviços',
        command: (() => {
          console.log("Serviços");
        })
      },
      {
        label: 'Eventos',
        command: (() => {
          console.log("Eventos");
        })
      },
      {
        label: 'Blog',
        command: (() => {
          console.log("Blog");
        })
      },

      {
        label: 'Login',
        tooltipPosition: "start",
        styleClass: "li-login",
        command: (() => {
          console.log("Blog");
        })
      },

    ];

    for (let i = 0; i < 3; i++) {
      this.listMedias.push({ id: i + 1, title: "Título de chamada da matéria", text: "Resumo sobre o que se trata matéria para captar o leitor" })
    }
  }

  teste() {
    console.log("AA");
  }
}
