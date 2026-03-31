const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function getProducts() {
  try {
    const url = `${API_BASE}/api/products`;
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  } catch (err) {
    console.log("API ERROR:", err);
    return [];
  }
}

export function clientGetProducts() {
  return fetch("/api/products")
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    })
    .catch(err => {
      console.log("Client API ERROR:", err);
      return [];
    });
}
