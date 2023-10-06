import { Section } from "./components/featured/section";
import { Footer } from "./components/featured/footer";
import { Header } from "./components/featured/header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
