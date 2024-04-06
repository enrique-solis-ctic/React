import { Header, Navbar, Footer } from "../../../components";
import { PropTypes } from "prop-types";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[82vh] sm:min-h-[85vh] bg-teal-50">
        {children}
      </main>
      <div className="content-end px-3 py-2 border-b shadow-md bg-gradient-to-r from-sky-600 to-cyan-200 sm:hidden">
        <Navbar />
      </div>
      <Footer />
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
