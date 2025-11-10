import Navbar from "../components/Navbar";
import WelcomePage from "../fragments/WelcomePage";
import Footer from "../components/Footer";

const Home = () => {
  //test aja
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col">
        <main className="w-full">
          <div className="bg-silver py-12">
            <WelcomePage />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
