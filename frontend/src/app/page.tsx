
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-background flex flex-col">
      {/* Header with logo */}
      <header className="w-full flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="inline-block w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center text-background font-extrabold text-2xl shadow-lg">F</span>
          <span className="text-2xl font-bold text-primary-dark tracking-tight">Farmundo</span>
        </div>
        <nav className="hidden md:flex gap-8 text-foreground/80 font-medium">
          <a href="#features" className="hover:text-primary-dark transition-colors">Features</a>
          <a href="#pricing" className="hover:text-primary-dark transition-colors">Pricing</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <section className="max-w-2xl w-full text-center flex flex-col items-center gap-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-primary-dark drop-shadow-lg">
            Empowering Farmers & Buyers
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/90 font-medium max-w-xl mx-auto">
            Join <span className="text-primary font-bold">Farmundo</span> to connect, trade, and grow. Buy or sell fresh farm products directly and transparently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
            <a
              href="#subscribe-farmer"
              className="flex-1 rounded-full bg-primary text-background font-semibold py-3 px-8 shadow-lg hover:bg-primary-dark transition-colors text-lg border-2 border-primary-dark"
            >
              I am a Farmer
            </a>
            <a
              href="#subscribe-buyer"
              className="flex-1 rounded-full bg-accent text-foreground font-semibold py-3 px-8 shadow-lg hover:bg-accent-dark transition-colors text-lg border-2 border-accent-dark"
            >
              I am a Buyer
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-2 text-foreground/70 text-sm">
            <span>Choose your subscription and unlock exclusive features.</span>
            <span className="italic">Empowering local agriculture, one connection at a time.</span>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-5xl w-full mx-auto mt-24 mb-12">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-4">🌱</span>
              <h3 className="font-bold text-lg mb-2 text-primary-dark">Direct Marketplace</h3>
              <p className="text-foreground/80 text-center">Connect directly with buyers or farmers. No middlemen, just fresh products and fair prices.</p>
            </div>
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-4">📦</span>
              <h3 className="font-bold text-lg mb-2 text-primary-dark">Easy Logistics</h3>
              <p className="text-foreground/80 text-center">Integrated delivery options and order tracking for a seamless experience.</p>
            </div>
            <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-4">🔒</span>
              <h3 className="font-bold text-lg mb-2 text-primary-dark">Secure Payments</h3>
              <p className="text-foreground/80 text-center">Safe and fast transactions with multiple payment methods supported.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-5xl w-full mx-auto mt-12 mb-24">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-primary/30">
              <h3 className="text-xl font-bold text-primary-dark mb-2">Basic</h3>
              <div className="text-4xl font-extrabold text-primary mb-2">Free</div>
              <ul className="text-foreground/80 text-sm mb-6 space-y-2 text-center">
                <li>✔️ List up to 5 products</li>
                <li>✔️ Access to marketplace</li>
                <li>✔️ Basic support</li>
              </ul>
              <button className="rounded-full bg-primary text-background font-semibold py-2 px-6 shadow hover:bg-primary-dark transition-colors">Get Started</button>
            </div>
            {/* Standard Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-4 border-accent">
              <h3 className="text-xl font-bold text-accent-dark mb-2">Standard</h3>
              <div className="text-4xl font-extrabold text-accent mb-2">$9<span className="text-lg font-normal">/mo</span></div>
              <ul className="text-foreground/80 text-sm mb-6 space-y-2 text-center">
                <li>✔️ List up to 50 products</li>
                <li>✔️ Priority support</li>
                <li>✔️ Access to analytics</li>
                <li>✔️ Featured in search</li>
              </ul>
              <button className="rounded-full bg-accent text-foreground font-semibold py-2 px-6 shadow hover:bg-accent-dark transition-colors">Start Standard</button>
            </div>
            {/* Premium Plan */}
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-primary-dark">
              <h3 className="text-xl font-bold text-primary-dark mb-2">Premium</h3>
              <div className="text-4xl font-extrabold text-primary-dark mb-2">$29<span className="text-lg font-normal">/mo</span></div>
              <ul className="text-foreground/80 text-sm mb-6 space-y-2 text-center">
                <li>✔️ Unlimited products</li>
                <li>✔️ Dedicated account manager</li>
                <li>✔️ Advanced analytics</li>
                <li>✔️ Early access to new features</li>
              </ul>
              <button className="rounded-full bg-primary-dark text-background font-semibold py-2 px-6 shadow hover:bg-primary transition-colors">Go Premium</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-foreground/60 text-sm bg-background/80 border-t border-foreground/10 mt-auto">
        &copy; {new Date().getFullYear()} Farmundo. All rights reserved.
      </footer>
    </div>
  );
}
