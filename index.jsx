import Navbar from '../components/Navbar'
import Hero from '../components/Hero'; 
import VendorCard from '../components/VendorCard'
import Footer from '../components/Footer'

export default function Home() {
  const vendors = [
    { name: "Banquet Hall", image: "/images/Banquets hall.jpg", price: 50000 },
    { name: "Dream Decorators", image: "/images/dream decorators.jpeg", price: 10000 },
    { name: "Photography", image: "/images/magic moments photograpy.jpeg", price: 10000 },
    { name: "Makeup Artists", image:"/images/makeup.jpeg", price: 8000 },
     { name: "cattering", image:"/images/cattering.jpeg", price: 20000 },
     { name: "Invetations", image:"/images/invetations.jpeg", price: 20000 }
  ]
  

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Hero />
        <section className="py-12 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Popular Vendors</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {vendors.map((v, i) => (
              <VendorCard key={i} name={v.name} image={v.image} price={v.price} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
