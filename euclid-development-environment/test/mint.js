const { dag4 } = require("@stardust-collective/dag4");
const axios = require('axios');
const crypto = require('crypto');

const isAxiosError = (value) => {
    return value?.isAxiosError === true;
};

const url = "http://152.53.45.25:9400"

const generateActionMessageProof = async (
    actionMessage,
    signingAccount
) => {

    const encodedMessage = Buffer.from(JSON.stringify(actionMessage)).toString('base64')

    const signature = await dag4.keyStore.dataSign(
        signingAccount.keyTrio.privateKey,
        encodedMessage
    );

    const publicKey = signingAccount.keyTrio.publicKey;

    const uncompressedPublicKey =
        publicKey.length === 128 ? '04' + publicKey : publicKey;

    return {
        id: uncompressedPublicKey.substring(2),
        signature
    };
};

const generateActionMessageBody = async (
    actionMessage,
    signingAccount
) => {
    const proof = await generateActionMessageProof(actionMessage, signingAccount);

    const body = { value: actionMessage, proofs: [proof] };

    return body;
};

const sendActionMessage = async (
    actionMessage,
    signingAccount
) => {

    const body = await generateActionMessageBody(actionMessage, signingAccount);


    let response;
    try {
        console.log(JSON.stringify(body, null, 2));

        response = await axios.post(
            url + '/data',
            body
        );

        console.log('Response Data');
        console.log(JSON.stringify(response.data, null, 2));
    } catch (e) {
        if (isAxiosError(e)) {
            console.log(`Status: ${e.status}`);
            console.log('Error Data:', e.response?.data ? JSON.stringify(e.response.data, null, 2) : 'No error data');
            throw new Error('Send Action Message Error: See above for details');
        }
        throw e;
    }

    return response;
};


const mintCollection = async () => {

;
    const privateKey = "e44ba4ff4a71f87883e667f58c88d78677e60a60e4580e62b20311cc2acc4d21"
    const account = dag4.createAccount(privateKey);


    console.log(account);

    await sendActionMessage(
        { MintCollection: { name: "duelyst2" } },
        // {MintNFT: { owner: account.address, collectionId: "18c3604ff5d889ddd2d6776baafbf5227b5919454e80f711210abbd969f4302c", nftId: 3, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPy4QWtfglbm7rI4dSi6dvh4n8A&s", name: "tesasname", description: "testdescription", metadata: { trait1: "value1", trait2: "value2" } }},
        account
    );




};

mintCollection()
