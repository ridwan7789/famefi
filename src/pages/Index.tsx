import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sparkles, Shield, Zap, Users, TrendingUp, ArrowRight, X, Check, Code, Map, Coins, HardDrive } from "lucide-react";
import CountUp from "react-countup";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DevelopmentPopup from "@/components/DevelopmentPopup";
import MintClipForm from "@/components/MintClipForm";
import mockupImg from "@/assets/mockup.jpeg";
import facebookLogo from "@/assets/facebook-logo.webp";
import instagramLogo from "@/assets/instagram-logo.jpg";
import XLogo from "@/assets/X-logo.png";
import youtubeLogo from "@/assets/youtube-logo.png";
import tiktokLogo from "@/assets/tiktok-logo.avif";
import { generateSchema, addSchema } from "@/utils/schema";
import { useSEO } from '@/hooks/useSEO';

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

export default function Index() {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMintFormOpen, setIsMintFormOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false); // Wallet connection state

  const handleConnectWallet = () => {
    // Simulate wallet connection
    setIsConnected(true);
    setTimeout(() => {
      setIsConnected(false);
    }, 5000); // Reset after 5 seconds for demo purposes
  };

  // Array of social media logos and their positions
  const socialMediaLogos = [
    { logo: facebookLogo, alt: "Facebook", color: "bg-blue-500" },
    { logo: instagramLogo, alt: "Instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { logo: XLogo, alt: "X", color: "bg-black" },
    { logo: youtubeLogo, alt: "YouTube", color: "bg-red-600" },
    { logo: tiktokLogo, alt: "TikTok", color: "bg-black" },
  ];

  // Update SEO for this page
  useSEO({
    title: "FameFi - Creator Economy Platform | Tokenize & Monetize Content",
    description: "FameFi is a creator-first SocialFi protocol on Solana. Transform viral content into tradeable digital assets and earn rewards.",
    keywords: ["creator economy", "socialfi", "blockchain", "nft", "solana", "digital assets", "content monetization", "dca", "viral content", "web3", "crypto"],
    canonical: "https://www.famefi.pro/",
    ogTitle: "FameFi - Creator Economy Platform",
    ogDescription: "Transform viral content into tradeable digital assets and earn rewards with FameFi's Creator Viral Reward Program.",
    ogImage: "/og-image.jpg",
    ogUrl: "https://www.famefi.pro/",
    ogType: "website",
    ogSiteName: "FameFi",
    twitterCard: "summary_large_image",
    twitterSite: "@famefi",
    twitterCreator: "@famefi",
    author: "FameFi Team",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#6366f1",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FameFi",
      "description": "Creator-first SocialFi protocol on Solana that transforms viral content into tradeable digital assets",
      "url": "https://www.famefi.pro/",
      "logo": "https://www.famefi.pro/logo.png",
      "sameAs": [
        "https://twitter.com/famefi",
        "https://instagram.com/famefi",
        "https://tiktok.com/@famefi"
      ],
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "FameFi Team"
        }
      ],
      "numberOfEmployees": "10-50",
      "areaServed": "Worldwide",
      "serviceType": "Blockchain Platform, SocialFi, Creator Economy",
      "knowsLanguage": ["en", "es", "zh", "ko"]
    }
  });

  useEffect(() => {
    // Add schema markup for the homepage
    const webSchema = generateSchema('WebSite', {
      title: 'FameFi - Creator Economy Platform | Tokenize & Monetize Content',
      description: 'FameFi is a creator-first SocialFi protocol on Solana. Transform viral content into tradeable digital assets and earn rewards.',
      url: 'https://www.famefi.pro/',
    });
    addSchema(webSchema);

    // Add software application schema
    const appSchema = generateSchema('SoftwareApplication', {});
    addSchema(appSchema);

    // Add FAQ schema with detailed questions
    const faqSchema = generateSchema('FAQPage', {
      questions: [
        {
          '@type': 'Question',
          name: 'What is FameFi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FameFi is a creator-first SocialFi protocol built on Solana that empowers creators with on-chain ownership and fair monetization.'
          }
        },
        {
          '@type': 'Question',
          name: 'How does FameFi work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FameFi allows creators to turn their viral content into tradeable on-chain assets called Digital Clip Assets (DCA) and earn rewards through the Creator Viral Reward Program.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is a Digital Clip Asset (DCA)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Digital Clip Asset (DCA) is a unique NFT representing your viral content that can be minted on FameFi and traded in our marketplace.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I earn rewards with FameFi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can earn rewards by creating viral content that meets our criteria (10k+ views), minting it as a DCA, and participating in our Creator Viral Reward Program.'
          }
        },
        {
          '@type': 'Question',
          name: 'Which blockchain does FameFi use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FameFi is built on Solana for its scalability and low transaction fees, making it accessible for all creators.'
          }
        }
      ]
    });
    addSchema(faqSchema);

    // Add breadcrumb schema
    const breadcrumbSchema = generateSchema('BreadcrumbList', {
      items: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.famefi.pro/'
        }
      ]
    });
    addSchema(breadcrumbSchema);
  }, []);

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
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6" itemProp="headline">
                <span className="gradient-text">{t("hero.title")}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg" itemProp="description">{t("hero.subtitle")}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="btn-neon-outline text-lg px-8 py-6"
                  onClick={() => setIsMintFormOpen(true)}
                >
                  {t("hero.mintClip")}
                </Button>
                <Button
                  className="btn-neon text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  onClick={() => setIsPopupOpen(true)}
                >
                  Launch App
                </Button>
                <Button
                  className="btn-neon text-lg px-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  onClick={() => window.open('https://pump.fun/coin/CKbjhzQk7bp4QM7ddBjjQo9qUhDP1J7jyXZUtKRCpump', '_blank')}
                >
                  BUY on Pump.fun
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative mx-auto w-72 md:w-80">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-50 animate-pulse" />
                <img
                  src={mockupImg}
                  alt="FameFi App - Creator Economy Platform"
                  className="relative rounded-3xl shadow-2xl"
                  itemProp="image"
                />
              </div>
              {socialMediaLogos.map((media, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-lg"
                  style={{ top: `${20 + i * 15}%`, left: i % 2 === 0 ? "5%" : "85%" }}
                  animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <img
                    src={media.logo}
                    alt={media.alt}
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development popup */}
      <DevelopmentPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* Mint Clip Form */}
      <MintClipForm
        isOpen={isMintFormOpen}
        onClose={() => setIsMintFormOpen(false)}
        onConnectWallet={handleConnectWallet}
        isConnected={isConnected}
      />

      {/* What is FameFi */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">{t("whatIs.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("whatIs.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: t("whatIs.card1Title"), desc: t("whatIs.card1Desc") },
              { icon: X, title: t("whatIs.card2Title"), desc: t("whatIs.card2Desc") },
              { icon: Shield, title: t("whatIs.card3Title"), desc: t("whatIs.card3Desc") },
              { icon: Zap, title: t("whatIs.card4Title"), desc: t("whatIs.card4Desc") },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Solution */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-display text-4xl font-bold text-center mb-16 gradient-text"
          >
            {t("problem.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="glass-card p-8 border-destructive/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-destructive">{t("problem.web2Title")}</h3>
              {[t("problem.web2Point1"), t("problem.web2Point2"), t("problem.web2Point3"), t("problem.web2Point4")].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-center gap-3 mb-3"
                >
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-foreground/80">{p}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 border-primary/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="font-display text-2xl font-bold mb-6 gradient-text">{t("problem.web3Title")}</h3>
              {[t("problem.web3Point1"), t("problem.web3Point2"), t("problem.web3Point3"), t("problem.web3Point4")].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-center gap-3 mb-3"
                >
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">{p}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">Technology Stack</h2>
            <p className="text-xl text-muted-foreground mb-8">FameFi is built on Solana for its scalability and low fees.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="font-display text-2xl font-bold mb-6 gradient-text">Core Infrastructure</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Solana smart contracts</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Web3 wallet integration</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>IPFS / Arweave for content storage</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>On-chain metadata & analytics</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Real-time engagement tracking</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">Roadmap</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Phase 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <span className="font-display font-bold text-xl text-primary-foreground">1</span>
                </div>
                <h3 className="font-display text-2xl font-bold gradient-text">Phase 1</h3>
              </div>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Launch on Pumpfun</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>DCA minting</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Creator Viral Reward Program</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <span className="font-display font-bold text-xl text-primary-foreground">2</span>
                </div>
                <h3 className="font-display text-2xl font-bold gradient-text">Phase 2</h3>
              </div>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>DCA marketplace</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Analytics dashboard</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Brand integrations</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <span className="font-display font-bold text-xl text-primary-foreground">3</span>
                </div>
                <h3 className="font-display text-2xl font-bold gradient-text">Phase 3</h3>
              </div>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>DAO governance</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Advanced monetization tools</span>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Global creator expansion</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">FameFi Tokenomics</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="glass-card p-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <h3 className="font-display text-xl font-bold mb-4 gradient-text">Token Information</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Token Name:</span>
                      <span className="font-medium">FameFi</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Symbol:</span>
                      <span className="font-medium">$FAME</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Blockchain:</span>
                      <span className="font-medium">Solana</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Total Supply:</span>
                      <span className="font-medium">1,000,000,000 $FAME (Fixed Supply)</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="font-display text-xl font-bold mb-4 gradient-text">Token Utility</h3>
                  <ul className="space-y-2">
                    <motion.li
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>DCA minting fees</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Marketplace trading fees</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Creator rewards</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Staking and incentives</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Governance voting</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Brand campaign payments</span>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="font-display text-2xl font-bold mb-6 gradient-text">Token Allocation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { percent: "35%", label: "Creator & Community Rewards", icon: Coins },
                    { percent: "15%", label: "Ecosystem & Growth Fund", icon: Coins },
                    { percent: "15%", label: "Team & Core Contributors", icon: Coins },
                    { percent: "10%", label: "Investors (Seed & Private)", icon: Coins },
                    { percent: "10%", label: "Public Sale", icon: Coins },
                    { percent: "10%", label: "Liquidity & Market Making", icon: Coins },
                    { percent: "5%", label: "DAO Treasury", icon: Coins }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="glass-card p-4 flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -8 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-3">
                        <item.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-lg">{item.percent}</h4>
                      <p className="text-sm text-center text-muted-foreground">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h4 className="font-display text-xl font-bold mb-4 gradient-text">Deflation Mechanism</h4>
                  <ul className="space-y-3">
                    <motion.li
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>20–30% of marketplace fees are burned</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Premium mints and brand campaigns contribute to burns</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>This creates long-term value accrual for token holders</span>
                    </motion.li>
                  </ul>
                </motion.div>
                <motion.div
                  className="glass-card p-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h4 className="font-display text-xl font-bold mb-4 gradient-text">Emission Schedule</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 text-muted-foreground">Year</th>
                          <th className="text-left py-2 text-muted-foreground">Emission</th>
                        </tr>
                      </thead>
                      <tbody>
                        <motion.tr
                          className="border-b border-border"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ delay: 0.5, duration: 0.4 }}
                        >
                          <td className="py-2">Year 1</td>
                          <td className="py-2">30%</td>
                        </motion.tr>
                        <motion.tr
                          className="border-b border-border"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ delay: 0.6, duration: 0.4 }}
                        >
                          <td className="py-2">Year 2</td>
                          <td className="py-2">25%</td>
                        </motion.tr>
                        <motion.tr
                          className="border-b border-border"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ delay: 0.7, duration: 0.4 }}
                        >
                          <td className="py-2">Year 3</td>
                          <td className="py-2">20%</td>
                        </motion.tr>
                        <motion.tr
                          className="border-b border-border"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ delay: 0.8, duration: 0.4 }}
                        >
                          <td className="py-2">Year 4</td>
                          <td className="py-2">15%</td>
                        </motion.tr>
                        <motion.tr
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ delay: 0.9, duration: 0.4 }}
                        >
                          <td className="py-2">Year 5+</td>
                          <td className="py-2">10%</td>
                        </motion.tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Viral Reward */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="font-display text-4xl font-bold mb-8 gradient-text">{t("reward.title")}</h2>
            <motion.div
              className="glass-card inline-block p-12 rounded-3xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="font-display text-7xl md:text-8xl font-bold gradient-text mb-2">
                <CountUp end={20000} prefix="$" duration={2.5} enableScrollSpy scrollSpyOnce />
              </div>
              <p className="text-2xl text-muted-foreground">{t("reward.totalProgram")}</p>
              <p className="text-lg text-primary mt-2">{t("reward.inFame")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4 gradient-text">{t("ecosystem.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("ecosystem.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Users, label: t("ecosystem.creators") },
              { icon: Sparkles, label: t("ecosystem.collectors") },
              { icon: Users, label: t("ecosystem.communities") },
              { icon: TrendingUp, label: t("ecosystem.brands") },
              { icon: TrendingUp, label: t("ecosystem.investors") },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="glass-card p-6 text-center hover:scale-105 transition-transform"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted/30" aria-labelledby="newsletter-title">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl font-bold mb-4 gradient-text" id="newsletter-title">{t("newsletter.title")}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t("newsletter.subtitle")}</p>
            <div className="flex gap-4 max-w-md mx-auto" role="group" aria-labelledby="newsletter-title">
              <Input
                placeholder={t("newsletter.placeholder")}
                className="flex-1 bg-background"
                aria-label="Email address for newsletter subscription"
              />
              <Button className="btn-neon" aria-describedby="newsletter-title">{t("newsletter.button")}</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text" id="cta-title">{t("cta.title")}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t("cta.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
