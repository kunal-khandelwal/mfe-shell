import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

const Header = React.lazy(() => import("remoteHeader/Header"));
const Footer = React.lazy(() => import("remoteFooter/Footer"));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading header...</p>}>
        <Header />
      </Suspense>

      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Shell Application</h1>
        <p>The header and footer are loaded from separate remotes.</p>
      </main>

      <Suspense fallback={<p>Loading footer...</p>}>
        <Footer />
      </Suspense>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
