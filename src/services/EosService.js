import Constants from "../utils/Constants";
import ecc from 'eosjs-ecc'
import Eos from 'eosjs';
import ResponseUtils from "../utils/ResponseUtils";

class EosService {

	privateToPublic(privateKey) {
		return ecc.privateToPublic(privateKey);
	}

	constructor(baseUrl) {
		this.eos = Eos({httpEndpoint: baseUrl});
	}

	getInfo() {
		return this.eos.getInfo({})
	}


	getKeyAccounts(publicKey) {
		return this.eos.getKeyAccounts(publicKey);
	}

	async createTransferTransaction(from = 'test', to = 'tez', amount, urlPhoto, ipfsHash, wif = '5K4v7tUaLVkL4kUYswTtrN7xKLo8X9sBxiHa88ibEzezS3KycDd') {
		const info = await this.getInfo();
		console.log(info);
		this.eos = Eos({httpEndpoint: Constants.EOS.URL.BASE, chainId: info.chain_id, keyProvider: wif});
		const trx = await this.eos.transaction(
			{
				headers: {
					expiration: info.head_block_time,
					ref_block_num: info.head_block_num,
					ref_block_prefix: info.head_block_num //TODO узнать что за префикс
				},
				actions: [
					{
						account: from, //TODO вроде как название смарконтракта
						name: 'transfer',
						authorization: [{
							actor: from,
							permission: 'active'
						}],
						data: {
							from: from,
							to: to,
							quantity: '7.0000 SYS',
							memo: ''
						}
					}
				]
			}
			// options -- example: {broadcast: false}
		);
		console.log(trx);
	}
}


export default new EosService(Constants.EOS.URL.BASE);