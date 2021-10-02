import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

// get localStorage data data
const useCards = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const saveProduct = getStoredCart();
            const storedCard = [];
            for (const key in saveProduct) {
                const addeproduct = products.find(product => product.key === key);
                if (addeproduct) {
                    const quantity = saveProduct[key];
                    addeproduct.quantity = quantity;
                    storedCard.push(addeproduct);
                }
            }
            setCart(storedCard);
        }
    }, [products]);
    return [cart, setCart];
}

export default useCards;