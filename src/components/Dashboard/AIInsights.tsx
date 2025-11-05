import { TrendingUp, Brain, Activity, Zap } from "lucide-react";

const AIInsights = () => {
  return (
    <div className="border border-border/50 rounded-2xl p-8 bg-gradient-card backdrop-blur-sm shadow-lg animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold">AI Insights</h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Activity className="h-4 w-4 animate-pulse text-primary" />
          <span className="font-medium">Live Analysis</span>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Score Circle */}
        <div className="relative shrink-0 animate-slide-up">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
          <div className="relative h-40 w-40 rounded-full border-4 border-border/50 flex items-center justify-center bg-card/50 backdrop-blur-sm">
            <svg className="absolute inset-0 -rotate-90 h-40 w-40">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="hsl(var(--border))"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="hsl(var(--primary))"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - 0.72)}`}
                strokeLinecap="round"
                className="animate-glow-pulse"
                style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.6))' }}
              />
            </svg>
            <div className="text-center relative">
              <div className="text-5xl font-display font-bold text-primary">72</div>
              <div className="text-xs text-muted-foreground font-semibold mt-1">Security Score</div>
            </div>
          </div>
          <div className="flex justify-between mt-3 text-xs text-muted-foreground font-medium">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        {/* Insights List */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            {[
              { label: "User active time", value: "5:00 PM - 7:00 AM", icon: Activity },
              { label: "House Activity outside home", value: "8:00 AM - 6:00 PM", icon: TrendingUp },
              { label: "House typically unoccupied", value: "9:00 AM - 5:00 PM", icon: Zap }
            ].map((item, index) => (
              <div 
                key={item.label} 
                className="flex items-start gap-4 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">{item.label}:</span>{" "}
                    <span className="text-muted-foreground">{item.value}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-4 w-4 text-warning" />
              <div className="text-sm font-display font-semibold">Predicted Threats</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "35%", label: "Door access anomalies", color: "destructive" },
                { value: "18%", label: "Light anomalies", color: "warning" },
                { value: "12%", label: "WiFi anomalies", color: "primary" }
              ].map((threat, index) => (
                <div 
                  key={threat.label}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all duration-300 group animate-slide-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className={`text-2xl font-display font-bold text-${threat.color} mb-1`}>
                    {threat.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">{threat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
