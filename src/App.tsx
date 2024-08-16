import ProductConfigurator from "@/components/product-configurator";
import { products } from "./productOptionsData.json";

const App = () => {
  return (
    <main className="p-4">
      <ProductConfigurator products={products} />
    </main>
  );
};

export default App;
