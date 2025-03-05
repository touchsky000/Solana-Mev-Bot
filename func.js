const {
    Connection,
} = require('@solana/web3.js');

const connection = new Connection(
    // `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_RPC_URL_KEY}`,
    'https://rpc.shyft.to?api_key=RBbl_MnaXSzVwAFg',
    "confirmed"
);

function decodeBase64(encoded) {
    return parseFloat(Buffer.from(encoded, 'base64').toString('utf8'));
}

module.exports = {
    connection: connection,
    decodeBase64: decodeBase64
};
