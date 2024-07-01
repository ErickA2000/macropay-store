import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../../styles/search.css";

const { Option } = Select;

const selectAfter = (
  <Select defaultValue="all" className="options">
    <Option value="all">Todas la categorías</Option>
  </Select>
);

function Search() {
  return (
    <Input
      prefix={<SearchOutlined />}
      placeholder="Encuentra el producto que necesitas"
      addonAfter={selectAfter}
      className="search"
    />
  );
}

export default Search;
