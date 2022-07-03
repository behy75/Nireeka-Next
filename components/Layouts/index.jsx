import Footer from "../Footer";
import Header from "../Header";
import MainHeader from "../Header/MainHeader";

function Layouts({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
      <Footer />
    </div>
  );
}

export default Layouts;
