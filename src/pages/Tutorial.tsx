import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import TutorialPhone from "@/components/TutorialPhone";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Browse Relay Sites",
    description:
      "Open the app and browse the list of nearby relay sites. Filter by distance, availability, and accepted food categories. Each site shows real-time capacity so you know exactly where to go.",
    screen: "home" as const,
    tip: "Use the 'Open Now' filter to see only sites currently accepting deliveries.",
  },
  {
    number: "02",
    title: "View Site Details",
    description:
      "Tap on any relay site to see its full profile: address with map, opening hours, accepted food categories, current capacity level, and ratings from other merchants.",
    screen: "detail" as const,
    tip: "Check the capacity bar — green means plenty of room for your donation.",
  },
  {
    number: "03",
    title: "Schedule a Drop-off",
    description:
      "Select the items you want to donate — bread, vegetables, dairy, or any other unsold food. You can optionally add a photo of your items. Then choose a convenient drop-off time.",
    screen: "deposit" as const,
    tip: "You can add multiple item types in a single drop-off to save time.",
  },
  {
    number: "04",
    title: "Confirmation & Impact",
    description:
      "Once confirmed, you'll receive a summary with all drop-off details. The relay site is automatically notified and will be ready for your arrival. Track your cumulative impact over time.",
    screen: "confirm" as const,
    tip: "Check your monthly stats to see how much food you've saved from waste!",
  },
];

const Tutorial = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-20">
        <div className="container mx-auto px-4 py-16 text-center lg:py-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary font-body mb-6">
              📖 Step-by-Step Guide
            </span>
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              How to Use{" "}
              <span className="text-gradient-primary">ZeroRelay</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground font-body">
              Follow these four simple steps to start donating unsold food and
              making an impact in your community.
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-10 flex justify-center"
            >
              <ArrowDown className="h-6 w-6 text-primary/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32 lg:space-y-36">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col items-center gap-12 lg:gap-20 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-shrink-0">
                  <TutorialPhone screen={step.screen} />
                </div>
                <div
                  className={`flex-1 ${i % 2 === 0 ? "lg:text-left" : "lg:text-right"} text-center`}
                >
                  <span className="font-display text-8xl font-bold text-primary/8">
                    {step.number}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                    {step.title}
                  </h2>
                  <p
                    className={`mt-4 max-w-md text-muted-foreground font-body leading-relaxed ${i % 2 === 0 ? "mx-auto lg:mx-0" : "mx-auto lg:ml-auto lg:mr-0"}`}
                  >
                    {step.description}
                  </p>

                  <div
                    className={`mt-6 inline-flex items-start gap-2 rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 text-left ${i % 2 === 0 ? "" : "lg:ml-auto"}`}
                  >
                    <Leaf className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80 font-body">
                      <strong className="text-primary">Tip:</strong> {step.tip}
                    </span>
                  </div>

                  {i < steps.length - 1 && (
                    <div
                      className={`mt-8 flex items-center gap-2 text-sm font-semibold text-primary font-body ${i % 2 === 0 ? "justify-center lg:justify-start" : "justify-center lg:justify-end"}`}
                    >
                      Next: {steps[i + 1].title}{" "}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              You're All Set!
            </h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/80 font-body">
              Download ZeroRelay and start making a difference today. Every meal
              saved is a step toward zero waste and zero hunger.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-xl bg-background px-7 py-4 text-base font-semibold text-foreground shadow-card transition-all hover:opacity-90 font-body"
              >
                <ArrowRight className="h-4 w-4" />
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

export default Tutorial;
