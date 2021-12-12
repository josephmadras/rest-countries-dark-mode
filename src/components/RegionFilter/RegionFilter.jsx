import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import "./RegionFilter.css";

const RegionFilter = ({ props }) => {
  return (
    <Menu {...props}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Filter by Region
      </MenuButton>
      <MenuList>
        <MenuItem>Africa</MenuItem>
        <MenuItem>America</MenuItem>
        <MenuItem>Asia</MenuItem>
        <MenuItem>Europe</MenuItem>
        <MenuItem>Oceania</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default RegionFilter;
