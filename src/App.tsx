import Features from "./components/features/features";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import FAQ from "./components/faq/faq";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <section className="empty-space" />
      <Features />
      <section className="empty-space" />
      <FAQ />
    </main>
  );
}

export default App;
