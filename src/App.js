import "./base.css";
import "./grid.css";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

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
