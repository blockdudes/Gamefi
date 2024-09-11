import { useState } from "react";
import axios from "axios";
import NFTCard from "../components/NFTCard";

const Dashboard = () => {
    const [collection, setCollection] = useState([]);
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        try {
            const walletProvider = (window as any).stargazer;
            if (!walletProvider) {
                throw new Error('Unable to get wallet provider, is stargazer installed?');
            }
            if (!('getProvider' in walletProvider)) {
                throw new Error('This seems like a really old version of stargazer');
            }
            const dagProvider = walletProvider.getProvider('constellation');
            await dagProvider.activate();
            const dagAccounts = await dagProvider.request({ method: 'dag_accounts', params: [] });
            setAccount(dagAccounts[0]);
            const res = await axios.get(`https://gamefi-duelyst-api2.dev.blockdudes.com/data-application/addresses/${dagAccounts[0]}/nfts`);
            console.log(res);
            setCollection(res.data || []);
        } catch (error) {
            console.log("error")
        }
    }

    console.log(collection);

    return (
        <div className="w-[100vw] min-h-screen px-28 py-14 border bg-[#f2f6ff]">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Game Fi</h1>
                {account ? (
                    <div className=" bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900">Connected: {(account as string).slice(0, 3)}...{(account as string).slice(-3)}</div>
                ) : (
                    <button
                        onClick={connectWallet}
                        className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900"
                    >
                        Connect Wallet
                    </button>
                )}
            </div>

            {account ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(collection as any).map((nft: any, index: any) => (
                        <NFTCard
                            key={index}
                            name={nft.name}
                            description={nft.description}
                            imageUrl={nft.uri}
                            tokenId={nft.id}
                        />
                    ))}

                </div>
            ) : (
                <div className="flex justify-center items-center h-[70vh]">
                    <p className="text-5xl font-semibold text-gray-500">
                        Please connect your wallet to view NFTs
                    </p>
                </div>
            )}
        </div>
    )
}

export default Dashboard