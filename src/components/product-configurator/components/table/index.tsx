import { getPresentableAttributeType } from "../../helpers";
import { TableProps } from "./types";

const Table = ({ selectedProduct }: TableProps) => (
  <table className="*:text-left table-fixed w-full [&_tr]:border-b-2 [&_th]:p-2 [&_th]:font-normal [&_th]:capitalize">
    <thead className="text-[21px]">
      <tr>
        <th scope="col">Summary</th>
      </tr>
    </thead>
    <tbody>
      {selectedProduct.attributes.map((product) => (
        <tr key={product.type} className="last:border-b-0 text-xl">
          <th scope="row">{getPresentableAttributeType(product.type)}</th>
          <td>{product.label}</td>
        </tr>
      ))}
      <tr className="last:border-b-0 text-xl">
        <th scope="row">Price</th>
        {/* Assume £, use Intl.NumberFormat if we had locales  */}
        <td>£{selectedProduct.price}</td>
      </tr>
    </tbody>
  </table>
);

export default Table;
