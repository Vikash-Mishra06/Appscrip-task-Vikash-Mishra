import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import FilterSidebar from "@/components/FilterSidebar";
import { getProducts } from "@/lib/api";
import "./page.css";

// server component
export default async function Home() {
  // fetching data on server
  const products = await getProducts();

  return (
    <main>

      <Navbar />
      <Header />

      <div className="layout">
        <FilterSidebar />
        <ProductGrid products={products} />
      </div>

    </main>
  );
}