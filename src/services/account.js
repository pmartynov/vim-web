import * as Eos from "eosjs";

const initaPrivate = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';
const initaPublic = 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV';

const eos = Eos.Localnet({
	keyProvider: initaPrivate,
	httpEndpoint: 'http://192.168.100.42:8888'
});

export async function createAccount() {
	return await eos.newaccount({
		creator: 'inita',
		name: 'mynewacct',
		owner: initaPublic,
		active: initaPublic,
		recovery: 'inita'
	})
}