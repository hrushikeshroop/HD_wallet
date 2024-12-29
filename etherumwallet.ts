const { generateMnemonic, mnemonicToSeedSync } = require("bip39");
const { HDNodeWallet } = require("ethers");

const mnemonic = generateMnemonic();
console.log("Generated Mnemonic:", mnemonic);

const seed = mnemonicToSeedSync(mnemonic);
const hdNode = HDNodeWallet.fromSeed(seed);


//path  for bitcoin : m/44'/0'/${i}
// path for eth : m/44'/60'/${i}
//path for sol : m/44'/150'/${i}

for (let i = 0; i < 4; i++) {
    const wallet = hdNode.derivePath(`m/44'/60'/${i}`);
    console.log("Path:", wallet.path);
    console.log("Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);
}
