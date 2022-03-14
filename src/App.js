import "./styles/base.css";
import "./styles/grid.css";
import "./styles/style.css";
import Header from "./pages/Home/Header";
import Footer from "./pages/Home/Footer";
import Container from "./pages/Home/Container";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Container />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
