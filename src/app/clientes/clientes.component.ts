import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Carlos', apellido: 'Oliva', createAt: '2014-01-13', email: 'caolivap@unal.edu.co'},
    {id: 2, nombre: 'Jocelyn', apellido: 'Oliva', createAt: '2014-01-13', email: 'jolivav@unal.edu.co'},
    {id: 3, nombre: 'Deisy', apellido: 'Oliva', createAt: '2014-01-13', email: 'djolivap@unal.edu.co'},
    {id: 4, nombre: 'Rosa', apellido: 'Paredes', createAt: '2014-01-13', email: 'mrparedess@unal.edu.co'},
    {id: 5, nombre: 'Juan Carlos', apellido: 'Oliva', createAt: '2014-01-13', email: 'jcoliva@unal.edu.co'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
