import { Button } from "@material-tailwind/react";

const Home = () => {
  return (
    <div className="h-full w-full -mt-[100px] overflow-y-auto snap-y snap-mandatory bg-background-image pt-[100px]">
      <div className="relative h-screen flex justify-center items-center px-32 pt-24 pb-44 snap-start">
        <div className="relative w-full h-full text-white bg-custom-gray-4/10 backdrop-blur-3xl rounded-[20px] flex flex-col justify-center items-center">
          <div className="absolute bottom-[22%] left-1/2 -translate-x-[60%] -z-10">
            <img
              src="/circle.png"
              alt="home-bg"
              className="w-[360px] h-[360px] object-cover"
            />
          </div>
          <div className="flex flex-col translate-y-12 gap-6">
            <div className="text-7xl translate-x-24 font-bold">GAMEFI</div>
            <div className="w-[500px] translate-x-64 text-xl uppercase">
              GameFi combines blockchain and gaming, allowing players to create, trade, and utilize NFTs. With Web3 integration, players can mint in-game items, manage digital assets, and submit mods for enhanced, community-driven experiences.
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          <Button
            className="w-96 bg-custom-gray-4/10 backdrop-blur-3xl text-custom-green rounded-2xl border-[0.1px] border-custom-green/50 shadow-custom-green/30 hover:shadow-custom-green/50 text-xl font-medium normal-case"
            onClick={() =>
              window.open("https://gamefi-duelyst.dev.blockdudes.com/")
            }
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Visit Game
          </Button>
        </div>
      </div>
      <div className="relative h-screen flex justify-center items-center px-32 pt-24 pb-44 snap-start">
        <div className="relative w-full h-full text-white bg-custom-gray-4/10 backdrop-blur-3xl rounded-[20px] flex justify-center items-center gap-8">
          <div className="w-[600px] text-xl uppercase">
            <span className="font-bold mr-3">
              NFT Management and Game Modding:
            </span>
            GameFi provides a Dashboard where players can easily their NFTs across mods. <br /> <br />
            Creators can develop game mods, which can be linked with NFTs. Players who own specific NFTs gain access to exclusive in-game enhancements.
          </div>
          <img
            src="/asset-1.png"
            alt="asset-1"
            className="w-[450px] h-[450px] object-cover"
          />
        </div>
      </div>
      <div className="relative h-screen flex justify-center items-center px-32 pt-24 pb-44 snap-start">
        <div className="relative w-full h-full text-white bg-custom-gray-4/10 backdrop-blur-3xl rounded-[20px] flex justify-center items-center gap-8">
          <img
            src="/asset-2.png"
            alt="asset-2"
            className="w-[450px] h-[450px] object-cover"
          />
          <div className="w-[550px] text-xl uppercase">
            <span className="font-bold mr-3">
              GameFi Functionalities:
            </span>
            Players able to manage their assets of different mods at a single dashboard, this will attract new game creators to create inovative mods. <br /> <br />
            This allows for enhanced engagement, with NFTs tied to specific skins and assets. <br /> <br /> The platform supports seamless integration of mods, allowing players to modify and customize games, while also managing NFTs tied to specific mods.
          </div>
        </div>
      </div>
      <div className="relative h-screen flex justify-center items-center px-32 pt-24 pb-44 snap-start">
        <div className="relative w-full h-full text-white bg-custom-gray-4/10 backdrop-blur-3xl rounded-[20px] flex justify-center items-center gap-8">
          <div className="w-[600px] text-xl uppercase">
            <span className="font-bold mr-3">
              GameFi Dashboard:
            </span>
            Players can see all their minted nfts at one place. <br /> <br />
            you can check your minted nft <a href="/dashboard" className="text-blue-500">here</a>.
          </div>
          <img
            src="/asset-3.png"
            alt="asset-3"
            className="w-[420px] h-[420px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;