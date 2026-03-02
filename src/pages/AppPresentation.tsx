import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Bell,
  Globe,
  MapPin,
  Store,
  Smartphone,
} from "lucide-react";
import TutorialPhone from "@/components/TutorialPhone";
import PhoneMockup from "@/components/PhoneMockup";
import heroBg from "@/assets/hero-bg.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const features = [
  {
    icon: MapPin,
    title: "Find Relay Sites",
    description:
      "Browse a curated list of verified relay sites near you. Filter by distance, capacity, and accepted food categories.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Safe",
    description:
      "Every relay site is vetted and certified for safe food handling, so you can donate with confidence.",
  },
  {
    icon: BarChart3,
    title: "Impact Dashboard",
    description:
      "Track your contributions in real-time. See how many meals you've helped redistribute and waste you've prevented.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get alerted when nearby sites have high capacity or when there's urgent need for specific food categories.",
  },
  {
    icon: Store,
    title: "Merchant Tools",
    description:
      "Schedule drop-offs, manage recurring donations, and keep a full history of your contributions.",
  },
  {
    icon: Globe,
    title: "Growing Network",
    description:
      "Join a rapidly expanding community of merchants and relay sites working together for zero waste.",
  },
];

const AppPresentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with phone */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/95 to-background" />
        </div>

        <div className="container relative z-10 mx-auto flex flex-col items-center gap-12 px-4 py-16 lg:flex-row lg:gap-20 lg:py-24">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary font-body mb-6">
              <Smartphone className="h-4 w-4" /> The Mobile App
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Your Food Donation{" "}
              <span className="text-gradient-primary">Hub</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground font-body">
              ZeroRelay gives merchants a simple, powerful tool to find nearby
              relay sites, schedule food drop-offs, and track their impact — all
              from their phone.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-card transition-all hover:opacity-90 font-body"
              >
                Explore Features <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/tutorial"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground shadow-soft transition-all hover:bg-muted font-body"
              >
                View Tutorial
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "30s", label: "To Schedule a Drop-off" },
              { value: "50+", label: "Relay Sites Available" },
              { value: "24/7", label: "Real-time Updates" },
              { value: "Free", label: "For All Merchants" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-background p-6 text-center shadow-soft"
              >
                <span className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-xs text-muted-foreground font-body sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24" id="features">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-medium text-secondary font-body mb-4">
              Features
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Everything Merchants Need
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground font-body">
              Designed to make food donation effortless, transparent, and
              impactful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-card hover:border-primary/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <feat.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary font-body mb-4">
              How It Looks
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Designed for Simplicity
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground font-body">
              A clean, intuitive interface that lets you focus on what matters —
              reducing waste and feeding communities.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {(["home", "detail", "deposit", "confirm"] as const).map(
              (screen, i) => (
                <motion.div
                  key={screen}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-3">
                    <ScreenLabel screen={screen} />
                  </div>
                  <div className="transform transition-transform hover:scale-105">
                    <SmallPhone screen={screen} />
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Start Using ZeroRelay Today
            </h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/80 font-body">
              Download the app and join merchants making a real difference in
              their community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/tutorial"
                className="inline-flex items-center gap-2 rounded-xl bg-background px-7 py-4 text-base font-semibold text-foreground shadow-card transition-all hover:opacity-90 font-body"
              >
                View Tutorial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-7 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 font-body"
              >
                Learn the Concept
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ScreenLabel = ({ screen }: { screen: string }) => {
  const labels: Record<string, string> = {
    home: "Browse Sites",
    detail: "Site Details",
    deposit: "New Drop-off",
    confirm: "Confirmation",
  };
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary font-body">
      {labels[screen]}
    </span>
  );
};

const SmallPhone = ({
  screen,
}: {
  screen: "home" | "detail" | "deposit" | "confirm";
}) => {
  return (
    <div className="transform scale-[0.85] origin-top">
      <TutorialPhone screen={screen} />
    </div>
  );
};

export default AppPresentation;
