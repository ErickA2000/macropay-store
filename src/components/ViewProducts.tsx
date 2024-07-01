import CardPRoduct from "./atoms/CardProduct";
import Search from "./atoms/Search";
import { devices } from "../constants/devices";

function ViewProducts(){
    return (
        <div>
            <Search/>

            <CardPRoduct device={devices[0]}/>
        </div>
    );
}

export default ViewProducts;