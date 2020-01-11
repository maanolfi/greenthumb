import { put, call, takeLatest, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { successPlants } from './actions';

function* PlantsRequestResults() {
  try {
    const dados = {
      sun: 'high', water: 'rarely', pets: false
    }
    const { data } = yield call(api.get,
      `?sun=${dados.sun}&water=${dados.water}&pets=${dados.pets}`);

    console.log(data)
  } catch {
    console.error('deu ruim')

  }
}


export default all([
  takeLatest('@plants/REQUEST_ALL_RESULTS', PlantsRequestResults),

]);
