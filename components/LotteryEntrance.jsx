// dont export from moralis when using react
import { useMoralis, useWeb3Contract } from "react-moralis"
import { contractAddresses, abi } from "../constants"

import { useEffect, useState } from "react"
import { ethers } from "ethers"

export default function LotteryEntrance() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex, 16)
    const raffleAddress = chainIdHex in contractAddresses ? contractAddresses[chainId][0] : null

    // const { runContractFunction: enterRaffle } = useWeb3Contract({
    //     abi: abi,
    //     contractAddress: raffleAddress,
    //     functionName: "enterRaffle",
    //     params: {},
    //     msgValue: ???,
    // })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            // try to read the raffle entrance fee
            async function updateUI() {
                const entranceFeeFromContract = await getEntranceFee()
                console.log(entranceFeeFromContract)
            }
            updateUI()
        }
    }, [isWeb3Enabled])

    return <div>Hi Lottery</div>
}
