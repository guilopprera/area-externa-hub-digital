import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.scss']
})
export class NovaContaComponent {
  startupName: string;
  cnpj: string;
  email: string;
  telefone: string;
  site: string;
  cidade: string;
  cep: string;
  rua: string;
  numero: string;
  agreement: boolean;

  onFormSubmit() {
    // Lógica para lidar com o envio do formulário aqui
    console.log('Formulário enviado!', this.startupName, this.cnpj, this.email, this.telefone, this.site, this.cidade, this.cep, this.rua, this.numero, this.agreement);
  }

}
