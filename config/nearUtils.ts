import { connect, ConnectConfig, Contract, keyStores, WalletConnection } from "near-api-js"
import { default as getConfig } from "./getNearConfig";

const nearConfig = getConfig(process.env.NODE_ENV || "development");

declare global {
    interface Window {
        walletConnection: WalletConnection;
        accountId: string;
        contract: Contract;
        contractName:Contract;
        contractNFT:Contract
    }
}

export async function initContract() {
    const config: ConnectConfig = {
        ...nearConfig, deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() }, headers: {}
    }
    const near = await connect(config);
    // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
    window.walletConnection = new WalletConnection(near, null);

    // Getting the Account ID. If still unauthorized, it's just empty string
    window.accountId = window.walletConnection.getAccountId();

    // Initializing our contract APIs by contract name and configuration

    window.contractNFT = await new Contract(window.walletConnection.account(), nearConfig.nftContractName, {
        // View methods are read only. They don't modify the state, but usually return some value.
        viewMethods: ['nft_tokens_for_owner', "nft_token"],
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: ['nft_mint', "nft_transfer", "nft_approve"],
      });

    window.contract = await new Contract(
        window.walletConnection.account(),
        nearConfig.contractName,
        {
            // View methods are read only. They don't modify the state, but usually return some value.
            viewMethods: [
                "get_posts",
                "get_post",
                "get_owner",
                "get_paging_posts",
                "get_total_posts",
                "get_comments",
                "get_paging_comments",
                "get_total_comments",
                "get_comment",
                "get_post_total_comments",
                "get_votes_statistics",
                "get_next_post_id",
                "get_user_posts",
                "get_user_vote_status",
            ],
            // Change methods can modify the state. But you don't receive the returned value when called.
            changeMethods: [
                "create_post",
                "create_comment",
                "delete_comment",
                "delete_post",
                "donate",
                "upvote",
                "remove_upvote",
                "downvote",
                "remove_downvote",
            ],
        }
    );
};



export function logout() {
    window.walletConnection.signOut();
    // reload page
    window.location.replace("/");
}

export function login() {
    // Allow the current app to make calls to the specified contract on the
    // user's behalf.
    // This works by creating a new access key for the user's account and storing
    // the private key in localStorage.
    window.walletConnection.requestSignIn(nearConfig.contractName);
}