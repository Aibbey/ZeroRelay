import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Package,
  ChevronRight,
  Star,
  Navigation,
} from "lucide-react";

const relaySites = [
  {
    id: 1,
    name: "Green Bridge Center",
    address: "12 Oak Street, Downtown",
    distance: "0.8 km",
    hours: "7:00 AM – 8:00 PM",
    capacity: "High",
    rating: 4.8,
    categories: ["Bakery", "Produce", "Dairy"],
  },
  {
    id: 2,
    name: "Hope Kitchen Hub",
    address: "45 Elm Avenue, Westside",
    distance: "1.2 km",
    hours: "6:00 AM – 9:00 PM",
    capacity: "Medium",
    rating: 4.6,
    categories: ["Produce", "Canned Goods"],
  },
  {
    id: 3,
    name: "Community Harvest Point",
    address: "78 Pine Road, North End",
    distance: "2.1 km",
    hours: "8:00 AM – 6:00 PM",
    capacity: "High",
    rating: 4.9,
    categories: ["Bakery", "Meat", "Produce"],
  },
  {
    id: 4,
    name: "Sunrise Food Bank",
    address: "23 Maple Lane, East District",
    distance: "3.4 km",
    hours: "9:00 AM – 7:00 PM",
    capacity: "Low",
    rating: 4.5,
    categories: ["All Categories"],
  },
];

const PhoneMockup = () => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mx-auto"
      style={{ width: 300 }}
    >
      <div className="relative rounded-[2.5rem] border-[6px] border-foreground/80 bg-foreground/5 p-1 shadow-elevated">
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-foreground/80" />
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          <div className="flex items-center justify-between bg-primary px-5 pb-2 pt-8 text-primary-foreground">
            <span className="text-xs font-medium font-body">9:41</span>
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-primary-foreground/80" />
              <div className="h-2 w-2 rounded-full bg-primary-foreground/80" />
              <div className="h-2 w-2 rounded-full bg-primary-foreground/60" />
            </div>
          </div>
          <div className="bg-primary px-4 pb-4 pt-1">
            <h3 className="font-display text-lg font-bold text-primary-foreground">
              Relay Sites
            </h3>
            <p className="text-xs text-primary-foreground/70 font-body">
              Find drop-off points near you
            </p>
          </div>
          <div className="px-3 py-2">
            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-body">
                Search relay sites...
              </span>
            </div>
          </div>
          <div className="flex gap-1.5 px-3 pb-2 overflow-hidden">
            <span className="whitespace-nowrap rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium text-primary-foreground font-body">
              Nearest
            </span>
            <span className="whitespace-nowrap rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground font-body">
              Open Now
            </span>
            <span className="whitespace-nowrap rounded-full bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground font-body">
              High Capacity
            </span>
          </div>
          <div
            className="space-y-1.5 px-3 pb-4"
            style={{ maxHeight: 280, overflow: "hidden" }}
          >
            {relaySites.map((site, i) => (
              <motion.div
                key={site.id}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-3 shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-semibold text-foreground font-body">
                        {site.name}
                      </h4>
                      <div className="flex items-center gap-0.5">
                        <Star className="h-2.5 w-2.5 fill-secondary text-secondary" />
                        <span className="text-[9px] text-muted-foreground font-body">
                          {site.rating}
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center gap-1">
                      <Navigation className="h-2.5 w-2.5 text-primary" />
                      <span className="text-[10px] text-muted-foreground font-body">
                        {site.distance} · {site.address}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5 text-primary" />
                      <span className="text-[10px] text-muted-foreground font-body">
                        {site.hours}
                      </span>
                    </div>
                    <div className="mt-1.5 flex gap-1 flex-wrap">
                      {site.categories.map((cat) => (
                        <span
                          key={cat}
                          className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[8px] font-medium text-primary font-body"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold font-body ${
                        site.capacity === "High"
                          ? "bg-primary/15 text-primary"
                          : site.capacity === "Medium"
                            ? "bg-secondary/15 text-secondary"
                            : "bg-destructive/15 text-destructive"
                      }`}
                    >
                      {site.capacity}
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-around border-t border-border bg-card px-2 py-2">
            <div className="flex flex-col items-center gap-0.5">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-[9px] font-medium text-primary font-body">
                Sites
              </span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Package className="h-4 w-4 text-muted-foreground" />
              <span className="text-[9px] text-muted-foreground font-body">
                My Drops
              </span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-[9px] text-muted-foreground font-body">
                History
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
