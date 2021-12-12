import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./SearchField.css";

const SearchField = ({ props }) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="tel" placeholder="Search for a country..." {...props} />
    </InputGroup>
  );
};

export default SearchField;
