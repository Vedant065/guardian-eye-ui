import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const data = [
  { sensor: "Front Door", events: 156, status: "active" },
  { sensor: "Living Room", events: 142, status: "active" },
  { sensor: "Back Door", events: 98, status: "active" },
  { sensor: "Garage", events: 87, status: "active" },
  { sensor: "Kitchen", events: 76, status: "active" },
  { sensor: "Bedroom", events: 54, status: "active" }
];

const SensorActivity = () => {
  return (
    <div className="bg-gradient-card border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold">Most Active Sensors</h3>
          <p className="text-sm text-muted-foreground">Events detected this week</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="sensor" 
            stroke="hsl(var(--muted-foreground))" 
            style={{ fontSize: '11px' }}
            angle={-45}
            textAnchor="end"
            height={80}
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
          <Bar 
            dataKey="events" 
            fill="hsl(187, 85%, 53%)" 
            radius={[8, 8, 0, 0]}
            style={{ filter: 'drop-shadow(0 0 8px hsl(187, 85%, 53% / 0.4))' }}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 space-y-2">
        {data.slice(0, 3).map((sensor, index) => (
          <div 
            key={sensor.sensor}
            className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-border/30"
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary shadow-glow-sm animate-pulse" />
              <span className="text-sm font-medium">{sensor.sensor}</span>
            </div>
            <span className="text-sm font-display font-bold text-primary">{sensor.events}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SensorActivity;
