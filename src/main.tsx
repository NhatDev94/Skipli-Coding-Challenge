import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.tsx";
import { Toaster } from "@/components/ui/sonner";
import Loading from "./components/Loading.tsx";

const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading isLoading={true} />}>
          <App />
        </Suspense>
        <Toaster richColors />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
