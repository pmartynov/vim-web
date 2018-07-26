const Constants = {
	POST_WIDTH: 300,
	SCROLL_POINTS: {
		BODY: 'body_scroll'
	},
	STEEPSHOT: {
		URL: {
			BASE: 'https://steepshot.org/api/v1_1',
			POSTS: {
				TOP: '/posts/top'
			}
		}
	},
	EOS: {
		URL: {
			BASE: 'http://188.166.103.60:8080',
			GET_INFO: '/v1/chain/get_info',
			GET_KEY_ACCOUNTS: '/v1/history/get_key_accounts'
		}
	},
	INPUT: {
		ACCOUNT: 'account',
		ACTIVE_KEY: 'activeKey'
	}
};

export default Constants;