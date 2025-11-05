import { Shield, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = ["Home", "Timeline", "Automations", "Community", "Reports"];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SentinelSphere</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    index === 0 ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive animate-pulse" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
