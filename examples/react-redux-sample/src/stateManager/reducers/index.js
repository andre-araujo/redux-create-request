import { createRequestService } from 'redux-create-request';

const countiesURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios';

export const countiesService = createRequestService({
  type: 'GET_COUNTIES_REQUEST',
  request: () => fetch(countiesURL, { method: 'GET' }),
});
