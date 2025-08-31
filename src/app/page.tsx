import React from "react";
import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";
import exampleImg from "@/assets/demo.png"
// Step component
function Step({ index, title, desc, example }: { index: number; title: string; desc: string; example: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center font-semibold text-indigo-600">{index}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-slate-500">{desc}</div>
        <div className="mt-2 text-xs font-mono text-slate-600 bg-slate-50 p-2 rounded">{example}</div>
      </div>
    </div>
  );
}

// FeatureCard component
function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-slate-100">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-sm text-slate-500 mt-2">{desc}</div>
    </div>
  );
}

// Server Component page
export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Topbar */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-semibold">TP</div>
            <div>
              <div className="font-semibold">TradeProof</div>
              <div className="text-xs text-slate-500 -mt-0.5">Test • Validate • Automate</div>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a className="hidden md:inline-block text-sm text-slate-600 hover:text-slate-900" href="#how">How it works</a>
            <a className="hidden md:inline-block text-sm text-slate-600 hover:text-slate-900" href="#pricing">Pricing</a>
            <a className="hidden md:inline-block text-sm text-slate-600 hover:text-slate-900" href="#vision">Future</a>
            <a href="#waitlist" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">Join Waitlist</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Test your intraday ideas in seconds — no coding, no risk.</h1>
            <p className="mt-4 text-slate-600 max-w-xl">Describe your intraday strategy in plain English and instantly see historical performance: win rate, drawdown, equity curve and expected returns. Know your odds before you risk a rupee.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#waitlist" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">Reserve Early Access</a>
              <a href="#how" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50">See How It Works</a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white shadow-lg overflow-hidden p-4">
              <div className="p-4 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Strategy Preview</div>
                  <div className="text-xs text-slate-400">Demo</div>
                </div>
              </div>
              <div className="p-4">
                <div className="h-48 relative bg-gradient-to-b from-white to-slate-50 rounded-lg p-3">
                  <Image src ={exampleImg} alt="Demo Image" fill
    style={{ objectFit: "cover", borderRadius: "0.5rem" }}/>
                  {/* <svg viewBox="0 0 300 120" className="w-full h-full">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#fb7185" />
                      </linearGradient>
                    </defs>
                    <polyline fill="none" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" points="0,90 30,80 60,60 90,70 120,50 150,45 180,55 210,35 240,30 270,40 300,20" />
                    <circle cx="300" cy="20" r="4" className="animate-[pulse_2s_ease-in-out_infinite]" />
                  </svg> */}
                  <div className="absolute left-4 bottom-3 bg-white/80 px-3 py-1 rounded-md text-xs text-slate-700">Equity curve • 2y</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section id="how" className="mt-20 bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border border-slate-100">
          <h2 className="text-2xl font-bold mb-6">How it works — 3 steps</h2>
          <div className="space-y-6">
            <Step index={1} title="Type your idea" desc="Describe buy/sell rules in plain English — indicators, timeframes, filters." example='"Buy when RSI < 30 and crosses above 200 EMA"' />
            <Step index={2} title="Run backtest" desc="Instant historical performance, equity curve, drawdown, and trade list." example='"Backtest on last 2 years of 5m Bank Nifty"' />
            <Step index={3} title="Decide with data" desc="Know realistic expectations, then trade manually or automate later." example='"Auto alerts or broker execution (coming soon)"' />
          </div>
        </section>

        {/* Feature Cards */}
        <section id="vision" className="mt-12 rounded-2xl p-8 border border-slate-100 bg-gradient-to-b from-white to-slate-50">
          <h3 className="text-2xl font-bold mb-6">Where we are headed</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard title="Strategy Marketplace" desc="Share and buy strategies validated by data. Earn from what you build." />
            <FeatureCard title="Auto Execution" desc="Connect to brokers and run your tested setups with safety controls." />
            <FeatureCard title="Risk Controls" desc="Per-day loss limits, max trades, adjustable position sizing." />
          </div>
        </section>

        {/* Pricing Section */}
        {/* Pricing Section */}
        <section
          id="pricing"
          className="mt-12 rounded-2xl p-8 bg-white border border-slate-100 shadow"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Pricing Plans</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter Plan */}
            <div className="p-6 border rounded-lg shadow-sm flex flex-col">
              <h4 className="text-lg font-semibold mb-4 text-center">Starter</h4>
              <div className="text-2xl font-bold mb-6 text-center">Free</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Test 2 strategies/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Premium features
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> 24*7 support
                </li>
              </ul>
              <a
                href="#waitlist"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-center"
              >
                Join Waitlist
              </a>
            </div>

            {/* Pro Plan */}
            <div className="p-6 border rounded-lg shadow-sm flex flex-col">
              <h4 className="text-lg font-semibold mb-4 text-center">Pro</h4>
              <div className="text-2xl font-bold mb-6 text-center">₹499/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Test 20 strategies/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Enable automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Early access to premium features
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> 24*7 support
                </li>
              </ul>
              <a
                href="#waitlist"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-center"
              >
                Join Waitlist
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="p-6 border rounded-lg shadow-sm flex flex-col">
              <h4 className="text-lg font-semibold mb-4 text-center">Enterprise</h4>
              <div className="text-2xl font-bold mb-6 text-center">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Unlimited strategy testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Advanced & customized analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Full automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> Early access to premium features
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> 24*7 support
                </li>
              </ul>
              <a
                href="#waitlist"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-center"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </section>




        {/* Waitlist Form */}
        <section id="waitlist" className="mt-12 rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-white border border-slate-100 shadow">
          <h3 className="text-lg font-semibold mb-2">Join the waitlist</h3>
          <p className="text-slate-600 mb-4">Get early access and exclusive founding-member pricing.</p>
          <WaitlistForm />
          <p className="mt-3 text-sm text-slate-500">
            Or you can reach out to me directly at{" "}
            <a
              href="mailto:tradeproof47@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              xx@email.com
            </a>
          </p>
        </section>
      </main>

      <footer className="mt-8 text-center text-sm text-slate-500 pb-6">Built by a trader • No hype — just data. © {new Date().getFullYear()} TradeProof</footer>
    </div>
  );
}
