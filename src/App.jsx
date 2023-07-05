import { useState } from "react";
import Filters from "./components/Filters";
import Layout from "./components/Layout";
import PropertyListing from "./components/PropertyListing";
import { mockDataArray } from "./utils";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [properties, setProperties] = useState(mockDataArray)

  return (
    <Layout>
      <Filters
        properties={properties}
        setProperties={setProperties}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <PropertyListing
        selectedCategory={selectedCategory}
        properties={properties}
        setProperties={setProperties}
      />
    </Layout>
  );
};

export default App;
