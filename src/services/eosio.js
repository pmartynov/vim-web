const HOST = 'http://192.168.100.42:8888';
const HOST1 = 'http://188.166.103.60:8888';

export async function getInfo() {
	const url = HOST + '/v1/chain/get_info';
	let response = await fetch(url, {
		method: 'GET',
		mode: 'no-cors'
	});
	return response.json();
}