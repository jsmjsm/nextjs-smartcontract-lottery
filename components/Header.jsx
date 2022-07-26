import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div>
            <div> 💲 Decentralize Lottery 💲 </div>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
