import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import '../../styles/dropdownSort.css';

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Mejores reviews",
  },
  {
    key: "2",
    label: "Precio mas alto",
  },
  {
    key: "3",
    label: "Precio mas bajo",
  },
];

function DropdownSort() {
    const firstItem = items && items[0] as Item;
    const defaultLabel = firstItem ? firstItem.label : "Seleccione";
    
    const [currentItemLabel, setCurrentItemLabel] = useState(defaultLabel);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const item = filterItemByKey(e.key) as Item;
        setCurrentItemLabel(item.label);
        
    }

    const filterItemByKey = (key: string) => {
        if(items){
            for(const item of items) {
                if(item && item.key === key){
                    return item;
                }
            }
        }
    }

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {currentItemLabel}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

export default DropdownSort;

interface Item {
    key: string;
    label: string;
}