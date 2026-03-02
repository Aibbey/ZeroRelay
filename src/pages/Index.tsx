import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  Recycle,
  Heart,
  AlertTriangle,
  TrendingDown,
  Users,
  Globe,
} from "lucide-react";
import conceptHero from "@/assets/concept-hero.png";
import foodWaste from "@/assets/food-waste.png";
import communityShare from "@/assets/community-share.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative min-h-[90vh] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={conceptHero}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        </div>
        <div className="container relative z-10 mx-auto flex min-h-[80vh] items-center px-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary font-body">
                <Leaf className="h-4 w-4" /> Zero Waste · Zero Hunger
              </span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
              Every Meal <span className="text-gradient-primary">Deserves</span>{" "}
              a Second Chance
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground font-body">
              1.3 billion tonnes of food are wasted every year while 828 million
              people go hungry. ZeroRelay bridges the gap between merchants with
              surplus food and communities in need.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-card transition-all hover:opacity-90 font-body"
              >
                Discover the App <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/tutorial"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-7 py-4 text-base font-semibold text-foreground shadow-soft transition-all hover:bg-card font-body backdrop-blur-sm"
              >
                How to Start
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="inline-block rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive font-body mb-4">
              The Problem
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              A World of Waste & Hunger
            </h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <img
                src={foodWaste}
                alt="Food waste in trash"
                className="w-full rounded-3xl shadow-elevated object-cover aspect-square"
              />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-8">
              {[
                {
                  icon: AlertTriangle,
                  title: "1/3 of All Food Produced is Wasted",
                  desc: "Globally, about 1.3 billion tonnes of food are lost or wasted every year. That's enough to feed 2 billion people.",
                  color: "text-destructive bg-destructive/10",
                },
                {
                  icon: TrendingDown,
                  title: "828 Million People Go Hungry",
                  desc: "While food fills our landfills, hundreds of millions of people around the world don't have enough to eat.",
                  color: "text-secondary bg-secondary/15",
                },
                {
                  icon: Globe,
                  title: "8% of Greenhouse Gas Emissions",
                  desc: "Food waste in landfills generates methane, contributing significantly to climate change and environmental destruction.",
                  color: "text-primary bg-primary/10",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground font-body">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary font-body mb-4">
              Our Solution
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              The ZeroRelay Concept
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground font-body">
              A simple, powerful idea: connect merchants who have unsold food
              with local relay sites that redistribute it to people in need.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Recycle,
                title: "Merchants",
                desc: "Local shops, bakeries, restaurants, and supermarkets register their unsold but perfectly edible food at the end of each day.",
                color: "bg-primary",
              },
              {
                icon: Heart,
                title: "Relay Sites",
                desc: "Verified community centers, food banks, and charities receive, sort, and safely store donated food for immediate redistribution.",
                color: "bg-secondary",
              },
              {
                icon: Users,
                title: "Communities",
                desc: "Families and individuals in need access fresh, quality food for free — reducing hunger and building stronger, healthier communities.",
                color: "bg-primary",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center rounded-3xl bg-background p-8 text-center shadow-card"
              >
                {i < 2 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 sm:block">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} shadow-soft`}
                >
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-medium text-secondary font-body mb-4">
                Impact
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Building a World Without Waste or Hunger
              </h2>
              <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                Every donation through ZeroRelay creates a ripple effect — less
                waste in landfills, fewer greenhouse gas emissions, and more
                nutritious meals for those who need them most.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "10K+", label: "Meals Saved" },
                  { value: "500+", label: "Active Merchants" },
                  { value: "50+", label: "Relay Sites" },
                  { value: "0%", label: "Waste Goal" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-card p-5 shadow-soft"
                  >
                    <span className="font-display text-2xl font-bold text-primary">
                      {stat.value}
                    </span>
                    <p className="mt-1 text-xs text-muted-foreground font-body">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/app"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary font-body hover:underline"
              >
                See how the app works <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <img
                src={communityShare}
                alt="Community food distribution"
                className="w-full rounded-3xl shadow-elevated object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/80 font-body">
              Join the movement. Download ZeroRelay and start turning your
              surplus into hope.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/tutorial"
                className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 px-7 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 font-body"
              >
                View Tutorial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
