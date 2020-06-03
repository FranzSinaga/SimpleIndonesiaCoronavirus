import Get from './Get'

const getCases = () => Get('');
const getCasesByProv = () => Get('provinsi');

const API = {
    getCases,
    getCasesByProv
}

export default API;