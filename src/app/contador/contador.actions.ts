import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{ numeroArgumento: number }>()
);
export const dividir = createAction(
  '[Contador] Dividir',
  props<{ numeroArgumento: number }>()
);
export const resetear = createAction('[Contador] Resetear');
