
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";
import FinancialLiteracy from "./pages/FinancialLiteracy";
import SignupPage from "./pages/SignupPage";
import TeensPage from "./pages/TeensPage";
import ParentsPage from "./pages/ParentsPage";
import InvestmentsPage from "./pages/InvestmentsPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/teens" element={<TeensPage />} />
              <Route path="/parents" element={<ParentsPage />} />
              <Route path="/investments" element={<InvestmentsPage />} />
              <Route path="/financial-literacy" element={<FinancialLiteracy />} />
              <Route path="/signup" element={<SignupPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
