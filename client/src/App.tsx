import React from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/home";
import { ThemeProvider } from "./components/theme-provider";
// import "./index.css";

// Placeholder 404 component, replace with your own if available
function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        {/* <TooltipProvider> */}
        {/* <Toaster /> */}
        <Router />
        {/* </TooltipProvider> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
