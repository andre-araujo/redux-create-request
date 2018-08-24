import { createRequestAction } from 'redux-create-request';

const regionURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes';

export const getRegions = () => createRequestAction('GET_REGIONS_REQUEST')(() => fetch(regionURL, { method: 'GET' }));
