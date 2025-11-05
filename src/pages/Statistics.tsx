import Header from "@/components/Dashboard/Header";
import EventsChart from "@/components/Statistics/EventsChart";
import SensorActivity from "@/components/Statistics/SensorActivity";
import ThreatPatterns from "@/components/Statistics/ThreatPatterns";
import StatsOverview from "@/components/Statistics/StatsOverview";

const Statistics = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-display font-bold mb-2">Security Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights into your home security system performance</p>
        </div>

        {/* Stats Overview Cards */}
        <StatsOverview />

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Security Events Over Time */}
          <div className="lg:col-span-2">
            <EventsChart />
          </div>

          {/* Most Active Sensors */}
          <SensorActivity />

          {/* Threat Detection Patterns */}
          <ThreatPatterns />
        </div>
      </main>
    </div>
  );
};

export default Statistics;
