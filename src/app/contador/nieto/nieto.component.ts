import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions'
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {
  contadorPropiedad: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contadorPropiedad = contador));
  }

  reset() {
    this.store.dispatch(actions.resetear());
  }
}
