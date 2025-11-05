import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { date: "Mon", critical: 4, medium: 12, info: 24 },
  { date: "Tue", critical: 3, medium: 15, info: 28 },
  { date: "Wed", critical: 6, medium: 18, info: 32 },
  { date: "Thu", critical: 2, medium: 14, info: 26 },
  { date: "Fri", critical: 5, medium: 20, info: 35 },
  { date: "Sat", critical: 8, medium: 22, info: 38 },
  { date: "Sun", critical: 3, medium: 16, info: 30 }
];

const EventsChart = () => {
  return (
    <div className="bg-gradient-card border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold">Security Events Over Time</h3>
            <p className="text-sm text-muted-foreground">Last 7 days activity breakdown</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive shadow-glow-destructive" />
            <span className="text-muted-foreground">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-warning shadow-glow-warning" />
            <span className="text-muted-foreground">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary shadow-glow-sm" />
            <span className="text-muted-foreground">Info</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(0, 84%, 60%)" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorInfo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))" 
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3)'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Area 
            type="monotone" 
            dataKey="info" 
            stroke="hsl(187, 85%, 53%)" 
            strokeWidth={2}
            fill="url(#colorInfo)" 
          />
          <Area 
            type="monotone" 
            dataKey="medium" 
            stroke="hsl(25, 95%, 53%)" 
            strokeWidth={2}
            fill="url(#colorMedium)" 
          />
          <Area 
            type="monotone" 
            dataKey="critical" 
            stroke="hsl(0, 84%, 60%)" 
            strokeWidth={2}
            fill="url(#colorCritical)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventsChart;
