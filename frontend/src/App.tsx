import { Section } from "./components/featured/section";
import { Footer } from "./components/featured/footer";
import { Header } from "./components/featured/header";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
