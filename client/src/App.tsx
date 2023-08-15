import "./App.css";
import {
  Companies,
  Contact,
  Footer,
  GetStarted,
  Header,
  Hero,
  Residencies,
  Value,
} from "./components";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
