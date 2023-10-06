import { Section } from "./components/featured/section";
import { Footer } from "./components/featured/footer";
import { Header } from "./components/featured/header";
import { Loading } from "./components/shared/loading";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Section />
      <Footer />
      <Loading />
    </div>
  );
}

export default App;
