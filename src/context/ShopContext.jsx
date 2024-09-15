import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartitems, setcartitems] = useState({});
  const [cou, setcou] = useState(0);

  const navigate = useNavigate()

  const addToCart = (itemId, size) => {
    let copyItem = structuredClone(cartitems);

    if (!size) {
      toast.error("Select a size");
      return;
    }

    if (copyItem[itemId]) {
      if (copyItem[itemId][size]) {
        copyItem[itemId][size] += 1;
      } else {
        copyItem[itemId][size] = 1;
      }
    } else {
      copyItem[itemId] = {};
      copyItem[itemId][size] = 1;
    }

    setcartitems(copyItem);
  };

  const getCartCount = () => {
    let count = 0;
    for (const items in cartitems) {
      for (const item in cartitems[items]) {
        if (cartitems[items][item] > 0) {
          count += cartitems[items][item]; 
        }
      }
    }
    return count;
  };


  const updatedCart = async(itemid,size,quantity) => {
            let cartData = structuredClone(cartitems);

            cartData[itemid][size] = quantity;
            setcartitems(cartData);
  }


  const cartTotal = () => {

        let amt = 0;
        for(const items in cartitems){
            let itemInfo = products.find((prod) => prod._id === items)
            for(const item in cartitems[items]){
                    try{
                        if(cartitems[items][item]){
                            amt = amt + itemInfo.price*cartitems[items][item];
                        }
                    }catch(err){
                        console.log(err);
                        
                    }
            }
        }

        return amt
  }

  useEffect(() => {
    const count = getCartCount();
    setcou(count);
  }, [cartitems]); 

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    cartitems,
    addToCart,
    cou, 
    updatedCart,
    cartTotal,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
