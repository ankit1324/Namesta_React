import React from "react";
import ReactDOM from "react-dom/client";

function Headers() {
  const widthImg = "10%";
  return (
    <div className="Navbar">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/delivery-service-with-mask-design_23-2148504209.jpg?size=626&ext=jpg&ga=GA1.1.2068682575.1709405903&semt=ais"
          alt=""
          width={widthImg}
        />
      </div>
      <div className="searchContainer">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" className="input" />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>History</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const resList = {
  restaurants: [
    {
      info: {
        id: "254108",
        name: "McDonald's",
        cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
        locality: "Sector 22",
        areaName: "Sector 22",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food"],
        avgRating: 4.3,
        parentId: "630",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 45,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 00:30:00", opened: true },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-sector-22-chandigarh-254108",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "79879",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Elante Mall",
        areaName: "South Chd",
        costForTwo: "₹400 for two",
        cuisines: ["American"],
        avgRating: 4.1,
        parentId: "166",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 57,
          lastMileTravel: 4.9,
          serviceability: "SERVICEABLE",
          slaString: "55-60 mins",
          lastMileTravelString: "4.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹200",
          discountTag: "GET",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-elante-mall-south-chd-chandigarh-79879",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "42803",
        name: "Subway",
        cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
        locality: "Sector 22",
        areaName: "Sector 22",
        costForTwo: "₹350 for two",
        cuisines: [
          "Fast Food",
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        parentId: "2",
        avgRatingString: "4.1",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:58:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹175 OFF",
          subHeader: "ABOVE ₹999",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-sector-22-chandigarh-42803",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "78326",
        name: "Chaayos Chai+Snacks=Relax",
        cloudinaryImageId: "cace805a6ba74137571d0f7ac92302b1",
        locality: "Sector 22",
        areaName: "Sector 22",
        costForTwo: "₹250 for two",
        cuisines: [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets",
        ],
        avgRating: 4.4,
        parentId: "281782",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 00:00:00", opened: true },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹799",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-sector-22-chandigarh-78326",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "39978",
        name: "Sindhi Sweets",
        cloudinaryImageId: "ac3df9254bed073f249ea176ca62265e",
        locality: "Sector 17",
        areaName: "Sector 17",
        costForTwo: "₹300 for two",
        cuisines: [
          "North Indian",
          "Sweets",
          "South Indian",
          "Chinese",
          "Chaat",
          "Street Food",
          "Continental",
          "Italian",
          "Bakery",
          "Thalis",
          "Beverages",
          "Desserts",
        ],
        avgRating: 4.5,
        parentId: "4536",
        avgRatingString: "4.5",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 21:30:00", opened: true },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/sindhi-sweets-sector-17-chandigarh-39978",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "221310",
        name: "Sweet Truth - Cake and Desserts",
        cloudinaryImageId: "81cf6bfe2760a45a0caf2e28716ca4d7",
        locality: "Chandigarh Railway Station",
        areaName: "Sector 22",
        costForTwo: "₹450 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.5,
        parentId: "4444",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:59:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹80 OFF",
          subHeader: "ABOVE ₹200",
          discountTag: "GET",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-railway-station-sector-22-chandigarh-221310",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "221311",
        name: "The Good Bowl",
        cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
        locality: "Railway Station Chandigarh",
        areaName: "Sector 22",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.4,
        parentId: "7918",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:59:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹200",
          discountTag: "GET",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-good-bowl-railway-station-sector-22-chandigarh-221311",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "41298",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Piccadily Square Mall, Chandigarh",
        areaName: "Sector 34",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.3,
        parentId: "547",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 01:00:00", opened: true },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-piccadily-square-mall-sector-34-chandigarh-41298",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "199654",
        name: "Keventers - Milkshakes & Desserts",
        cloudinaryImageId: "1c8517dc925655dfff4d3617bd2191a5",
        locality: "Aroma Complex",
        areaName: "Sector 22",
        costForTwo: "₹200 for two",
        cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
        avgRating: 4.2,
        veg: true,
        parentId: "268997",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:59:00", opened: true },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹600",
          discountTag: "GET",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-aroma-complex-sector-22-chandigarh-199654",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "106055",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "fco6bt4rjqr7hztnqwxo",
        locality: "Sec 27",
        areaName: "Sector 27",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.4,
        parentId: "4961",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 00:55:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹200",
          discountTag: "GET",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-sec-27-sector-27-chandigarh-106055",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "435686",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "South Chd",
        areaName: "Sector 26",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        parentId: "721",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 51,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 04:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹179" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-south-chd-sector-26-chandigarh-435686",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "300008",
        name: "Smoke House Deli",
        cloudinaryImageId: "zvnxnjixg7tgpffidxvp",
        locality: "Sector 7",
        areaName: "Sector 7",
        costForTwo: "₹800 for two",
        cuisines: [
          "American",
          "Italian",
          "Continental",
          "Fast Food",
          "Salads",
          "Healthy Food",
          "Pizzas",
          "Desserts",
        ],
        avgRating: 4.1,
        parentId: "874",
        avgRatingString: "4.1",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 52,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 00:45:00", opened: true },
        badges: {
          imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹200",
          discountTag: "GET",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/smoke-house-deli-sector-7-chandigarh-300008",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "40897",
        name: "Captain Sam's Pizza",
        cloudinaryImageId: "e1a0833bdc40ad1f6fe3185f102c9382",
        locality: "Madhya Marg",
        areaName: "Sec 26 Chd",
        costForTwo: "₹200 for two",
        cuisines: [
          "Pizzas",
          "Italian",
          "Beverages",
          "Desserts",
          "Fast Food",
          "Snacks",
          "Pastas",
        ],
        avgRating: 4.3,
        veg: true,
        parentId: "382786",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 45,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 04:00:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "EVERY ITEM", subHeader: "@ ₹199" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/captain-sams-pizza-madhya-marg-sec-26-chd-chandigarh-40897",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "221306",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Railway Station Chandigarh",
        areaName: "Sector 22",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.4,
        parentId: "21809",
        avgRatingString: "4.4",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 51,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:59:00", opened: true },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹349",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-railway-station-sector-22-chandigarh-221306",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "292093",
        name: "Uttam's Bakery & Restaurant",
        cloudinaryImageId: "v0ezhsxmmgwrfks2rpvs",
        locality: "Sector 46",
        areaName: "Sector 46",
        costForTwo: "₹200 for two",
        cuisines: ["North Indian", "Pizzas", "Bakery", "Punjabi"],
        avgRating: 4.4,
        parentId: "16361",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 46,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/uttams-bakery-and-restaurant-sector-46-chandigarh-292093",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "333405",
        name: "BOSS Burger",
        cloudinaryImageId: "ssto9tkiu7wbblytfidw",
        locality: "Madhya Marg",
        areaName: "Sector 7",
        costForTwo: "₹500 for two",
        cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
        avgRating: 4.1,
        parentId: "8594",
        avgRatingString: "4.1",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 00:57:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/boss-burger-madhya-marg-sector-7-chandigarh-333405",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "67938",
        name: "Social",
        cloudinaryImageId: "lnp9blusapv5d8kpdfnn",
        locality: "Sector 7",
        areaName: "Sector 7",
        costForTwo: "₹600 for two",
        cuisines: [
          "North Indian",
          "Chinese",
          "Fast Food",
          "Biryani",
          "Pizzas",
          "Salads",
          "Kebabs",
          "Juices",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        parentId: "2146",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-04 00:58:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/social-sector-7-chandigarh-67938",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "50227",
        name: "The Coffee Bean & Tea Leaf",
        cloudinaryImageId: "gxqe1tm1tlwnphpgfcmr",
        locality: "Sector 22",
        areaName: "Sector 22",
        costForTwo: "₹700 for two",
        cuisines: ["Beverages", "Snacks"],
        avgRating: 4.5,
        parentId: "5171",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 1,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "1.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:30:00", opened: true },
        badges: {
          imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-coffee-bean-and-tea-leaf-sector-22-chandigarh-50227",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "41296",
        name: "Nando's",
        cloudinaryImageId: "3b6787b39dbda785f5a0604a4d7672bc",
        locality: "Industrial Area Phase 1",
        areaName: "Industrial Area Phase I",
        costForTwo: "₹350 for two",
        cuisines: ["Portuguese", "Burgers", "Fast Food"],
        avgRating: 4.3,
        parentId: "2155",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 72,
          lastMileTravel: 4.9,
          serviceability: "SERVICEABLE",
          slaString: "70-75 mins",
          lastMileTravelString: "4.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 23:30:00", opened: true },
        badges: {
          imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹200",
          discountTag: "GET",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/nandos-industrial-area-phase-1-industrial-area-phase-i-chandigarh-41296",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "41553",
        name: "Cinnabon",
        cloudinaryImageId: "25a9d0e3ddccdd384d601fa98622ac7d",
        locality: "Elante Mall",
        areaName: "Industrial Area Phase I",
        costForTwo: "₹450 for two",
        cuisines: ["Snacks"],
        avgRating: 4.1,
        parentId: "1875",
        avgRatingString: "4.1",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 74,
          lastMileTravel: 4.9,
          serviceability: "SERVICEABLE",
          slaString: "70-75 mins",
          lastMileTravelString: "4.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2024-03-03 22:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹50 OFF",
          subHeader: "ABOVE ₹250",
          discountTag: "GET",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/cinnabon-elante-mall-industrial-area-phase-i-chandigarh-41553",
        type: "WEBLINK",
      },
    },
  ],
  theme: "Restaurant_Group_WebView_SEO_PB_Theme",
  widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
  style: {
    width: {
      type: "TYPE_RELATIVE",
      value: 0.41111112,
      reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
    },
    height: {
      type: "TYPE_RELATIVE",
      value: 0.7027027,
      reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
    },
    layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
  },
  collectionId: "84124",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <>
      <div className="card">
        <img
          className="card-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
          alt=""
        />
        <div className="card-info">
          <p className="text-title">{resData.info.name}</p>
          <p className="text-body">{resData.info.cuisines}</p>
        </div>
        <div className="card-footer">
          <span className="text-title">₹{resData.info.costForTwo}</span>
          <div className="card-button">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
              <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
              <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const RestaurantList = () => {
  return (
    <>
      <div className="card-container">
        {resList.restaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Headers />
      <RestaurantList />
    </>
  );
};

console.log(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(<App />);
