import Constants from "../utils/Constants";
import ecc from 'eosjs-ecc'
import Eos from 'eosjs';

class EosService {

	privateToPublic(privateKey) {
		return ecc.privateToPublic(privateKey);
	}

	constructor(baseUrl) {
		this.eos = Eos({httpEndpoint: baseUrl});
	}

	async init(wif) {
		const info = await this.getInfo();
		this.eos = Eos({httpEndpoint: Constants.EOS.URL.BASE, chainId: info.chain_id, keyProvider: wif});
		this.headers = {
			expiration: info.head_block_time,
			ref_block_num: info.head_block_num,
			ref_block_prefix: info.head_block_num
		};
	}

	getInfo() {
		return this.eos.getInfo({})
	}


	getKeyAccounts(publicKey) {
		return this.eos.getKeyAccounts(publicKey);
	}

	async createTransferTransaction(from = 'test', to = 'tez', amount = '7.0000 VIM', wif = '5JLeFpnv2xfee51F1JgVJYF43c5BaikypDR2hNdckRJSgxBogze') {
		const data = {
			from: from,
			to: to,
			amount: amount,
			memo: ''
		};
		return await this.createTransaction(wif, from, 'tez', 'transfer',  data);
	}

	async addPhotoToBlockchain(accountCreator = 'user', photoUrl = 'test_url', ipfsHash = 'test_hash', wif = '5JKakzSXKmdzdpNeuz7L2brFRPo4KLF5tCTELuQCaQUiL3i3wwm') {
		const data = {
			parent_post: 0,
			account_creator: accountCreator,
			url_photo: photoUrl,
			ipfs_hash_photo: ipfsHash
		};
		return await this.createTransaction(wif, accountCreator, 'tez', 'createpost',  data);
	}


	async buyPhoto(from = 'test', to = 'user', photoUrl = 'test_url', ipfsHash = 'test_hash', wif = '5JLeFpnv2xfee51F1JgVJYF43c5BaikypDR2hNdckRJSgxBogze') {
		const data = {
			from,
			to,
			amount: '5.0000 VIM',
			url_photo: photoUrl,
			ipfs_hash: ipfsHash
		};
		return await this.createTransaction(wif, from, 'tez', 'payment',  data);
	}

	async createTransaction(wif, actor, contractName, actionName,  data) {
		await this.init(wif);
		return await this.eos.transaction(
			{
				headers: this.headers,
				actions: [
					{
						account: contractName,
						name: actionName,
						authorization: [{
							actor,
							permission: 'owner'
						}],
						data
					}
				]
			}
		);
	}

}


export default new EosService(Constants.EOS.URL.BASE);