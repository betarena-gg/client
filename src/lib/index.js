import { browser } from '$app/environment'
import { profileStore, handleisLoading, handleisLoggin, app_Loading } from "$lib/store/profile";
import { default_Wallet, usdt_Wallet, ppfWallet,ppdWallet,ppeWallet, pplWallet, coin_list } from "../lib/store/coins"
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

export  const UserProfileEl = () => {
const id = browser && JSON.parse(localStorage.getItem('user'))

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


const handlePPDwallet = async () => {
    const response = id && await fetch(
        `${URL}/api/wallet/ppd-wallet`,{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id}`
            },
        }
        );
        const json = await response.json();
        if (response.ok) {
        return json[0]
        }
    };
                   
    const handlePPLwallet = async () => {
        const response = await fetch(
            `${URL}/api/wallet/ppl-wallet`,{
                method: "GET",
                headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${id}`
                },
            }
            );
            const json = await response.json();
            if (response.ok) {
                return json[0] 
            }
        };
            
const handlePPFwallet = async () => {
    const response = await fetch(
        `${URL}/api/wallet/ppf-wallet`,{
            method: "GET",
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${id}`
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
            "Authorization": `Bearer ${id}`
        },
        }
    );
const json = await response.json();
    if (response.ok) {
        return json[0]
    }
};

    return { handleprofile, handleUSDTwallet, handlePPFwallet, handlePPLwallet, handlePPDwallet }
};