import { sepolia } from "viem/chains"
import { contractAbI } from "./contractABI"
import {contractAddress} from "./contractAddress"
import { getWalletClient, publicClient } from "./viem"
import {Address, formatEther, parseEther} from 'viem'


export const getETHPrice = async() => {
    const res = await publicClient.readContract({
        address: contractAddress,
        abi: contractAbI,
        functionName: 'getPrice',
    })

    // const ethPrice = (Number(res))/1e18;
    const ethPrice  = formatEther(res as bigint);
    return ethPrice;
}

export const getNumberOfFunders = async() => {
    const res = await publicClient.readContract({
        address: contractAddress,
        abi: contractAbI,
        functionName: 'getFundersCount', 
    })
    return Number(res);
}

export const fundContract = async( ethAmount: string, walletAddress: Address) => {
    const walletClient = getWalletClient();

    const txHash = await walletClient.writeContract({
        address: contractAddress,
        abi: contractAbI,
        functionName: 'fund',
        // value: BigInt(ethAmount * 1e18), 
        value: parseEther(ethAmount),
        account: walletAddress,
        chain: sepolia
    })

    return txHash;
}

export const getContractBalance = async() => {
    const balance = await publicClient.getBalance({
        address: contractAddress,
    })
    return formatEther(balance);
}

export const getWalletBalance = async(walletAddress: Address) => {
    const balance = await publicClient.getBalance({
        address: walletAddress,
    })
    return formatEther(balance);
}

export const getMinDepositUSD = async() => {
    const res = await publicClient.readContract({
        address: contractAddress,
        abi: contractAbI,
        functionName: 'mimimumDollarAmount',
    })
    return formatEther(res as bigint);
}

