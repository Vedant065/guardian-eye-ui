import Header from "@/components/Dashboard/Header";
import HomeVisualization from "@/components/Dashboard/HomeVisualization";
import AlertsPanel from "@/components/Dashboard/AlertsPanel";
import AIInsights from "@/components/Dashboard/AIInsights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Visualization Area - Takes 2 columns */}
          <div className="lg:col-span-2">
            <HomeVisualization />
          </div>

          {/* Alerts Panel - Takes 1 column */}
          <div>
            <AlertsPanel />
          </div>
        </div>

        {/* AI Insights Section - Full Width */}
        <div className="mt-6">
          <AIInsights />
        </div>
      </main>
    </div>
  );
};

export default Index;
