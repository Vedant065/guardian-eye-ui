import { Shield, AlertTriangle, Activity, TrendingDown } from "lucide-react";

const stats = [
  {
    label: "Total Events",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    icon: Activity,
    color: "primary"
  },
  {
    label: "Critical Alerts",
    value: "23",
    change: "-18.3%",
    trend: "down",
    icon: AlertTriangle,
    color: "destructive"
  },
  {
    label: "Active Sensors",
    value: "18",
    change: "100%",
    trend: "neutral",
    icon: Shield,
    color: "success"
  },
  {
    label: "False Positives",
    value: "8.2%",
    change: "-5.1%",
    trend: "down",
    icon: TrendingDown,
    color: "warning"
  }
];

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-sm animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 bg-${stat.color}/10 rounded-lg`}>
                <Icon className={`h-6 w-6 text-${stat.color}`} />
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                stat.trend === "up" 
                  ? "bg-success/10 text-success" 
                  : stat.trend === "down"
                  ? "bg-destructive/10 text-destructive"
                  : "bg-muted text-muted-foreground"
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-display font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsOverview;
