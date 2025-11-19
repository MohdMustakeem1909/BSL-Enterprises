import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

const sampleProducts = [
    { id: 1, name: "Almira", desc: "Heavy-great quality almira", image: "/assets/1.jpg" },
    { id: 2, name: "Steel Cooler", desc: "Heavy-duty cooler", image: "/assets/2.jpg" },
    { id: 3, name: "Iron Boxes", desc: "Durable Boxes", image: "/assets/3.jpg" },
    { id: 4, name: "Painting", desc: "Almira, Iron Box, Bench, etc.", image: "/assets/4.jpg" },
    { id: 5, name: "Iron Frame", desc: "Durable iron frame", image: "/assets/5.jpg" },
    { id: 6, name: "Bench Iron Frame", desc: "Powder-coated bench frame", image: "/assets/6.jpg" },
    { id: 7, name: "Iron wardrobe", desc: "Stylish and sturdy iron wardrobe", image: "/assets/7.jpg" },
    { id: 8, name: "Rack Shelf", desc: "Rack shelf for storage", image: "/assets/8.jpg" },
    { id: 9, name: "Metal Trunk", desc: "Metal trunk for storage", image: "/assets/9.jpg" },
];

export default function Search() {
    const q = useQuery().get("q") || "";
    const query = q.trim().toLowerCase();

    const results = useMemo(() => {
        if (!query) return [];
        return sampleProducts.filter((p) => {
            return (
                p.name.toLowerCase().includes(query) ||
                p.desc.toLowerCase().includes(query)
            );
        });
    }, [query]);

    return (
        <div className="min-h-screen flex flex-col bg-linear-to-r from-teal-500 to-teal-200">
            <Header />
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">Search Results</h1>
                    <p className="text-base text-gray-600">Results for: <span className="font-semibold text-indigo-700">{q}</span></p>
                </div>

                {query === "" ? (
                    <div className="bg-white rounded-xl shadow p-8 text-center">
                        <p className="text-gray-700 text-lg">Enter a search query from the header to find products.</p>
                    </div>
                ) : results.length === 0 ? (
                    <div className="bg-white rounded-xl shadow p-8 text-center">
                        <p className="text-gray-700 text-lg">No products found for “{q}”. Try a different term.</p>
                    </div>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {results.map((p) => (
                            <li key={p.id} className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center hover:shadow-2xl transition h-full w-full">
                                <div className="w-40 h-40 md:w-48 md:h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                                    <img
                                        src={p.image || '/assets/placeholder.svg'}
                                        alt={p.name}
                                        className="object-cover w-full h-full"
                                        onError={e => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                                    />
                                </div>
                                <h3 className="font-semibold text-lg text-gray-900 text-center">{p.name}</h3>
                                <p className="text-sm text-gray-600 mt-1 text-center">{p.desc}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
            <Footer />
        </div>
    );
}
