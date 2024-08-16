import { Attribute, HandleOptionClick } from "../../types";

export interface SingleSelectProps {
  attributeOptions: Attribute[];
  onOptionClick: HandleOptionClick;
  selectedOptions: { [key: Attribute["type"]]: Attribute["value"] };
}
