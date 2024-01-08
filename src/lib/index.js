import { browser } from '$app/environment'
import { profileStore, handleisLoading, handleisLoggin, app_Loading } from "$lib/store/profile";
import { default_Wallet, usdt_Wallet, ppfWallet,ppdWallet,ppeWallet, pplWallet, coin_list } from "../lib/store/coins"
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

export  const UserProfileEl = (auth) => {
const handleprofile = async (auth) => {
    app_Loading.set(true)
    if(auth){
        const response = await fetch( `${URL}/api/profile`,{
                method: "GET",
                headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${auth}`
                }
            }
            );
            const json = await response.json();
            if(!response.ok){
                app_Loading.set(false)
            (json)
            handleisLoggin.set(false)
            profileStore.set({})
            window.location.href = ("")
            localStorage.removeItem("user");
            localStorage.removeItem("user_bet_amount");
            }
            if (response.ok) {
                profileStore.set(json.users[0])
                app_Loading.set(false)
                handleisLoggin.set(true)
                let wallet = json.wallet
                coin_list.set(wallet)
                wallet.forEach(element => {
                  if(element.is_active){
                    default_Wallet.set(element)
                  }
               });
            }
    }else{
        app_Loading.set(false)
    }
};


const handleBTCwallet = async () => {
    const response = auth && await fetch(
        `${URL}/api/wallet/btc-wallet`,{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth}`
            },
        }
        );
        const json = await response.json();
        if (response.ok) {
        return json[0]
        }
    };

    const handleETHwallet = async () => {
        const response = auth && await fetch(
            `${URL}/api/wallet/eth-wallet`,{
                method: "GET",
                headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${auth}`
                },
            }
            );
            const json = await response.json();
            if (response.ok) {
            return json[0]
            }
        };
                   
    const handleDOGEwallet = async () => {
        const response = await fetch(
            `${URL}/api/wallet/doge-wallet`,{
                method: "GET",
                headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${auth}`
                },
            }
            );
            const json = await response.json();
            if (response.ok) {
                return json[0] 
            }
        };
        
const handleLTCwallet = async () => {
    const response = await fetch(
        `${URL}/api/wallet/ltc-wallet`,{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        }
    );
    const json = await response.json();
    if (response.ok) {
        return json[0] 
    }
};
const handleUSDTwallet = async () => {
    const response = await fetch(
        `${URL}/api/wallet/usdt-wallet`,{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        }
    );
const json = await response.json();
    if (response.ok) {
        return json[0]
    }
};

const handleBNBwallet = async () => {
    const response = await fetch(
        `${URL}/api/wallet/bnb-wallet`,{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        }
    );
const json = await response.json();
    if (response.ok) {
        return json[0]
    }
};

const handleTRXwallet = async () => {
    const response = await fetch(
        `${URL}/api/wallet/trx-wallet`,{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth}`
        },
        }
    );
const json = await response.json();
    if (response.ok) {
        return json[0]
    }
};


    return { handleprofile,handleETHwallet,
         handleUSDTwallet, handleLTCwallet,
          handleDOGEwallet, handleBTCwallet, handleBNBwallet,handleTRXwallet
         }
};