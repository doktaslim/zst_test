import Filters from "./components/Filters";
import Layout from "./components/Layout";
import PropertyListing from "./components/PropertyListing";

const App = () => {
  return (
    <Layout>
      <Filters />
      <PropertyListing />
    </Layout>
  );
};

export default App;
