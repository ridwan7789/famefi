import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play, Sparkles, Shield, Zap, Users, TrendingUp, ArrowRight, X, Check } from "lucide-react";
import CountUp from "react-countup";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import mockupImg from "@/assets/mockup.jpeg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }}>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">{t("hero.title")}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">{t("hero.subtitle")}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-neon text-lg px-8 py-6">{t("hero.launchApp")}</Button>
                <Button className="btn-neon-outline text-lg px-8 py-6">{t("hero.mintClip")}</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative mx-auto w-72 md:w-80">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-50 animate-pulse" />
                <img src={mockupImg} alt="FameFi App" className="relative rounded-3xl shadow-2xl" />
              </div>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                  style={{ top: `${20 + i * 15}%`, left: i % 2 === 0 ? "5%" : "85%" }}
                  animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Play className="w-4 h-4 text-primary-foreground" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is FameFi */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">{t("whatIs.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("whatIs.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: t("whatIs.card1Title"), desc: t("whatIs.card1Desc") },
              { icon: Play, title: t("whatIs.card2Title"), desc: t("whatIs.card2Desc") },
              { icon: Shield, title: t("whatIs.card3Title"), desc: t("whatIs.card3Desc") },
              { icon: Zap, title: t("whatIs.card4Title"), desc: t("whatIs.card4Desc") },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
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
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="font-display text-4xl font-bold text-center mb-16 gradient-text">
            {t("problem.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-card p-8 border-destructive/30">
              <h3 className="font-display text-2xl font-bold mb-6 text-destructive">{t("problem.web2Title")}</h3>
              {[t("problem.web2Point1"), t("problem.web2Point2"), t("problem.web2Point3"), t("problem.web2Point4")].map((p, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="text-foreground/80">{p}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="glass-card p-8 border-primary/30">
              <h3 className="font-display text-2xl font-bold mb-6 gradient-text">{t("problem.web3Title")}</h3>
              {[t("problem.web3Point1"), t("problem.web3Point2"), t("problem.web3Point3"), t("problem.web3Point4")].map((p, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">{p}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Viral Reward */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
            <h2 className="font-display text-4xl font-bold mb-8 gradient-text">{t("reward.title")}</h2>
            <div className="glass-card inline-block p-12 rounded-3xl">
              <div className="font-display text-7xl md:text-8xl font-bold gradient-text mb-2">
                <CountUp end={1500} prefix="$" duration={2.5} enableScrollSpy scrollSpyOnce />
              </div>
              <p className="text-2xl text-muted-foreground">{t("reward.perClip")}</p>
              <p className="text-lg text-primary mt-2">{t("reward.inFame")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
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
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center hover:scale-105 transition-transform"
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
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-4 gradient-text">{t("newsletter.title")}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t("newsletter.subtitle")}</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input placeholder={t("newsletter.placeholder")} className="flex-1 bg-background" />
              <Button className="btn-neon">{t("newsletter.button")}</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">{t("cta.title")}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t("cta.subtitle")}</p>
            <Button className="btn-neon text-lg px-10 py-6">
              {t("hero.launchApp")} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
