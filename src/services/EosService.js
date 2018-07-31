import Constants from '../utils/Constants';
import ecc from 'eosjs-ecc';
import Eos from 'eosjs';

class EosService {

	privateToPublic(privateKey) {
		return ecc.privateToPublic(privateKey);
	}

	constructor(baseUrl) {
		this.eos = Eos({httpEndpoint: baseUrl});
	}

	async init(wif) {
		const info = await this.eos.getInfo({});
		this.eos = Eos({httpEndpoint: Constants.EOS.URL.BASE, chainId: info.chain_id, keyProvider: wif});
		this.headers = {
			expiration: info.head_block_time,
			ref_block_num: info.head_block_num,
			ref_block_prefix: info.head_block_num
		};
	}

	getKeyAccounts(publicKey) {
		return this.eos.getKeyAccounts(publicKey);
	}

	async addPhotoToBlockchain(wif, creator, photoUrl, ipfsHash, created, cost = Constants.EOS.COST.PHOTO) {
		const data = {
			parent_post: 0,
			account_creator: creator,
			url_photo: photoUrl,
			ipfs_hash: ipfsHash,
			value: cost,
			date_create: created
		};
		return await this.createTransaction(wif, creator, Constants.EOS.CONTRACT.PHOTO.ADD, Constants.EOS.ACTION.PHOTO.ADD, data);
	}

	async buyPhoto(wif, buyer, to, photoUrl, ipfsHash, created) {
		const data = {
			from: buyer,
			to,
			url_photo: photoUrl,
			ipfs_hash: ipfsHash,
			date_create: created
		};

		return await this.createTransaction(wif, buyer, Constants.EOS.CONTRACT.PHOTO.BUE, Constants.EOS.ACTION.PHOTO.BUE, data);
	}


	async createTransaction(wif, actor, contractName, actionName, data, permission = Constants.EOS.PERMISSION) {
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
							permission
						}],
						data
					}
				]
			}
		);
	}

}


export default new EosService(Constants.EOS.URL.BASE);