import Headar from "./components/Header";
import Program from "./components/Programs";
import Palestine from "./components/Palestine";
import Proportion from "./components/Proportion";
import About from "./components/About";
import Services from "./components/Services/Services";
// import axios from axios

function App() {
  return (
    <div dir="rtl">
      <Headar />
      <Program />
      <Palestine />
      <Proportion />
      <About />
      <Services />
    </div>
  );
}

export default App;
