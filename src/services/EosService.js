import RequestService from "./RequestService";
import Constants from "../utils/Constants";
import ecc from 'eosjs-ecc'

class EosService {

	static getInfo() {
		const url = Constants.EOS.URL.BASE + Constants.EOS.URL.GET_INFO;
		const data = {};
		return RequestService.post(url, data);
	}

	static pivateToPublic(privateKey) {
		return ecc.privateToPublic(privateKey);
	}

}


export default EosService;