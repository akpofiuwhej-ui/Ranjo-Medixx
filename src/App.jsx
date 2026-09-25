import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Product";

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}
