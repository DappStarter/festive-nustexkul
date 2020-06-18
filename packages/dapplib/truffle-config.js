require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('./src/lib/hdwalletprovider');

let mnemonic = 'grid clog tackle spray green note right purpose inner cloth bracket twice'; 
let testAccounts = [
"0x066fb26936c5e5ccc17e6e461054ed16f5173f3c4a2dfde3f57c8e98acd0319a",
"0x2fd9dc0f5cb7c2cfe5e820d57be6133f7499ababdc062dcc107543a64e14a344",
"0xfc6e08ad006e1190af265fb5443c0a2f27985eba6f9d614dc57f905cf92d8fea",
"0xf91529e96fb95dc4b2fe8a8f94b6d51f47332e68025793034919933cd407a0d0",
"0x2e75771cb59f003f08328b4cfcdca35783533c5d8a86b9469a45aca938ecb724",
"0x1250919e6a77255ecaec146dd3312792382244f4207552756a932e3b99af5f5c",
"0x98711de5713b728060fed38ab6a8b452a345d5be051501dbb4c27367b7cc803c",
"0xfb61973a6e67be91a8b9f5895eae046e7cec649c077f35244068b13a52f8bc35",
"0x30d1144992b81c1a479226072fb97b537a9192e5e541771e5fe61ba46b1c22f0",
"0xfadf1338cfea7454715218578eefcdcb46dd06e13c5fa37df23e70a3a249bb36"
]; 
let devUri = 'https://api.baobab.klaytn.net:8651';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '1001',
            gas: '8500000',
            gasPrice: null,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.6'
        }
    }
};
