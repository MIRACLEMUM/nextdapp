'use client'

import { checkWalletConnectionStatus } from '@/lib/checkWalletConnectionStatus';


import React, {createContext,  useContext, useEffect, }from 'react'
import type {Address} from 'viem'

interface walletState {
    walletAddress: Address | undefined;
    setWalletAddress: (address: Address | undefined) => void;
    isConnected: boolean;
    setIsConnected: (connected: boolean) => void;
  

}

 export const WalletContext = createContext<walletState >(
    {
        walletAddress: undefined,
        setWalletAddress: () => {},
        isConnected: false,
        setIsConnected: () => {
    } 
 });


const WalletProvider = ({children}:{children: React.ReactNode}) => {
    const [walletAddress, setWalletAddress] = React.useState<Address | undefined>(undefined);
    const [isConnected, setIsConnected] = React.useState<boolean>(false);

    const initialState: walletState = {
        walletAddress,
        setWalletAddress,
        isConnected,
        setIsConnected,
    };

    useEffect(() => {
        async function checkConnectionStatus() {
            const connectedWallet = await checkWalletConnectionStatus();
            // Logic to check wallet connection status
            // For example, you might want to check if walletAddress is set
            if (connectedWallet) {
                setWalletAddress(connectedWallet);
                setIsConnected(true);
            } 
        }

        checkConnectionStatus();
    }, []);

  return (
    <div>
        <WalletContext.Provider value={initialState}>
            {children}
        </WalletContext.Provider>

    </div>
  )
}

export default WalletProvider


export const useWalletContext= () => {
        return useContext(WalletContext);
    
}