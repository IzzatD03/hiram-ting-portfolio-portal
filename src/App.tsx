import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Affiliations from "./pages/Affiliations";
import Publications from "./pages/Publications";
import JournalArticles from "./pages/Journal-articles";
import BooksChapters from "./pages/Books-chapters";
import ConferenceProceedings from "./pages/Conference-proceedings";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import CurriculumVitae from "./pages/Curriculum-Vitae";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/affiliations" element={<Affiliations />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/publications/journal-articles" element={<JournalArticles />} />
              <Route path="/publications/books-chapters" element={<BooksChapters />} />
              <Route path="/publications/conference-proceedings" element={<ConferenceProceedings />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/cv" element={<CurriculumVitae />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
