 'use client'
 
import { getWalletClient } from '@/lib/viem'

import Button from './Button'
import ConnectionStatus from './ConnectionStatus'
import { useWalletContext } from '@/context/WalletProvider'
import { useEffect, useState } from 'react'
import { getETHPrice, getNumberOfFunders } from '@/lib/contract'


const Header = () => {
const { walletAddress, isConnected , setWalletAddress,setIsConnected} = useWalletContext();
const [ethPrice, setEthPrice] =  useState<number | null>(null); 
const [numberOfFunders, setNumberOfFunders] = useState<number | null>(null);

useEffect(() => {
  const loadETHPrice = async () => {
    try {
      const price =await getETHPrice();
      setEthPrice(Number(price));
    }catch (error) {
      console.error("Error fetching ETH price:", error);
    }
  };

  loadETHPrice();
}, []);

useEffect(() => {
  const loadNumberOfFunders = async () => {
    try {
      const numFunders = await getNumberOfFunders();
      setNumberOfFunders(Number(numFunders));
    } catch (error) {
      console.error("Error fetching number of funders:", error);
    }
  };

  loadNumberOfFunders();
}, []);

useEffect(() => {
  console.log({ ethPrice, numberOfFunders });
}, [ethPrice, numberOfFunders ]);


const handleClick = async () => {
  const walletClient =  getWalletClient();

  const[address] = await walletClient.requestAddresses();

  setWalletAddress(address);
  setIsConnected(true);
}



  return (
    <header className=' bg-card border-b border-border w-full flex-1'>
      <div className="flex justify-end h-[60px] items-center pr-5">
          <div className='flex gap-[50px] items-center'>
              <ConnectionStatus  walletAddress={walletAddress}/>
              <Button
               text={isConnected ? 'Connected' : 'Connect Wallet'}
               onClick={handleClick}
               />
          </div>
      </div>
    </header>
  )
}

export default Header
