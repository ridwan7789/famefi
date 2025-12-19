import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Wallet, Video, TrendingUp, Gift, Check, Sparkles, Users, Shield } from "lucide-react";
import CountUp from "react-countup";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" }
};

export default function HowItWorks() {
  const { t } = useTranslation();

  const handleWalletConnect = () => {
    window.open("https://phantom.app/", "_blank");
  };

  return (
    <motion.div
      className="min-h-screen bg-background overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={pageTransition.transition}
    >
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={new URL('@/assets/fameclips.mp4', import.meta.url).href} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background via-background/30"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 gradient-text">How It Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A step-by-step guide to creating, minting, and earning with your digital content</p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4 gradient-text">The FameFi Process</h2>
            <p className="text-xl text-muted-foreground">Transform your content into on-chain assets and earn rewards</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass-card p-12 max-w-3xl mx-auto text-center mb-16"
          >
            <div className="font-display text-6xl md:text-7xl font-bold gradient-text mb-4">
              <CountUp end={20000} prefix="$" duration={2.5} enableScrollSpy scrollSpyOnce />
            </div>
            <p className="text-2xl text-muted-foreground">Total Creator Viral Reward Program</p>
            <p className="text-lg text-primary mt-2">in $FAME tokens</p>
          </motion.div>

          {/* Steps to Get Started */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-2xl mx-auto"
          >
            <h3 className="font-display text-2xl font-bold mb-8 text-center gradient-text">Getting Started</h3>
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {[
                "Connect your Web3 wallet to FameFi",
                "Create content that features or references FameFi",
                "Post your content on TikTok, X, Instagram, or YouTube Shorts",
                "Achieve viral status (minimum 10,000 views)",
                "Mint your content as a Digital Clip Asset (DCA)"
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 mb-4 last:mb-0"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{step}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-display text-4xl font-bold text-center mb-16 gradient-text"
          >
            Why This Matters
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, title: "Real Social Impact", desc: "Your creativity drives real value and real rewards" },
              { icon: Users, title: "No Middlemen", desc: "Direct rewards without platform fees eating your earnings" },
              { icon: Shield, title: "On-Chain Verification", desc: "Transparent, verifiable reward distribution" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-display text-4xl font-bold text-center mb-16 gradient-text"
          >
            Step-by-Step Guide
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              { icon: Video, title: "Create Content", desc: "Make viral content featuring FameFi", step: 1 },
              { icon: TrendingUp, title: "Go Viral", desc: "Hit 10,000+ views and verified viral status", step: 2 },
              { icon: Sparkles, title: "Mint Your DCA", desc: "Mint your content as a Digital Clip Asset", step: 3 },
              { icon: Gift, title: "Claim Rewards", desc: "Connect wallet and claim your $FAME tokens", step: 4 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-6 relative"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center font-display font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 mt-2">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            whileHover={{ scale: 1.03 }}
            className="text-center mt-12"
          >
            <Button onClick={handleWalletConnect} className="btn-neon text-lg px-10 py-6">
              <Wallet className="mr-2 w-5 h-5" /> Connect Wallet
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
