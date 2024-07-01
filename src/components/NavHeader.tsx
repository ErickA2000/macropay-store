import type { MenuProps } from "antd";
import { Menu } from 'antd';
import { useState } from "react";
import '../styles/navHeader.css'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: "Home",
        key: "home",
    },
    {
        label: "Celulares",
        key: "phones",
    },
    {
        label: "Motocicletas",
        key: "motorcycles",
    },
    {
        label: "Tus préstamos",
        key: "your-loans",
    },
    {
        label: "Tiendas",
        key: "stores",
    },
    {
        label: "Tracking",
        key: "tracking",
    },
    {
        label: "Club Macropay",
        key: "club-macropay",
    }
];

function NavHeader(){
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    }

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
}

export default NavHeader;