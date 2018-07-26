import RequestService from "./RequestService";
import Constants from "../utils/Constants";
import ecc from 'eosjs-ecc'

class EosService {

	static getInfo() {
		const url = Constants.EOS.URL.BASE + Constants.EOS.URL.GET_INFO;
		const data = {};
		return RequestService.post(url, data);
	}

	static privateToPublic(privateKey) {
		return ecc.privateToPublic(privateKey);
	}

	static getKeyAccounts(activeKey) {
		const url = Constants.EOS.URL.BASE + Constants.EOS.URL.GET_KEY_ACCOUNTS;
		const data = {
			public_key: activeKey
		};
		return RequestService.post(url, data);
	}
}


export default EosService;