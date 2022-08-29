import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [ 
  ]
})
export class HijoComponent implements OnInit {

 contadorPropiedad: number = 0;
  

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contadorPropiedad = contador)
  }
  
  multiplicar(){
    this.store.dispatch( actions.multiplicar({ numeroArgumento: 2}))
  }
  dividir(){
   this.store.dispatch( actions.dividir({numeroArgumento: 2}))
  }
 
}
