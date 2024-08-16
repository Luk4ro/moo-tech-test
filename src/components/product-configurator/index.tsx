import { useSearchParams } from "react-router-dom";
import ProductShot from "@/images/ProductShot.jpeg";
import { HandleOptionClick, ProductConfiguratorProps } from "./types";
import {
  getAttributesWithOptions,
  getPresentableAttributeType,
  getSelectedProduct,
} from "./helpers";
import Table from "./components/table";
import SingleSelect from "./components/single-select";

const ProductConfigurator = ({ products }: ProductConfiguratorProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const attributesWithOptions = getAttributesWithOptions(products);
  const selectedProduct = getSelectedProduct(products, searchParams);

  const handleOptionClick: HandleOptionClick = (attributeType, value) =>
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set(attributeType, value);

      return prevSearchParams;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(auto,40%)_1fr] gap-y-4 md:gap-x-8 md:gap-y-10">
      <img
        className="justify-self-center md:row-start-2 md:max-w-full"
        src={ProductShot}
        alt={products[0]["product-label"]}
      />
      <h1 className="row-start-1 md:col-start-2 text-2xl text-[#1F1F1F]">
        {/* Prepending MOO here to match design - unsure if actually wanted. Also assuming product name stays the same across all variants */}
        {`MOO ${products[0]["product-label"]}`}
      </h1>
      <div className="flex flex-col gap-8 md:row-start-2 text-xl font-[500]">
        <p className="text-[#555555]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          iaculis augue nec viverra maximus. Ut at iaculis turpis. Donec
          fermentum placerat orci at interdum. Quisque vitae massa non mi
          scelerisque dignissim vel ac nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Quisque
          condimentum condimentum quam id auctor. Ut congue cursus vehicula.
          Nunc dictum dignissim erat eu euismod. Etiam fermentum turpis a ipsum
          pretium, vel finibus ipsum ornare. Etiam vel elementum nisl. Fusce
          volutpat fermentum nulla vitae ullamcorper.
        </p>
        <div className="flex flex-col gap-10 text-[21px]">
          {attributesWithOptions.map(([attributeType, attributeOptions]) => (
            <div key={attributeType} className="flex flex-col gap-4">
              {`Choose your ${getPresentableAttributeType(attributeType)}`}
              <SingleSelect
                onOptionClick={handleOptionClick}
                attributeOptions={attributeOptions}
                selectedOptions={Object.fromEntries(searchParams.entries())}
              />
            </div>
          ))}
        </div>
        {selectedProduct && <Table selectedProduct={selectedProduct} />}
      </div>
    </div>
  );
};

export default ProductConfigurator;
