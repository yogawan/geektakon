"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import FAB from "@/components/FAB";

const wallets = [
	{
		name: "Binance Coin",
		symbol: "BNB",
		network: "BEP20",
		address: "0xExampleBNBAddress09876abcdef",
		icon: "cryptocurrency:bnb",
	},
	{
		name: "Bitcoin",
		symbol: "BTC",
		network: "Bitcoin (Native)",
		address: "bc1qexamplebtcaddress12345",
		icon: "cryptocurrency:btc",
	},
	{
		name: "Ethereum",
		symbol: "ETH",
		network: "ERC20",
		address: "0xExampleEthereumAddress6789abcdef",
		icon: "cryptocurrency:eth",
	},
	{
		name: "Solana",
		symbol: "SOL",
		network: "SPL",
		address: "SoLanaExAmPlEaDdReSs123456789",
		icon: "cryptocurrency:sol",
	},
	{
		name: "Sui",
		symbol: "SUI",
		network: "SUI (Native)",
		address: "0xExampleSuiAddressabcdef123456",
		icon: "mdi:water",
	},
];

const CoffeePage = () => {
	const [selected, setSelected] = useState(wallets[0]);
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(selected.address);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="min-h-screen flex justify-center items-center bg-[url('/background/bg-white.png')]">
            <FAB text="Back" icon="mdi:arrow-left" route="/" />
			<div className="p-6 rounded-4xl shadow-lg w-full max-w-md bg-transparent border border-white/15">
                <p className="text-center m-5">!!! Under Development !!!</p>
				<h1 className="text-2xl font-bold text-center mb-6 text-[#EEEEEE]">
					☕ Support this project
				</h1>
				<div className="mb-6">
					<select
						id="wallet"
						value={selected.symbol}
						onChange={(e) => {
							const wallet = wallets.find(
								(w) => w.symbol === e.target.value
							);
							if (wallet) setSelected(wallet);
						}}
						className="w-full bg-transparent text-white/50  p-5 rounded-full border border-white/15 focus:outline-none"
					>
						{wallets.map((w) => (
							<option
								key={w.symbol}
								value={w.symbol}
								className="bg-[#171717] text-white/50"
							>
								{w.name} ({w.network})
							</option>
						))}
					</select>
				</div>
				<div className="p-5 rounded-3xl border border-white/15">
					<div className="flex items-center gap-3 mb-3">
						<Icon
							icon={selected.icon}
							className="text-3xl text-[#EEEEEE]"
						/>
						<div>
							<p className="font-semibold text-[#EEEEEE]">
								{selected.name}
							</p>
							<p className="text-sm text-[#BBBBBB]">
								{selected.network}
							</p>
						</div>
					</div>
					<div className="flex items-center justify-between px-3 py-2 rounded-full">
						<code className="text-sm break-words text-[#EEEEEE]">
							{selected.address}
						</code>
						<button
							onClick={handleCopy}
							className="ml-2 p-2 rounded-lg transition bg-[#EEEEEE] text-[#171717]"
						>
							<Icon
								icon={
									copied
										? "mdi:check"
										: "mdi:content-copy"
								}
							/>
						</button>
					</div>
					{copied && (
						<p className="text-center text-xs mt-2 text-[#90EE90]">
							Address copied!
						</p>
					)}
				</div>
                <p className="text-center m-5">!!! Under Development !!!</p>
			</div>
		</div>
	);
};

export default CoffeePage;
