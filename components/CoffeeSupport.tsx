"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import FAB from "@/components/FAB";
import ProtectedImage from "@/components/ProtectedImage";
import Head from "next/head";
import { useEffect } from "react";

const wallets = [
  {
    name: "Tether USD",
    symbol: "USDT",
    network: "BEP20",
    address: "0xbD9e74E4c2d1EDF04b9C7B3556a6042E8f6c80D2",
    icon: "cryptocurrency:usdt",
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    network: "BEP20",
    address: "0xbD9e74E4c2d1EDF04b9C7B3556a6042E8f6c80D2",
    icon: "cryptocurrency:bnb",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    network: "Bitcoin",
    address: "1NCyeZLKuNMPmjPnWL4UUHCPRVG9pSdXFX",
    icon: "cryptocurrency:btc",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    network: "ERC20",
    address: "0xbD9e74E4c2d1EDF04b9C7B3556a6042E8f6c80D2",
    icon: "cryptocurrency:eth",
  },
  {
    name: "Solana",
    symbol: "SOL",
    network: "Solana",
    address: "EE7BE4gPwfVNmt6K6Q61VLXzMBPXpfumrazcVKvi9EGb",
    icon: "cryptocurrency:sol",
  },
  {
    name: "Sui",
    symbol: "SUI",
    network: "Sui",
    address:
      "0x8beee506c5e18da8676d51cf5c93fb11bd23ad3ec2588520012029e2ea3a5880",
    icon: "mdi:water",
  },
  {
    name: "TRON",
    symbol: "TRX",
    network: "Tron",
    address: "TK5VaxjBLmR1xYBsQ1UMTCbfC4mwjXJCzL",
    icon: "cryptocurrency:trx",
  },
];

const CoffeeSupport = () => {
  const [selected, setSelected] = useState(wallets[0]);
  const [copied, setCopied] = useState(false);
  const [connecting, setConnecting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConnecting(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleWalletChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const wallet = wallets.find((w) => w.symbol === e.target.value);
    if (wallet && wallet.symbol !== selected.symbol) {
      setConnecting(true);
      setTimeout(() => {
        setSelected(wallet);
        setConnecting(false);
      }, 500);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selected.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('/background/bg-white.png')] px-4 sm:px-6 lg:px-8">
      {/* Title Page */}
      <Head>
        <title>GeekTakon</title>
      </Head>

      {/* Floating Action Button */}
      <FAB text="Back" icon="mdi:arrow-left" route="/" />

      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Wallet Detail */}
        <div>
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EEEEEE] mb-2">
              Support this project ☕
            </h1>
            <p className="text-[#BBBBBB] text-sm sm:text-base">
              Choose your preferred cryptocurrency
            </p>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <select
                id="wallet"
                value={selected.symbol}
                onChange={handleWalletChange}
                disabled={connecting}
                className="w-full bg-white/5 backdrop-blur-sm text-[#EEEEEE] p-4 sm:p-5 rounded-full border border-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-300 appearance-none cursor-pointer text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {wallets.map((w) => (
                  <option
                    key={w.symbol}
                    value={w.symbol}
                    className="bg-[#171717] text-white/90"
                  >
                    {w.name} ({w.network})
                  </option>
                ))}
              </select>
              <Icon
                icon="mdi:chevron-down"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BBBBBB] pointer-events-none text-xl"
              />
            </div>

            {/* Connecting Animation Overlay */}
            {connecting && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 text-center">
                  <div className="flex justify-center mb-4">
                    <Icon
                      icon="mdi:loading"
                      className="text-4xl text-[#EEEEEE] animate-spin"
                    />
                  </div>
                  <p className="text-[#EEEEEE] font-medium mb-2">
                    Connecting to wallet...
                  </p>
                  <div className="flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-[#EEEEEE] rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-[#EEEEEE] rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-[#EEEEEE] rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div
              className={`bg-white/5 backdrop-blur-sm p-6 sm:p-7 rounded-3xl border border-white/15 transition-all duration-300 hover:bg-white/10 relative ${connecting ? "opacity-50" : ""}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon
                    icon={selected.icon}
                    className="text-2xl sm:text-3xl text-[#EEEEEE]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#EEEEEE] text-lg sm:text-xl mb-1">
                    {selected.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#BBBBBB] font-medium">
                    {selected.network}
                  </p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-[#BBBBBB] mb-2 font-medium">
                      Wallet Address
                    </p>
                    <code className="text-xs sm:text-sm break-all text-[#EEEEEE] font-mono leading-relaxed block">
                      {selected.address}
                    </code>
                  </div>
                  <button
                    onClick={handleCopy}
                    disabled={connecting}
                    className="flex-shrink-0 w-12 h-12 rounded-xl transition-all duration-300 bg-[#EEEEEE] text-[#171717] hover:bg-white hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Icon
                      icon={copied ? "mdi:check" : "mdi:content-copy"}
                      className="text-lg"
                    />
                  </button>
                </div>
              </div>

              {copied && (
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-[#90EE90]/20 backdrop-blur-sm text-[#90EE90] px-4 py-2 rounded-full text-sm font-medium">
                    <Icon icon="mdi:check-circle" className="text-base" />
                    Address copied successfully!
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-[#BBBBBB]/70">
              Your support helps keep this project running
            </p>
          </div>
        </div>

        {/* Bird Logo */}
        <div className="flex justify-center">
          <ProtectedImage src="/logo.svg" alt="logo" className="h-24 mt-5" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeSupport;
