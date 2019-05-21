//Remix部署合约后获取
var address = "0x191b7052d6f178cc04634c1b9d195cd1586980c9";

var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "musicId",
				"type": "uint32"
			}
		],
		"name": "increaseDownloadCount",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "musicId",
				"type": "uint32"
			}
		],
		"name": "increaseListenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "musicId",
				"type": "uint32"
			},
			{
				"indexed": false,
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "count",
				"type": "uint32"
			}
		],
		"name": "userListen",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "musicId",
				"type": "uint32"
			},
			{
				"indexed": false,
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "count",
				"type": "uint32"
			}
		],
		"name": "userDownload",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "musicId",
				"type": "uint32"
			}
		],
		"name": "getTotalDownloadCount",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "musicId",
				"type": "uint32"
			}
		],
		"name": "getTotalListenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "musicId",
				"type": "uint32"
			},
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserDownloadCount",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "musicId",
				"type": "uint32"
			},
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserListenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]