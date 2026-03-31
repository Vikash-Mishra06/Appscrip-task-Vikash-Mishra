// Server-side API route to proxy requests to fakestoreapi
// Includes fallback mock data if the external API is unavailable

const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: "Summer Women's Fashion",
    price: 29.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23f0f0f0' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3ESummer Fashion%3C/text%3E%3C/svg%3E",
    description: "Beautiful summer collection for women"
  },
  {
    id: 2,
    title: "Premium Casual Shirt",
    price: 39.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23e8e8e8' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3ECasual Shirt%3C/text%3E%3C/svg%3E",
    description: "Comfortable and stylish casual shirt"
  },
  {
    id: 3,
    title: "Elegant Dress",
    price: 49.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23f5f5f5' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EElegant Dress%3C/text%3E%3C/svg%3E",
    description: "Perfect for any occasion"
  },
  {
    id: 4,
    title: "Classic Jeans",
    price: 59.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23efefef' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EClassic Jeans%3C/text%3E%3C/svg%3E",
    description: "Timeless denim classic"
  },
  {
    id: 5,
    title: "Lightweight Jacket",
    price: 69.99,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23f2f2f2' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EJacket%3C/text%3E%3C/svg%3E",
    description: "Perfect layer for any season"
  },
];

export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      timeout: 8000,
      headers: {
        'Accept': 'application/json',
      }
    });

    if (res.ok) {
      const products = await res.json();
      return Response.json(products, {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Content-Type': 'application/json',
        }
      });
    }
    
    // If external API fails, return fallback data
    console.warn(`Fake Store API unavailable (status: ${res.status}), using fallback data`);
    return Response.json(FALLBACK_PRODUCTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=60',
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error("Products API error:", error.message);
    // Return fallback data on any error
    return Response.json(FALLBACK_PRODUCTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=60',
        'Content-Type': 'application/json',
      }
    });
  }
}
