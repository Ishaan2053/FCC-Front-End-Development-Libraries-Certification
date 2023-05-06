import Cards from "@/components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Calculator from "./calculator/page";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
      <section>
        <Cards />
      </section>

      <Footer />
    </div>
  );
}
