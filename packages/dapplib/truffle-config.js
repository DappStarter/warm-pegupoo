require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot alien recipe still assume hundred light army giant'; 
let testAccounts = [
"0xb82d47cbd08db923b4a011710710f18af2de53e335dc5bb6c0d2fa433920650b",
"0xf62749a63a4e48ef4b86c59dd6f758c0c349256471006514c3cfb8182d77de59",
"0x6236ffb209c0973b2f3c9d45f31fe67f7450175c3ac1c8c4e6cc273cd6040625",
"0xfca5a2acdd4e549b62c13df7ba182a1b1dc9952de7974ebea400b89cea4622ee",
"0x72604076a235a52cdff185fea02c67aed917cd65fb7ffc2e67309fc0f86d9d8f",
"0x4ad933a927396fc19151a5a48f18164a255212ea6c23096089de0e287f3b284d",
"0x46f8431831b9f14798d8b6cd5e2fde1e6f488fcb554ed24225eed116dc24731f",
"0x48ca462e3b71457e4112109ff456f2d00283168e6194e74e9f45d56d09bd7a17",
"0x2877ae2dff982adec7af06df591215c70c34bf8324acd9d5793afa295371cc3f",
"0x82f54067a4fe31b781db4ab74ed4029ac87eaaf01724fdd6b860f4deb71be05f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

