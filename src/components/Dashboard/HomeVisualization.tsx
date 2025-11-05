import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

const HomeVisualization = () => {
  return (
    <div className="relative h-full min-h-[500px] rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-secondary to-card p-8 shadow-glow-primary overflow-hidden group animate-fade-in">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />
      
      {/* 3D Grid Background Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-40">
        <div className="absolute inset-0 animate-shimmer" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(600px) rotateX(60deg) scale(2)',
          transformOrigin: 'center center'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/40 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Room Info Card */}
      <div className="relative z-10 absolute top-8 left-8 bg-card/95 backdrop-blur-md border border-primary/40 rounded-xl p-5 shadow-glow-sm animate-slide-up group-hover:border-primary/60 transition-all duration-500">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="border-primary/60 text-primary bg-primary/10 shadow-glow-sm">
            <Activity className="h-3 w-3 mr-1 animate-pulse" />
            Active
          </Badge>
        </div>
        <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Living Room</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Temperature</span>
            <span className="text-foreground font-semibold">22°C</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Event</span>
            <span className="text-warning font-semibold">Motion Detected</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Confidence</span>
            <span className="text-primary font-semibold">87%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Threat Level</span>
            <span className="text-foreground font-semibold">Medium</span>
          </div>
        </div>
      </div>

      {/* Central Alert Indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-destructive/30 blur-2xl animate-glow-pulse" />
          <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-destructive to-destructive/80 shadow-glow-destructive flex items-center justify-center border-2 border-destructive/50">
            <div className="h-10 w-10 rounded-full bg-destructive-foreground/20 animate-ping absolute" />
            <div className="h-6 w-6 rounded-full bg-destructive-foreground relative shadow-lg" />
          </div>
        </div>
      </div>

      {/* Room Label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs text-muted-foreground mb-1 font-medium">Isometric View</p>
        <p className="text-sm font-display font-semibold text-primary">3D Security Visualization</p>
      </div>
    </div>
  );
};

export default HomeVisualization;
