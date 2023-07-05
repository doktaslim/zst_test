import { useState } from "react";
import Filters from "./components/Filters";
import Layout from "./components/Layout";
import PropertyListing from "./components/PropertyListing";
import { mockDataArray } from "./utils";
import MapView from "./components/Map";
import SwitchHandler from "./components/SwitchHandler";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [properties, setProperties] = useState(mockDataArray);
  const [view, setView] = useState("listing");

  const handleView = () => {
    return setView((prev) => (prev === "listing" ? "map" : "listing"));
  };

  return (
    <Layout>
      <Filters
        properties={properties}
        setProperties={setProperties}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main className="relative">
        {view === "listing" && (
          <PropertyListing
            selectedCategory={selectedCategory}
            properties={properties}
            setProperties={setProperties}
          />
        )}

        {view === "map" && <MapView />}

        <SwitchHandler
          view={view}
          handleView={handleView}
        />
      </main>
    </Layout>
  );
};

export default App;
