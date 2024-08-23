"use client";
import { createThirdwebClient, defineChain } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";
import { scrollSepoliaTestnet } from "thirdweb/chains";


const Header = () => {
  const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "" });
  const chain = defineChain(534351);
  const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "email",
        "passkey",
      ],
    },
  }),

  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

  return (
 
      <header className="mx-auto py-8 lg:py-6 bg-neutral sticky top-0 z-50">
        <div className="container mx-auto px-8 lg:px-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold uppercase text-primary">
              FlappyQF
            </h1>
          </div>
        <nav className="hidden md:flex gap-4 mx-auto">
          <a
            href="/"
            className="text-white hover:text-primary transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/DetailsPage"
            className="text-white hover:text-primary transition-colors duration-300"
          >
            Details
          </a>
        </nav>
        <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral py-4">
          <div className="container mx-auto flex justify-center space-x-4">
            <a href="/" className="btn btn-primary">
              Home
            </a>
            <a href="/details" className="btn btn-primary">
              Details
            </a>
          </div>
        </footer>
          {/* Put connect button here */}
          <div>
            <ConnectButton
              client={client}
              wallets={wallets}
              connectButton={{ label: "Connect Wallet" }}
              connectModal={{ size: "wide" }}
              accountAbstraction={{
                chain, 
                factoryAddress: "0xCE7b85ADc9913A31eC7610A83e38b7D7eAA18747",
                sponsorGas: true,
              }}
            />
          </div>
        </div>
      </header>

  );
};

export default Header;