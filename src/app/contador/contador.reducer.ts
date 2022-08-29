import { createReducer, on, Action } from '@ngrx/store';
import { decrementar, incrementar, multiplicar, dividir, resetear } from './contador.actions';



export const initialState = 20
export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, {numeroArgumento}) => state * numeroArgumento),
  on(dividir, (state, {numeroArgumento}) => state / numeroArgumento),
  on(resetear,(state) => state = initialState)
);

export function _contadorReducer(state: number = initialState, action: Action) {
  return contadorReducer(state, action);
}
// REFERENCIA DE UN REDUCER MANUAL:
// export function contadorReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case incrementar.type:
//       return state + 1;
//     case decrementar.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }
