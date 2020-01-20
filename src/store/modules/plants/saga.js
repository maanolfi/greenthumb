import { put, call, takeLatest, all } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  successPlants,
  successOnlyPlant,
  postMsgPlantSuccess,
} from './actions';

function* PlantsRequestResults({ answers }) {
  try {
    const { data } = yield call(
      api.get,
      `/front-plantTest-service?sun=${answers.sun}&water=${answers.water}&pets=${answers.pets}`
    );

    yield put(successPlants(data));
    history.push('/results');
  } catch (e) {
    console.error('error fetching data.', e);
  }
}

function* PlantsRequestOnly({ id }) {
  try {
    const { data } = yield call(
      api.get,
      `/front-plantTest-service/plant?id=${id}`
    );

    yield put(successOnlyPlant(data));
    history.push('/details');
  } catch (e) {
    console.error('error fetching data.', e);
  }
}

function* PlantsMSGPOst({ data }) {
  try {
    yield call(api.post, `/front-plantTest-service`, data);
    yield put(postMsgPlantSuccess());
  } catch (e) {
    console.error('error sending your message.', e);
  }
}

export default all([
  takeLatest('@plants/ANSWER_REQUEST', PlantsRequestResults),
  takeLatest('@plants/REQUEST_ONLY_PLANT', PlantsRequestOnly),
  takeLatest('@plants/POST_MSG', PlantsMSGPOst),
]);
