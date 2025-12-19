import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Wallet, Video, TrendingUp, Gift, Check, Sparkles, Users, Shield } from "lucide-react";
import CountUp from "react-countup";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Earn() {
  const { t } = useTranslation();

  const handleWalletConnect = () => {
    window.open("https://phantom.app/", "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 gradient-text">{t("earn.heroTitle")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("earn.heroSubtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Reward Program */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 gradient-text">{t("earn.programTitle")}</h2>
            <p className="text-xl text-muted-foreground">{t("earn.programSubtitle")}</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-12 max-w-3xl mx-auto text-center mb-16">
            <div className="font-display text-6xl md:text-7xl font-bold gradient-text mb-4">
              <CountUp end={1500} prefix="$" duration={2.5} enableScrollSpy scrollSpyOnce />
            </div>
            <p className="text-2xl text-muted-foreground">{t("earn.reward")}</p>
          </motion.div>

          {/* Eligibility */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-8 text-center gradient-text">{t("earn.eligibilityTitle")}</h3>
            <div className="glass-card p-8">
              {[t("earn.criteria1"), t("earn.criteria2"), t("earn.criteria3"), t("earn.criteria4"), t("earn.criteria5")].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 mb-4 last:mb-0"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{c}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="font-display text-4xl font-bold text-center mb-16 gradient-text">
            {t("earn.whyTitle")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, title: t("earn.why1Title"), desc: t("earn.why1Desc") },
              { icon: Users, title: t("earn.why2Title"), desc: t("earn.why2Desc") },
              { icon: Shield, title: t("earn.why3Title"), desc: t("earn.why3Desc") },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
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

      {/* How to Claim */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="font-display text-4xl font-bold text-center mb-16 gradient-text">
            {t("earn.howTitle")}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Video, title: t("earn.step1Title"), desc: t("earn.step1Desc"), step: 1 },
              { icon: TrendingUp, title: t("earn.step2Title"), desc: t("earn.step2Desc"), step: 2 },
              { icon: Sparkles, title: t("earn.step3Title"), desc: t("earn.step3Desc"), step: 3 },
              { icon: Gift, title: t("earn.step4Title"), desc: t("earn.step4Desc"), step: 4 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.15 }}
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
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mt-12">
            <Button onClick={handleWalletConnect} className="btn-neon text-lg px-10 py-6">
              <Wallet className="mr-2 w-5 h-5" /> {t("nav.connectWallet")}
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
