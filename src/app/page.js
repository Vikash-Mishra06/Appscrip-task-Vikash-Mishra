import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import FilterLayout from "@/components/FilterLayout";
import { getProducts } from "@/lib/api";
import "./page.css";

// server component
export default async function Home() {
  // fetching data on server
  const products = await getProducts();

  return (
    <main>

      {/* basic schema for seo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Product Listing Page",
          }),
        }}
      />

      <Navbar />
      <Header />

      {/* filter + grid handled inside client component */}
      <FilterLayout products={products} />

    </main>
  );
}