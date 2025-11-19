import { useState } from "react";

interface SearchResult {
    id: number;
    title: string;
    price: string;
}

export default function Hero() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [lead, setLead] = useState({ name: "", email: "", message: "" });

    function handleSearch(e: { preventDefault: () => void; }) {
        e?.preventDefault();
        // placeholder: fake results — replace with real API call
        if (query.trim()) {
            setResults([
                { id: 1, title: `${query} — Steel Beam A1`, price: "₹1,250/m" },
                { id: 2, title: `${query} — Reinforced Mesh M2`, price: "₹850/m" },
                { id: 3, title: `${query} — Galvanized Bolt Set`, price: "₹120/set" },
            ]);
        } else {
            setResults([]);
        }
    }

    function submitLead(e: { preventDefault: () => void; }) {
        e.preventDefault();
        // replace with API call
        console.log("Lead submitted:", lead);
        setLead({ name: "", email: "", message: "" });
        alert("Thank you! We'll contact you soon.");
    }

    const sampleProducts = [
        { id: 1, name: "Almira", desc: "Heavy-great quality almira", image: "/assets/1.jpg", price: "₹4,500" },
        { id: 2, name: "Steel Cooler", desc: "Heavy-duty cooler", image: "/assets/2.jpg", price: "₹2,200" },
        { id: 3, name: "Iron Boxes", desc: "Durable Boxes", image: "/assets/3.jpg", price: "₹1,100" },
        { id: 4, name: "Painting", desc: "IS certified safety helmet", image: "/assets/4.jpg", price: "₹850" },
        { id: 5, name: "Iron Frame", desc: "Durable iron frame", image: "/assets/5.jpg", price: "₹2,800" },
        { id: 6, name: "Bench Iron Frame", desc: "Powder-coated bench frame", image: "/assets/6.jpg", price: "₹1,800" },
        { id: 7, name: "Iron Wardrobe", desc: "Stylish and sturdy iron wardrobe", image: "/assets/7.jpg", price: "₹7,500" },
        { id: 8, name: "Rack Shelf", desc: "Rack shelf for storage", image: "/assets/8.jpg", price: "₹2,200" },
        { id: 9, name: "Metal Trunk", desc: "Metal trunk for storage", image: "/assets/9.jpg", price: "₹1,250" },
    ];


    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">

            <main className="flex-1">
                {/* Hero */}
                <section className="bg-linear-to-r from-teal-500 to-teal-200 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                                    Quality Building Supplies — Built to Last
                                </h1>
                                <p className="mt-4 text-white max-w-xl">
                                    BSL provides dependable construction materials, industrial tools, and equipment
                                    with nationwide delivery and bulk discounts for contractors and manufacturers.
                                </p>

                                {/* quick stats */}
                                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                                    <div className="bg-white/10 px-3 py-2 rounded">
                                        <strong className="block text-lg">25K+</strong>
                                        <span className="text-white">Products Sold</span>
                                    </div>
                                    <div className="bg-white/10 px-3 py-2 rounded">
                                        <strong className="block text-lg">30+ yrs</strong>
                                        <span className="text-white">Industry Experience</span>
                                    </div>
                                    <div className="bg-white/10 px-3 py-2 rounded">
                                        <strong className="block text-lg">100%</strong>
                                        <span className="text-white">Quality Assured</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero visual / CTA */}
                            <div className="rounded-xl bg-white/5 p-6 flex flex-col gap-4">
                                {/* ✅ Video showcase */}
                                <div className="h-80 md:h-96 bg-gray-900 rounded-md overflow-hidden shadow-lg">
                                    <img
                                        src="/assets/10.gif"
                                        alt="Hero showcase"
                                        loading="lazy"
                                        className="w-full h-full object-cover block"
                                        onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                                    />
                                </div>

                                
                            </div>

                        </div>

                        {/* search results preview */}
                        {results.length > 0 && (
                            <div className="mt-8 bg-white/5 p-4 rounded-md text-white max-w-4xl">
                                <h3 className="font-semibold">Search results for &ldquo;{query}&rdquo;</h3>
                                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {results.map((r) => (
                                        <li key={r.id} className="bg-white/6 p-3 rounded flex justify-between items-center">
                                            <div>
                                                <div className="font-medium">{r.title}</div>
                                                <div className="text-xs text-gray-300">In stock • Delivery across India</div>
                                            </div>
                                            <div className="text-sm font-semibold">{r.price}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>

                {/* Features */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl text-gray-800 font-bold">Why contractors choose BSL</h2>
                            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Reliable materials, transparent pricing, and fast logistics.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="bg-teal-700 text-white shadow rounded-lg p-5">
                                <h4 className="font-semibold">Quality Materials</h4>
                                <p className="mt-2 text-sm text-white">Sourced from trusted mills and tested for durability.</p>
                            </div>
                            <div className="bg-teal-700 shadow text-white rounded-lg p-5">
                                <h4 className="font-semibold">Bulk Discounts</h4>
                                <p className="mt-2 text-sm text-white">Competitive pricing for large and repeat orders.</p>
                            </div>
                            <div className="bg-teal-700 shadow text-white rounded-lg p-5">
                                <h4 className="font-semibold">Logistics Support</h4>
                                <p className="mt-2 text-sm text-white">Nationwide delivery and freight assistance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products grid */}
                <section className="py-8 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-semibold">Featured Products</h3>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {sampleProducts.map((p) => (
                                <article
                                    key={p.id}
                                    className="bg-white border border-gray-100 rounded-lg p-4 hover:shadow-2xl transform hover:-translate-y-1 transition shadow-md flex flex-col h-full"
                                >
                                    <div className="h-48 md:h-56 rounded mb-3 overflow-hidden bg-gray-100 flex items-center justify-center">
                                        <img
                                            src={p.image || '/assets/placeholder.svg'}
                                            alt={p.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.currentTarget.src = '/assets/placeholder.svg'; }}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">{p.name}</h4>
                                        <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Testimonials & Contact */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Testimonials */}
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-semibold mb-4">Customer Testimonials</h3>
                            <div className="space-y-4">
                                <blockquote className="bg-white p-4 rounded shadow">
                                    <p className="text-gray-700">"BSL delivered on time and the material quality was excellent. We'll order again."</p>
                                    <cite className="block mt-2 text-sm text-gray-500">— Ainul, Contractor</cite>
                                </blockquote>
                                <blockquote className="bg-white p-4 rounded shadow">
                                    <p className="text-gray-700">"Great bulk pricing and the team helped with logistics for our site."</p>
                                    <cite className="block mt-2 text-sm text-gray-500">— A. Gupta, Site Manager</cite>
                                </blockquote>
                                <blockquote className="bg-white p-4 rounded shadow">
                                    <p className="text-gray-700">"Good material quality with great pricing and excellent finishing products"</p>
                                    <cite className="block mt-2 text-sm text-gray-500">— M. Joshi, Contractor</cite>
                                </blockquote>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
