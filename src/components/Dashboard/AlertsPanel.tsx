import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

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
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Real-Time Alerts</h2>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <Badge className={`${getSeverityColor(alert.severity)} text-xs px-2 py-1 shrink-0`}>
                {alert.severity.toUpperCase()}
              </Badge>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{alert.title}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{alert.time}</span>
                  <span>•</span>
                  <span>{alert.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <Button size="sm" variant="outline" className="text-xs h-7 flex-1">
                Verify
              </Button>
              <Button size="sm" variant="outline" className="text-xs h-7 flex-1">
                Ignore
              </Button>
              <Button size="sm" variant="outline" className="text-xs h-7 flex-1">
                Activate Safe Mode
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-lg p-4 bg-card/50">
        <p className="text-sm text-muted-foreground">
          At 11:47 PM, unusual movement was detected while the user was away
        </p>
      </div>
    </div>
  );
};

export default AlertsPanel;
