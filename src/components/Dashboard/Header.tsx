import { Shield, Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Statistics", path: "/statistics" },
    { label: "Timeline", path: "/timeline" },
    { label: "Automations", path: "/automations" },
    { label: "Reports", path: "/reports" }
  ];

  return (
    <header className="border-b border-border/50 bg-card/30 backdrop-blur-xl sticky top-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <Shield className="h-7 w-7 text-primary relative animate-glow-pulse" />
              </div>
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                SentinelSphere
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary shadow-glow-sm" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary/50 transition-all duration-300">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive shadow-glow-destructive flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-destructive-foreground animate-pulse" />
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary/50 transition-all duration-300">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
