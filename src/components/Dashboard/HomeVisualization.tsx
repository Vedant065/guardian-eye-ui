import { Badge } from "@/components/ui/badge";

const HomeVisualization = () => {
  return (
    <div className="relative h-full min-h-[400px] rounded-lg border border-primary/20 bg-gradient-to-br from-card to-secondary p-8 shadow-glow-primary">
      {/* 3D Grid Background Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center center'
        }} />
      </div>

      {/* Room Info Card */}
      <div className="relative z-10 absolute top-8 left-8 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-lg">
        <Badge variant="outline" className="mb-2 border-primary/50 text-primary">
          Active
        </Badge>
        <h3 className="font-semibold text-lg mb-2">Living Room</h3>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>Temp: <span className="text-foreground">22°C</span></p>
          <p>Event: <span className="text-warning">Motion Detected</span></p>
          <p>Confidence: <span className="text-primary">87%</span></p>
          <p>Threat level: <span className="text-foreground">Medium</span></p>
        </div>
      </div>

      {/* Central Alert Indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-destructive/20 blur-xl animate-pulse" />
          <div className="relative h-16 w-16 rounded-full bg-destructive shadow-glow-destructive flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-destructive-foreground animate-ping absolute" />
            <div className="h-4 w-4 rounded-full bg-destructive-foreground relative" />
          </div>
        </div>
      </div>

      {/* Room Label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs text-muted-foreground mb-1">Room View</p>
        <p className="text-sm font-medium">3D Security Visualization</p>
      </div>
    </div>
  );
};

export default HomeVisualization;
