import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Shield, AlertTriangle } from "lucide-react";

const data = [
  { name: "Motion Detection", value: 45, color: "hsl(187, 85%, 53%)" },
  { name: "Door Access", value: 28, color: "hsl(25, 95%, 53%)" },
  { name: "Network Anomaly", value: 15, color: "hsl(0, 84%, 60%)" },
  { name: "Window Alert", value: 12, color: "hsl(142, 76%, 36%)" }
];

const ThreatPatterns = () => {
  return (
    <div className="bg-gradient-card border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-destructive/10 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-destructive" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold">Threat Detection Patterns</h3>
          <p className="text-sm text-muted-foreground">Distribution by type</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                style={{ filter: `drop-shadow(0 0 8px ${entry.color} / 0.4)` }}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3)'
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div 
            key={item.name}
            className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ 
                  backgroundColor: item.color,
                  boxShadow: `0 0 8px ${item.color}`
                }}
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-display font-bold">{item.value}%</span>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-start gap-3">
          <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold mb-1">AI Insight</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Motion detection events are <span className="text-primary font-semibold">45% higher</span> during evening hours (6 PM - 10 PM). Consider adjusting sensitivity for this timeframe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatPatterns;
