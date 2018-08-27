import { createRequestService } from 'redux-create-request';

const regionURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes';

export const regionsService = createRequestService({
  type: 'GET_REGIONS_REQUEST',
  request: () => fetch(regionURL, { method: 'GET' }),
});
