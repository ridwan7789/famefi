import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/i18n";
import Index from "./pages/Index";
import HowItWorks from "./pages/Earn";
import NotFound from "./pages/NotFound";
import SEO from "@/components/SEO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="famefi-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEO />
          <Routes>
            <Route path="/" element={
              <>
                <SEO
                  title="FameFi - Creator Economy Platform | Tokenize & Monetize Content"
                  description="FameFi is a creator-first SocialFi protocol on Solana. Transform viral content into tradeable digital assets and earn rewards."
                  keywords="creator economy, socialfi, blockchain, nft, solana, digital assets, content monetization, dca, viral content"
                />
                <Index />
              </>
            } />
            <Route path="/how-it-works" element={
              <>
                <SEO
                  title="How FameFi Works - Earn with Viral Content | FameFi"
                  description="Learn how to create, mint, and earn with your digital content on FameFi. Step-by-step guide to the Creator Viral Reward Program."
                  keywords="how famefi works, earn with content, viral reward program, creator monetization, socialfi guide"
                />
                <HowItWorks />
              </>
            } />
            <Route path="*" element={
              <>
                <SEO
                  title="Page Not Found - FameFi"
                  description="The page you're looking for doesn't exist. Return to the FameFi homepage."
                />
                <NotFound />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
