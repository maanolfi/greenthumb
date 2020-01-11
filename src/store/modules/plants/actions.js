export function requestPlantsResults(result) {
  return {
    type: '@plants/REQUEST_ALL_RESULTS',
    result
  };
}

export function successPlants(dados) {
  return {
    type: '@plants/SUCCESS',
    payload: { dados },
  };
}

export function failurePlants() {
  return {
    type: '@plants/FAILURE',
  };
}

export function Answer(text) {
  return {
    type: '@plants/ANSWER',
    text
  };
}
