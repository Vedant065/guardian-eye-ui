import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, XCircle, Clock } from "lucide-react";

interface Alert {
  id: number;
  severity: "critical" | "medium" | "info";
  title: string;
  location: string;
  time: string;
}

const alerts: Alert[] = [
  {
    id: 1,
    severity: "medium",
    title: "Unusual WiFi signal near bedroom",
    location: "Bedroom",
    time: "11:47 PM"
  },
  {
    id: 2,
    severity: "critical",
    title: "Door open detected",
    location: "Front Door",
    time: "10:23 PM"
  },
  {
    id: 3,
    severity: "medium",
    title: "Unknown device on network",
    location: "Living Room",
    time: "9:58 PM"
  }
];

const AlertsPanel = () => {
  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case "critical":
        return {
          bg: "bg-destructive/10",
          border: "border-destructive/40",
          text: "text-destructive",
          badge: "bg-destructive text-destructive-foreground shadow-glow-destructive",
          icon: AlertCircle
        };
      case "medium":
        return {
          bg: "bg-warning/10",
          border: "border-warning/40",
          text: "text-warning",
          badge: "bg-warning text-warning-foreground shadow-glow-warning",
          icon: AlertCircle
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/40",
          text: "text-primary",
          badge: "bg-primary text-primary-foreground shadow-glow-sm",
          icon: CheckCircle
        };
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-bold">Real-Time Alerts</h2>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="h-2 w-2 rounded-full bg-destructive animate-pulse shadow-glow-destructive" />
          <span className="font-medium">3 Active</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert, index) => {
          const config = getSeverityConfig(alert.severity);
          const Icon = config.icon;
          
          return (
            <div
              key={alert.id}
              className={`border ${config.border} ${config.bg} rounded-xl p-5 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-glow-sm group animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`${config.bg} p-2 rounded-lg`}>
                  <Icon className={`h-5 w-5 ${config.text}`} />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold leading-tight">{alert.title}</p>
                      <Badge className={`${config.badge} text-xs px-2.5 py-0.5 shrink-0 font-display`}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        <span>{alert.time}</span>
                      </div>
                      <span>•</span>
                      <span className="font-medium">{alert.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs h-8 flex-1 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300">
                      Verify
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-8 flex-1 hover:bg-secondary/50 transition-all duration-300">
                      Ignore
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs h-8 flex-1 hover:bg-warning/10 hover:border-warning/40 hover:text-warning transition-all duration-300">
                      Safe Mode
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border border-border/50 rounded-xl p-5 bg-card/50 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shadow-glow-sm" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            At <span className="text-foreground font-semibold">11:47 PM</span>, unusual movement was detected while the user was away
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertsPanel;
