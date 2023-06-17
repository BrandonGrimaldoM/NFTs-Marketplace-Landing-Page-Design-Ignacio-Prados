"use client";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";
import ButtonPage from "./components/Buttons";
import Numbers from "./components/Numbers";
import collection from "./collections";
import SliderCard from "./components/Slider";
import Web3 from "web3";
import { useEffect } from "react";

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "700" });

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const web3 = new Web3((window as any).ethereum);
      } catch (error) {
        console.error("error");
      }
    }

    const requestAccount = async (): Promise<void> => {
      try {
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (error) {
        console.error("error");
      }
    };

    requestAccount();
  }, []);

  return (
    <>
      <section className="w-full flex flex-wrap justify-between items-center lg:pt-40 pt-20 bg-[url('/images/background-section-one.jpg')] bg-no-repeat bg-cover lg:h-screen lg:p-20 p-5">
        <div>
          <h1 className={roboto.className + " 2xl:text-9xl lg:text-5xl font-bold text-3xl scale-y-50"}>
            Discover <br /> Collect, & Sell <br />
            <span className="gradien-style">Extraordinary</span>
            <br /> NFTs
          </h1>
          <div className="2xl:-translate-y-20 ">
            <p className="lg:text-xl pb-10">
              The leading NFT Marketplace on Ethereum <br /> Home to the next
              generation of digital creators. <br /> Discover the best NFT
              collections.
            </p>
            <div className="flex flex-wrap gap-5 max-lg:justify-center">
              <ButtonPage text="Explore" link="#" hover={false} />
              <ButtonPage text="Create" link="#" hover={true} />
            </div>
          </div>
        </div>

        <div className="relative max-lg:hidden">

          <div className="absolute 2xl:bottom-40  2xl:-left-36 lg:right-14 lg:bottom-20 2xl:w-[318px] 2xl:h-[93px] lg:w-[278px] lg:h-[93px] rounded-[20px] backdrop-blur-sm z-10 bg-gray-600/30 p-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="2xl:text-xl font-semibold">Total ETH</p>
                <p className="text-white/40">Floor Price : 1.2 ETH</p>
              </div>

              <div>
                <p className="2xl:text-xl font-semibold">12.35 ETH</p>
                <p className="text-[#00FF47]">+12.45 %</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="2xl:w-[379px] 2xl:h-[470px] lg:w-[230px] lg:h-[270px] flex items-center justify-center rounded-[20px] bg-gradient-to-tr from-transparent via-grad1 to-grad2 bg-opacity-50 shadow-lg backdrop-filter backdrop-blur-xl">
              <Image
                width={339}
                height={430}
                src="/images/section-one.jpg"
                alt="section one"
                className="rounded-[20px] 2xl:w-[339px] 2xl:h-[430px] lg:w-full lg:h-full 2xl:p-0 lg:p-3"
              />
            </div>

            <Numbers collection={432} artists={200} community={10} />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-wrap gap-32 justify-center items-center p-20">
        <Image
          width={246}
          height={81}
          src="/images/metamask.png"
          alt="metamask"
        />

        <Image width={258} height={76} src="/images/trust.png" alt="trust" />

        <Image
          width={318}
          height={53}
          src="/images/walletblue.png"
          alt="walletconect"
        />

        <Image width={285} height={56} src="/images/exodus.png" alt="exodus" />

        <Image width={211} height={61} src="/images/safe.png" alt="safe" />
      </section>

      <section className="w-full p-20 bg-[url('/images/background-section-two.jpg')] bg-no-repeat bg-cover">
        <h2
          className={
            roboto.className +
            " lg:text-7xl text-center gradien-style scale-y-50 lg:pt-44 text-3xl"
          }
        >
          Top Collections
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          <ButtonPage text="Art" link="#" hover={false} />
          <ButtonPage text="Collectibles" link="#" hover={true} />
          <ButtonPage text="Metaverse" link="#" hover={true} />
          <ButtonPage text="Virtual Worlds" link="#" hover={true} />
          <ButtonPage text="Sports" link="#" hover={true} />
          <ButtonPage text="Music" link="#" hover={true} />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 p-20">
          {collection.map((data) => (
            <div
              key={data.title}
              className="w-[307px] h-[472px] p-5 rounded-[20px] backdrop-blur-sm bg-gray-600/10"
            >
              <div className="w-[270px] h-[281px] rounded-[20px] overflow-hidden">
                <Image
                  width={270}
                  height={281}
                  src={data.image}
                  alt={data.title}
                  className="rounded-[20px] w-full h-full object-cover scale-[1.1] lg:hover:scale-150 lg:duration-200"
                />
              </div>

              <p className="text-xl font-semibold py-3">{data.title} </p>
              <p className="text-sm text-white/70">{data.text}</p>

              <div className="flex justify-between pt-3">
                <div>
                  <p className="text-xl font-semibold pb-3">{data.eth}</p>
                  <p className="text-sm font-medium">Floor price</p>
                </div>
                <div>
                  <p className="text-xl font-semibold pb-3">{data.dolar}</p>
                  <p
                    className={
                      data.green
                        ? "text-[#24FF00] text-sm font-medium"
                        : "text-[#FF0000] text-sm font-medium"
                    }
                  >
                    {data.porcentage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <ButtonPage text="See more" link="#" hover={true} />
        </div>
      </section>

      <section className="w-full lg:p-20 p-5 overflow-x-hidden">
        <div className="backdrop-blur-sm bg-gray-600/10 rounded-[40px] flex  max-lg:gap-32 max-lg:overflow-hidden flex-wrap justify-between items-center border-y border-white/10 p-5">
          <article className="w-[680px] h-[379px] 2xl:p-20 lg:p-10">
            <h2
              className={
                roboto.className + " text-7xl gradien-style scale-y-50"
              }
            >
              Start selling now
            </h2>

            <p className="pb-5">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              wallets we support.
            </p>

            <ButtonPage text="Enter Marketplace" link="#" hover={false} />
          </article>

          <SliderCard />
        </div>
      </section>
    </>
  );
}
