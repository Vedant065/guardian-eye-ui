import { TrendingUp, TrendingDown } from "lucide-react";

const AIInsights = () => {
  return (
    <div className="border border-border rounded-lg p-6 bg-card">
      <h2 className="text-lg font-semibold mb-6">AI Insights</h2>
      
      <div className="flex items-start gap-8">
        {/* Score Circle */}
        <div className="relative shrink-0">
          <div className="h-32 w-32 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary border-b-primary" 
                 style={{ transform: 'rotate(-90deg)' }} />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">72</div>
              <div className="text-xs text-muted-foreground">Security Score</div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>0</span>
            <span>100</span>
          </div>
        </div>

        {/* Insights List */}
        <div className="flex-1 space-y-3">
          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">User active time:</span>{" "}
                <span className="text-muted-foreground">5:00 PM - 7:00 AM</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">House Activity outside home:</span>{" "}
                <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">House typically unoccupied:</span>{" "}
                <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <div className="text-xs text-muted-foreground">Predicted Threats</div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="text-center">
              <div className="text-lg font-semibold">35%</div>
              <div className="text-xs text-muted-foreground">chance of door access anomalies</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">18%</div>
              <div className="text-xs text-muted-foreground">chance of light anomalies</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">12%</div>
              <div className="text-xs text-muted-foreground">chance of WiFi anomalies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
