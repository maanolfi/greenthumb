export function Answer(answers) {
  return {
    type: '@plants/ANSWER_REQUEST',
    answers
  };
}

export function successPlants(data) {
  return {
    type: '@plants/SUCCESS',
    data,
  };
}

export function failurePlants() {
  return {
    type: '@plants/FAILURE',
  };
}


export function requestOnlyPlant(id) {
  return {
    type: '@plants/REQUEST_ONLY_PLANT',
    id
  };
}

export function successOnlyPlant(data) {
  return {
    type: '@plants/SUCCESS_ONLY_PLANT',
    data,
  };
}

export function postMsgPlant(data) {
  return {
    type: '@plants/POST_MSG',
    data,
  };
}

export function postMsgPlantSuccess() {
  return {
    type: '@plants/POST_MSG_SUCCESS',
  };
}

