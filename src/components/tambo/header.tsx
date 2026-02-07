"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { MarketStatus } from "./market-status";
import { Bell, Wallet } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
    return (
        <header className="w-full h-14 border-b border-border bg-background/90 backdrop-blur-xl sticky top-0 z-50 flex items-center justify-between px-5 transition-all duration-200">
            {/* Left: Logo & Market */}
            <div className="flex items-center gap-5">
                <a href="/" className="flex items-center gap-2.5 group">
                    <div className="w-10 h-6 rounded-sm overflow-hidden transition-transform duration-200 group-hover:scale-105">
                        <img
                            src="/logos/Gemini_Generated_Image_m8vxwvm8vxwvm8vx.svg"
                            alt="ChainChat"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* <span className="text-sm font-semibold tracking-[-0.01em] text-foreground">
                        ChainChat
                    </span> */}
                </a>

                <div className="hidden md:flex items-center">
                    <div className="w-px h-5 bg-border mr-5" />
                    <MarketStatus />
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
                {/* <button className="relative p-2 rounded-lg hover:bg-muted transition-colors group">
                    <Bell className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-primary rounded-full" />
                </button> */}

                <ConnectButton.Custom>
                    {({
                        account,
                        chain,
                        openAccountModal,
                        openChainModal,
                        openConnectModal,
                        authenticationStatus,
                        mounted,
                    }) => {
                        const ready = mounted && authenticationStatus !== "loading";
                        const connected =
                            ready &&
                            account &&
                            chain &&
                            (!authenticationStatus || authenticationStatus === "authenticated");

                        return (
                            <div
                                {...(!ready && {
                                    "aria-hidden": true,
                                    style: {
                                        opacity: 0,
                                        pointerEvents: "none",
                                        userSelect: "none",
                                    },
                                })}
                            >
                                {(() => {
                                    if (!connected) {
                                        return (
                                            <button
                                                onClick={openConnectModal}
                                                type="button"
                                                className="group relative px-4 py-2 bg-primary/10 hover:bg-primary/15 border border-primary/20 hover:border-primary/30 rounded-lg text-sm font-medium text-primary transition-all duration-200 flex items-center gap-2 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                                <Wallet className="w-4 h-4 relative z-10" />
                                                <span className="relative z-10">Connect Wallet</span>
                                            </button>
                                        );
                                    }

                                    if (chain.unsupported) {
                                        return (
                                            <button
                                                onClick={openChainModal}
                                                type="button"
                                                className="px-4 py-2 bg-destructive/10 hover:bg-destructive/15 border border-destructive/20 hover:border-destructive/30 rounded-lg text-sm font-medium text-destructive transition-all duration-200"
                                            >
                                                Wrong network
                                            </button>
                                        );
                                    }

                                    return (
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={openChainModal}
                                                type="button"
                                                className="px-3 py-2 bg-muted hover:bg-accent border border-border rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-1.5"
                                            >
                                                {chain.hasIcon && (
                                                    <div
                                                        className="w-4 h-4 rounded-full overflow-hidden"
                                                        style={{
                                                            background: chain.iconBackground,
                                                        }}
                                                    >
                                                        {chain.iconUrl && (
                                                            <img
                                                                alt={chain.name ?? "Chain icon"}
                                                                src={chain.iconUrl}
                                                                className="w-4 h-4"
                                                            />
                                                        )}
                                                    </div>
                                                )}
                                                <span className="hidden sm:inline">{chain.name}</span>
                                            </button>

                                            <button
                                                onClick={openAccountModal}
                                                type="button"
                                                className="group relative px-4 py-2 bg-card hover:bg-accent border border-border hover:border-primary/30 rounded-lg text-sm font-medium text-foreground transition-all duration-200 flex items-center gap-2.5 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse relative z-10" />
                                                <span className="relative z-10 text-sm font-mono">
                                                    {account.displayName}
                                                </span>
                                                {account.displayBalance && (
                                                    <span className="relative z-10 text-xs text-muted-foreground font-mono hidden sm:inline">
                                                        {account.displayBalance}
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    );
                                })()}
                            </div>
                        );
                    }}
                </ConnectButton.Custom>

                <div className="w-px h-5 bg-border mx-1" />

                <ThemeToggle />
            </div>
        </header>
    );
}
