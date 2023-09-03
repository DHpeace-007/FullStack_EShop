import Container from "react-bootstrap/esm/Container";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Generic Shopping Cart Things</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
