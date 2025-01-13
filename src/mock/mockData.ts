import { Product } from "../store/productsSlice";

interface ProductsResponse {
  data: {
    search: {
      total: number;
      products: Product[];
    };
  };
}

export const productsMock: ProductsResponse = {
  data: {
    search: {
      total: 4,
      products: [
        {
          id: "product-id-1",
          name: "Prohibition Liquor Company",
          description: "Prohibition Christmas 500ml",
          image:
            "https://static.qantasloyalty.com/wine-static-assets/tablet/SPHOURKUUSAKE_1.webp",
          tag: "sale",
          wasPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 200,
            },
            pointsPrice: {
              amount: 25000,
            },
          },
          currentPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 119,
            },
            pointsPrice: {
              amount: 15000,
            },
          },
        },
        {
          id: "product-id-2",
          name: "Houraisen",
          description: "Houraisen Beshi Tokubetsu Junmai Sake 720ml",
          image:
            "https://static.qantasloyalty.com/wine-static-assets/tablet/SPHOURKUUSAKE_1.webp",
          tag: "sale",
          wasPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 134,
            },
            pointsPrice: {
              amount: 23470,
            },
          },
          currentPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 129.99,
            },
            pointsPrice: {
              amount: 19900,
            },
          },
        },
        {
          id: "product-id-3",
          name: "Royal Salute",
          description:
            "Royal Salute 21 Year Old Blended Scotch Whisky Miami Polo Edition 700ml (Gift Box)",
          image:
            "https://static.qantasloyalty.com/wine-static-assets/tablet/SPHOURKUUSAKE_1.webp",
          tag: null,
          currentPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 399,
            },
            pointsPrice: {
              amount: 79800,
            },
          },
        },
        {
          id: "product-id-4",
          name: "Aberlour",
          description:
            "Aberlour 16 Year Old Double Cask Single Malt Scotch Whisky 700ml (Gift Tube)",
          image:
            "https://static.qantasloyalty.com/wine-static-assets/tablet/SPHOURKUUSAKE_1.webp",
          tag: null,
          currentPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 199.9,
            },
            pointsPrice: {
              amount: 39980,
            },
          },
        },
        {
          id: "product-id-5",
          name: "Prohibition Liquor Company",
          description: "Prohibition Christmas 500ml",
          image:
            "https://static.qantasloyalty.com/wine-static-assets/tablet/SPHOURKUUSAKE_1.webp",
          tag: "sale",
          wasPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 200,
            },
            pointsPrice: {
              amount: 25000,
            },
          },
          currentPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 119,
            },
            pointsPrice: {
              amount: 15000,
            },
          },
        },
        {
          id: "product-id-6",
          name: "Houraisen",
          description: "Houraisen Beshi Tokubetsu Junmai Sake 720ml",
          image:
            "https://static.qantasloyalty.com/wine-static-assets/tablet/SPHOURKUUSAKE_1.webp",
          tag: "sale",
          wasPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 134,
            },
            pointsPrice: {
              amount: 23470,
            },
          },
          currentPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 129.99,
            },
            pointsPrice: {
              amount: 19900,
            },
          },
        },
        {
          id: "product-id-7",
          name: "Royal Salute",
          description:
            "Royal Salute 21 Year Old Blended Scotch Whisky Miami Polo Edition 700ml (Gift Box)",
          image:
            "https://static.qantasloyalty.com/wine-static-assets/tablet/SPHOURKUUSAKE_1.webp",
          tag: null,
          currentPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 399,
            },
            pointsPrice: {
              amount: 79800,
            },
          },
        },
        {
          id: "product-id-8",
          name: "Aberlour",
          description:
            "Aberlour 16 Year Old Double Cask Single Malt Scotch Whisky 700ml (Gift Tube)",
          image:
            "https://static.qantasloyalty.com/wine-static-assets/tablet/SPHOURKUUSAKE_1.webp",
          tag: null,
          currentPrice: {
            cashPrice: {
              currencyCode: "AUD",
              amount: 199.9,
            },
            pointsPrice: {
              amount: 39980,
            },
          },
        },
      ],
    },
  },
};
