import { Product, Attribute } from "./types";

/**
 * Get all unique options for each attribute
 */
export const getAttributesWithOptions = (products: Product[]) => {
  const attributeMap = new Map<
    Attribute["type"],
    Map<Attribute["value"], Attribute>
  >();

  products.forEach((product) => {
    product.attributes.forEach((attribute) => {
      if (!attribute.selectable) return;

      const optionsMap =
        attributeMap.get(attribute.type) ??
        new Map<Attribute["value"], Attribute>();

      optionsMap.set(attribute.value, attribute);
      attributeMap.set(attribute.type, optionsMap);
    });
  });

  const result: [Attribute["type"], Attribute[]][] = [];

  attributeMap.forEach((optionsMap, attributeType) => {
    const optionsArray: Attribute[] = [];

    optionsMap.forEach((option) => {
      optionsArray.push(option);
    });

    result.push([attributeType, optionsArray]);
  });

  return result;
};

export const getPresentableAttributeType = (attributeType: Attribute["type"]) =>
  attributeType.split("-").join(" ");

export const getSelectedProduct = (
  products: Product[],
  searchParams: URLSearchParams
) => {
  return products.find((product) => {
    const selectableAttributes = product.attributes.filter(
      (attributes) => attributes.selectable
    );

    return selectableAttributes.every((attribute) => {
      return searchParams.get(attribute.type) === attribute.value;
    });
  });
};
