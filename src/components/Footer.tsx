import { Leaf, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 py-14">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                ZeroRelay
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Connecting merchants with relay sites to eliminate food waste and
              fight hunger.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                The Concept
              </Link>
              <Link
                to="/app"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                The App
              </Link>
              <Link
                to="/tutorial"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                Tutorial
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">
              Our Mission
            </h4>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Zero waste, zero hunger. Every meal saved is a step toward a more
              sustainable and compassionate world.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
