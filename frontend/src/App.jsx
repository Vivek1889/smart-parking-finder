import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import AddParking from "./pages/AddParking";
function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      {/* <AddParking></AddParking> */}
      <Footer></Footer>
      <Auth></Auth>
    </>
  );
}

export default App;
