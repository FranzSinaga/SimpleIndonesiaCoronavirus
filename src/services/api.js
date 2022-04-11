import Get from './Get'

const getCases = () => Get('indonesia');
const getCasesByProv = () => Get('indonesia/provinsi');

const API = {
    getCases,
    getCasesByProv
}

export default API;