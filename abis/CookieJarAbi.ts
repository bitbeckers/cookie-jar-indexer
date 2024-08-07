export const CookieJarAbi = [{
    "inputs": [{"internalType": "string", "name": "message", "type": "string"}],
    "name": "CALL_FAILED",
    "type": "error"
}, {
    "inputs": [{"internalType": "string", "name": "message", "type": "string"}],
    "name": "NOT_ALLOWED",
    "type": "error"
}, {
    "inputs": [{"internalType": "address", "name": "guard_", "type": "address"}],
    "name": "NotIERC165Compliant",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "cookieUid", "type": "bytes32"}, {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
    }, {"indexed": false, "internalType": "bool", "name": "isGood", "type": "bool"}],
    "name": "AssessReason",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousAvatar",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newAvatar", "type": "address"}],
    "name": "AvatarSet",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "guard", "type": "address"}],
    "name": "ChangedGuard",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "cookieUid", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "cookieMonster",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "indexed": false,
        "internalType": "string",
        "name": "reason",
        "type": "string"
    }],
    "name": "GiveCookie",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint8", "name": "version", "type": "uint8"}],
    "name": "Initialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "bytes", "name": "initializationParams", "type": "bytes"}],
    "name": "Setup",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousTarget",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newTarget", "type": "address"}],
    "name": "TargetSet",
    "type": "event"
}, {
    "inputs": [],
    "name": "PERC_POINTS",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "SUSTAINABILITY_ADDR",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "SUSTAINABILITY_FEE",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes", "name": "_initializationParams", "type": "bytes"}],
    "name": "__Allowlist_init",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes", "name": "_initializationParams", "type": "bytes"}],
    "name": "__Giver_init",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "cookieUid", "type": "bytes32"}, {
        "internalType": "string",
        "name": "message",
        "type": "string"
    }, {"internalType": "bool", "name": "isGood", "type": "bool"}],
    "name": "assessReason",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "avatar",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
    "name": "canClaim",
    "outputs": [{"internalType": "bool", "name": "allowed", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "claimer", "type": "address"}],
    "name": "claims",
    "outputs": [{"internalType": "uint256", "name": "dateTime", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "cookieAmount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "cookieToken",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "dao",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getGuard",
    "outputs": [{"internalType": "address", "name": "_guard", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "guard",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
    "name": "isAllowList",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "periodLength",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "reason", "type": "string"}],
    "name": "reachInJar",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "cookieMonster", "type": "address"}, {
        "internalType": "string",
        "name": "reason",
        "type": "string"
    }], "name": "reachInJar", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_avatar", "type": "address"}],
    "name": "setAvatar",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_periodLength", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_cookieAmount",
        "type": "uint256"
    }, {"internalType": "address", "name": "_cookieToken", "type": "address"}],
    "name": "setConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_guard", "type": "address"}],
    "name": "setGuard",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_target", "type": "address"}],
    "name": "setTarget",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes", "name": "_initializationParams", "type": "bytes"}],
    "name": "setUp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "target",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "threshold",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "useLoot",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "useShares",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}]