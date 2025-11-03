import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Shield, ShieldCheck, Sparkles } from "lucide-react";

const Index = () => {
  const [deviceId, setDeviceId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!deviceId.trim()) {
      toast.error("Please enter a device ID");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Device authorization request submitted successfully!");
      setDeviceId("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-40" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-dark/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Professional Logo Section */}
        <div className="text-center mb-10 space-y-6">
          <div className="relative inline-block">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary-dark rounded-3xl blur-2xl opacity-50 animate-glow-pulse" />
            
            {/* Logo container */}
            <div className="relative bg-gradient-to-br from-primary via-primary-glow to-primary-dark p-[2px] rounded-3xl shadow-[var(--shadow-glow-strong)]">
              <div className="bg-background rounded-3xl p-6 backdrop-blur-xl">
                <div className="relative">
                  <Shield className="w-16 h-16 text-primary" strokeWidth={1.5} />
                  <ShieldCheck className="w-8 h-8 text-primary-glow absolute -top-1 -right-1" strokeWidth={2} />
                  <Sparkles className="w-5 h-5 text-primary-glow absolute -bottom-1 -left-1 animate-pulse" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Sahayak
            </h1>
            <p className="text-primary font-medium text-sm tracking-wide uppercase">
              Public Safety Authorization
            </p>
          </div>
        </div>

        {/* Authorization Card with enhanced styling */}
        <div className="relative group">
          {/* Card glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
          
          <div className="relative bg-card/90 border border-border/50 rounded-2xl shadow-2xl backdrop-blur-xl p-8 space-y-6">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Get your device authorized
              </h2>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                with the Sahayak team
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="deviceId" className="text-foreground font-medium flex items-center gap-2">
                  Enter your device ID
                  <span className="text-primary text-xs">(Required)</span>
                </Label>
                <div className="relative">
                  <Input
                    id="deviceId"
                    type="text"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
                    className="h-12 bg-input/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all backdrop-blur-sm"
                    disabled={isSubmitting}
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 pointer-events-none" />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-dark hover:via-primary hover:to-primary-glow text-primary-foreground font-semibold text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-[var(--shadow-glow-strong)] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Submitting..." : "Submit Authorization Request"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </form>

            <div className="pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
                <Shield className="w-3 h-3 text-primary" />
                Your device ID can be found in your device settings
              </p>
            </div>
          </div>
        </div>

        {/* Footer text with gradient */}
        <p className="text-center text-xs text-muted-foreground mt-8 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow animate-pulse" />
          Secure authorization powered by Sahayak
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-glow to-primary animate-pulse" />
        </p>
      </div>
    </div>
  );
};

export default Index;
