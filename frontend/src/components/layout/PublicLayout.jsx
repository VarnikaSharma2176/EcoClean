import Navbar from "./Navbar";
import Footer from "./Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "calc(100vh - 140px)",
        }}
      >
        {children}
      </main>

      <Footer />
    </>
  );
};

export default PublicLayout;