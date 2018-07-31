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
			BASE: 'https://eosnode.steepshot.io'
		},
		CONTRACT: {
			PHOTO: {
				ADD: 'vim.media',
				BUE: 'vim.token'
			}
		},
		ACTION: {
			PHOTO: {
				ADD: 'createpost',
				BUE: 'payment'
			}
		},
		PERMISSION: 'owner',
		COST: {
			PHOTO: '7.0000 VIM'
		},
		USER: {
			CREATOR: {
				ACCOUNT: 'vim.media',
				OWNER_KEY: '5K5uXwfsdmxLEXYowXij1QhtHWukdzv8RkHzW5frNjwW6hmbmZh'
			}
		}
	},

	INPUT: {
		ACCOUNT: 'account',
		OWNER_KEY: 'ownerKey'
	},

	STORAGE: {
		PREFIX: 'VIM_'
	}
};

export default Constants;