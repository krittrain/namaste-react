
const resList = [
    {
      type: "restaurant",
      data: {
        type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        id: "25620",
        name: "KFC",
        city: "1",
        area: " BTM layout",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG",
        address:
          "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
        locality: "Intermediate Ring Road",
        areaName: "Ejipura",
        costForTwo: "40000",
        costForTwoMessage: "₹400 FOR TWO",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.3,
        deliveryTime: 36,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        id: "656392",
        name: "Subway",
        city: "1",
        area: "Koramangala",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/93b4a909-a1f1-4eb3-9e07-34a52becf7fa_656392.jpg",
        address:
          "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
        locality: "1st Block",
        areaName: "Koramangala",
        costForTwo: "35000",
        costForTwoMessage: "₹350 FOR TWO",
        cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4.3,
        deliveryTime: 36,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        id: "192021",
        name: "Brew Meister",
        city: "1",
        area: "Marathahalli",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/93b4a909-a1f1-4eb3-9e07-34a52becf7fa_656392.jpg",
        address: "No. 55, Outer Ring Road, Marathahalli, Bangalore - 560037",
        locality: "Outer Ring Road",
        areaName: "Marathahalli",
        costForTwo: "60000",
        costForTwoMessage: "₹600 FOR TWO",
        cuisines: ["South Indian", "North Indian"],
        avgRating: 4.5,
        deliveryTime: 40,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        id: "5934",
        name: "Burger King",
        city: "1",
        area: " BTM layout",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
        address:
          "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "40000",
        costForTwoMessage: "₹400 FOR TWO",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        deliveryTime: 22,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        id: "25620",
        name: "The Belgian Waffle Co.",
        city: "1",
        area: " BTM layout",
        cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
        address:
          "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
        locality: "K.H.B Colony",
        areaName: "Koramangala",
        costForTwo: "20000",
        costForTwoMessage: "₹200 FOR TWO",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.3,
        deliveryTime: 36,
      },
    },
      {
        type: "restaurant",
        data: {
          type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          id: "54321",
          name: "Domino's Pizza",
          city: "1",
          area: "HSR layout",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/19/d34d7f08-005c-47d7-abcb-51e7dd790e09_23847.jpg",
          address: "No. 45, Sector 3, HSR Layout, Bangalore - 560102",
          locality: "Sector 3",
          areaName: "HSR Layout",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Pizzas", "Italian"],
          avgRating: 4.2,
          deliveryTime: 30,
        },
      },
      {
        type: "restaurant",
        data: {
          type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          id: "654321",
          name: "McDonald's",
          city: "1",
          area: "Jayanagar",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
          address: "No. 12, 4th Block, Jayanagar, Bangalore - 560011",
          locality: "4th Block",
          areaName: "Jayanagar",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Burgers", "Fast Food"],
          avgRating: 4.1,
          deliveryTime: 25,
        },
      },
      {
        type: "restaurant",
        data: {
          type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          id: "78910",
          name: "Pizza Hut",
          city: "1",
          area: "Indiranagar",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
          address: "No. 78, 100 Feet Road, Indiranagar, Bangalore - 560038",
          locality: "100 Feet Road",
          areaName: "Indiranagar",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Pizzas", "Italian", "Beverages"],
          avgRating: 4.4,
          deliveryTime: 28,
        },
      },
      {
        type: "restaurant",
        data: {
          type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          id: "161718",
          name: "Nandhana Palace",
          city: "1",
          area: "Bannerghatta Road",
          cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
          address: "No. 28, Bannerghatta Road, Bangalore - 560076",
          locality: "Arekere",
          areaName: "Bannerghatta Road",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Andhra", "Biryani"],
          avgRating: 4.6,
          deliveryTime: 40,
        },
      },
      {
        type: "restaurant",
        data: {
          type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          id: "131415",
          name: "Wow! Momo",
          city: "1",
          area: "MG Road",
          cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
          address: "No. 14, Church Street, MG Road, Bangalore - 560001",
          locality: "Church Street",
          areaName: "MG Road",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Momos", "Tibetan"],
          avgRating: 3.3,
          deliveryTime: 18,
        },
      },
  ];

  export default resList;
