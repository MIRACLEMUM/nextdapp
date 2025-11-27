 'use client'
 
import { useEffect } from 'react'
import Button from './Button'
import ConnectionStatus from './ConnectionStatus'
import { useWalletContext } from '@/context/WalletProvider'
import { getWalletClient } from '@/lib/viem'

const Header = () => {

const { walletAddress, isConnected , setWalletAddress,setIsConnected} = useWalletContext()

const handleClick = async () => {
  const walletClient =  getWalletClient();

  const[address] = await walletClient.requestAddresses();

  setWalletAddress(address);
  setIsConnected(true);
}

useEffect(() => {
  console.log({WalletAddress: walletAddress, isConnected});
}, [walletAddress, isConnected]);

  
  

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
