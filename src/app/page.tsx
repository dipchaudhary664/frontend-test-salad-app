import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Header from "@/components/Header";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <Banner />
      <Category />
      <Product />
    </main>
  );
}
