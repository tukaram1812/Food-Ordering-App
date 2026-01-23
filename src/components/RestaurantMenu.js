import Shimmer from "./Shimmer";
import { useParams } from "react-router";
// import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  console.log(resInfo);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const Categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(Categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* Categories accordians*/}
      {Categories.map((category, index) => (
        // controllled components

        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         "https://namastedev.com/api/v1/listRestaurantMenu/123456"
//       );
//       const json = await data.json();
//       console.log("API response:", json);
//       setResInfo(json.data);
//     } catch (error) {
//       console.error("Failed to fetch menu:", error);
//     }
//   };

//   if (!resInfo) return <Shimmer />;

//   const cardInfo = resInfo?.cards?.[2]?.card?.card?.info;

//   if (!cardInfo) {
//     return (
//       <div className="menu">
//         <h1>Menu not available</h1>
//       </div>
//     );
//   }

//   const { name, cuisines, costForTwoMessage } = cardInfo;

//   const { itemCards } =
//     resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//       ?.card;

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>
//         {cuisines?.join(", ") ?? "Cuisines not listed"} -{" "}
//         {costForTwoMessage ?? "Cost info missing"}
//       </p>
//       <ul>
//         <li>Biryani</li>
//         <li>Burgers</li>
//         <li>Diet Coke</li>
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
