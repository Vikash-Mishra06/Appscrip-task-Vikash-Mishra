import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProductLoaderClient from "@/components/ProductLoaderClient";
import { getProducts } from "@/lib/api";
import "./page.css";
import 'remixicon/fonts/remixicon.css';
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

// server component
export default async function Home() {
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

      {/* filter + grid with client fallback */}
      <ProductLoaderClient products={products} />

      <Footer />
    </main>
  );
}

