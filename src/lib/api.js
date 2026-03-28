// function to fetch products from api
export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}