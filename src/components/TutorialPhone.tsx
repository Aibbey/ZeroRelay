import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Package,
  ChevronRight,
  Star,
  Navigation,
  Search,
  Bell,
  Check,
  Plus,
  Camera,
  ArrowLeft,
} from "lucide-react";

interface TutorialPhoneProps {
  screen: "home" | "detail" | "deposit" | "confirm";
}

const TutorialPhone = ({ screen }: TutorialPhoneProps) => {
  return (
    <div className="relative mx-auto" style={{ width: 260 }}>
      <div className="relative rounded-[2.2rem] border-[5px] border-foreground/80 bg-foreground/5 p-1 shadow-elevated">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-foreground/80" />
        <div className="relative overflow-hidden rounded-[1.8rem] bg-background">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-primary px-4 pb-1.5 pt-7 text-primary-foreground">
            <span className="text-[10px] font-medium font-body">9:41</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/60" />
            </div>
          </div>

          {screen === "home" && <ScreenHome />}
          {screen === "detail" && <ScreenDetail />}
          {screen === "deposit" && <ScreenDeposit />}
          {screen === "confirm" && <ScreenConfirm />}

          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-border bg-card px-2 py-2">
            <div className="flex flex-col items-center gap-0.5">
              <MapPin
                className={`h-3.5 w-3.5 ${screen === "home" || screen === "detail" ? "text-primary" : "text-muted-foreground"}`}
              />
              <span
                className={`text-[8px] font-body ${screen === "home" || screen === "detail" ? "text-primary font-medium" : "text-muted-foreground"}`}
              >
                Sites
              </span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Package
                className={`h-3.5 w-3.5 ${screen === "deposit" || screen === "confirm" ? "text-primary" : "text-muted-foreground"}`}
              />
              <span
                className={`text-[8px] font-body ${screen === "deposit" || screen === "confirm" ? "text-primary font-medium" : "text-muted-foreground"}`}
              >
                My Drops
              </span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Bell className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-[8px] text-muted-foreground font-body">
                Alerts
              </span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-[8px] text-muted-foreground font-body">
                History
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenHome = () => (
  <>
    <div className="bg-primary px-4 pb-3 pt-1">
      <h3 className="font-display text-base font-bold text-primary-foreground">
        Relay Sites
      </h3>
      <p className="text-[10px] text-primary-foreground/70 font-body">
        Find drop-off points near you
      </p>
    </div>
    <div className="px-3 py-2">
      <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5">
        <Search className="h-3 w-3 text-muted-foreground" />
        <span className="text-[10px] text-muted-foreground font-body">
          Search relay sites...
        </span>
      </div>
    </div>
    <div className="flex gap-1 px-3 pb-1.5">
      <span className="rounded-full bg-primary px-2 py-0.5 text-[8px] font-medium text-primary-foreground font-body">
        Nearest
      </span>
      <span className="rounded-full bg-muted px-2 py-0.5 text-[8px] text-muted-foreground font-body">
        Open Now
      </span>
    </div>
    <div
      className="space-y-1.5 px-3 pb-3"
      style={{ height: 220, overflow: "hidden" }}
    >
      {[
        { name: "Green Bridge Center", dist: "0.8 km", cap: "High" },
        { name: "Hope Kitchen Hub", dist: "1.2 km", cap: "Medium" },
        { name: "Community Harvest", dist: "2.1 km", cap: "High" },
      ].map((s) => (
        <div
          key={s.name}
          className="flex items-center justify-between rounded-lg border border-border bg-card p-2.5 shadow-soft"
        >
          <div>
            <p className="text-[10px] font-semibold text-foreground font-body">
              {s.name}
            </p>
            <div className="mt-0.5 flex items-center gap-1">
              <Navigation className="h-2 w-2 text-primary" />
              <span className="text-[8px] text-muted-foreground font-body">
                {s.dist}
              </span>
              <Star className="ml-1 h-2 w-2 fill-secondary text-secondary" />
              <span className="text-[8px] text-muted-foreground font-body">
                4.8
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`rounded-full px-1.5 py-0.5 text-[7px] font-bold font-body ${s.cap === "High" ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary"}`}
            >
              {s.cap}
            </span>
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>
      ))}
    </div>
  </>
);

const ScreenDetail = () => (
  <>
    <div className="bg-primary px-4 pb-3 pt-1">
      <div className="flex items-center gap-2">
        <ArrowLeft className="h-3.5 w-3.5 text-primary-foreground" />
        <h3 className="font-display text-base font-bold text-primary-foreground">
          Green Bridge Center
        </h3>
      </div>
    </div>
    {/* Map placeholder */}
    <div className="relative mx-3 mt-2 h-28 rounded-xl bg-muted overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <MapPin className="h-8 w-8 text-primary" />
          <div className="absolute -bottom-1 left-1/2 h-3 w-6 -translate-x-1/2 rounded-full bg-primary/20" />
        </div>
      </div>
      <div className="absolute bottom-2 right-2 rounded-md bg-card px-1.5 py-0.5 text-[7px] font-body shadow-soft">
        Map View
      </div>
    </div>
    <div
      className="px-3 py-2 space-y-2"
      style={{ height: 175, overflow: "hidden" }}
    >
      <div>
        <p className="text-[10px] font-semibold text-foreground font-body">
          📍 12 Oak Street, Downtown
        </p>
        <p className="text-[9px] text-muted-foreground font-body mt-0.5">
          🕐 7:00 AM – 8:00 PM · Open Now
        </p>
      </div>
      <div>
        <p className="text-[9px] font-semibold text-foreground font-body mb-1">
          Accepted Categories
        </p>
        <div className="flex gap-1 flex-wrap">
          {["Bakery", "Produce", "Dairy", "Meat"].map((c) => (
            <span
              key={c}
              className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[7px] font-medium text-primary font-body"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[9px] font-semibold text-foreground font-body mb-0.5">
          Capacity
        </p>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-primary" />
        </div>
        <p className="text-[7px] text-muted-foreground font-body mt-0.5">
          75% available
        </p>
      </div>
      <button className="w-full rounded-lg bg-primary py-1.5 text-[10px] font-semibold text-primary-foreground font-body">
        Schedule a Drop-off
      </button>
    </div>
  </>
);

const ScreenDeposit = () => (
  <>
    <div className="bg-primary px-4 pb-3 pt-1">
      <div className="flex items-center gap-2">
        <ArrowLeft className="h-3.5 w-3.5 text-primary-foreground" />
        <h3 className="font-display text-base font-bold text-primary-foreground">
          New Drop-off
        </h3>
      </div>
    </div>
    <div
      className="px-3 py-3 space-y-3"
      style={{ height: 280, overflow: "hidden" }}
    >
      <div>
        <label className="text-[9px] font-semibold text-foreground font-body">
          Relay Site
        </label>
        <div className="mt-1 flex items-center justify-between rounded-lg border border-border bg-card px-2.5 py-1.5">
          <span className="text-[10px] text-foreground font-body">
            Green Bridge Center
          </span>
          <ChevronRight className="h-3 w-3 text-muted-foreground" />
        </div>
      </div>
      <div>
        <label className="text-[9px] font-semibold text-foreground font-body">
          Items to Deposit
        </label>
        <div className="mt-1 space-y-1">
          {["Bread (12 loaves)", "Mixed Vegetables (5 kg)"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-2.5 py-1.5"
            >
              <span className="text-[9px] text-foreground font-body">
                {item}
              </span>
              <Check className="h-3 w-3 text-primary" />
            </div>
          ))}
          <button className="flex items-center gap-1 rounded-lg border border-dashed border-border px-2.5 py-1.5 w-full justify-center">
            <Plus className="h-3 w-3 text-muted-foreground" />
            <span className="text-[9px] text-muted-foreground font-body">
              Add Item
            </span>
          </button>
        </div>
      </div>
      <div>
        <label className="text-[9px] font-semibold text-foreground font-body">
          Photo (optional)
        </label>
        <div className="mt-1 flex items-center gap-2 rounded-lg border border-dashed border-border p-3 justify-center">
          <Camera className="h-4 w-4 text-muted-foreground" />
          <span className="text-[9px] text-muted-foreground font-body">
            Take a photo
          </span>
        </div>
      </div>
      <button className="w-full rounded-lg bg-primary py-2 text-[10px] font-semibold text-primary-foreground font-body">
        Confirm Drop-off
      </button>
    </div>
  </>
);

const ScreenConfirm = () => (
  <>
    <div className="bg-primary px-4 pb-3 pt-1">
      <h3 className="font-display text-base font-bold text-primary-foreground">
        Drop-off Confirmed
      </h3>
    </div>
    <div
      className="flex flex-col items-center px-3 py-6 text-center"
      style={{ height: 290 }}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
        <Check className="h-8 w-8 text-primary" />
      </div>
      <h4 className="font-display text-lg font-bold text-foreground">
        Thank You!
      </h4>
      <p className="mt-2 text-[10px] text-muted-foreground font-body max-w-[180px]">
        Your drop-off has been confirmed. The relay site will be expecting your
        delivery.
      </p>
      <div className="mt-4 w-full rounded-xl bg-card border border-border p-3 text-left space-y-1.5">
        <div className="flex justify-between">
          <span className="text-[8px] text-muted-foreground font-body">
            Site
          </span>
          <span className="text-[8px] font-semibold text-foreground font-body">
            Green Bridge Center
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[8px] text-muted-foreground font-body">
            Items
          </span>
          <span className="text-[8px] font-semibold text-foreground font-body">
            2 items
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[8px] text-muted-foreground font-body">
            Time
          </span>
          <span className="text-[8px] font-semibold text-foreground font-body">
            Today, 5:30 PM
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-[9px] text-primary font-body font-medium">
        <Star className="h-3 w-3 fill-secondary text-secondary" />
        You've saved 17 kg of food this month!
      </div>
    </div>
  </>
);

export default TutorialPhone;
