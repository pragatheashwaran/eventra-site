import Link from "next/link";

export default function VendorCard({ name, image, price }) {
  return (
    <div className="border rounded-xl shadow-md p-4 text-center">
      <img
        src={image}
        alt={name}
        className="rounded-lg w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mt-3">{name}</h3>
      <p className="text-gray-600">Starting from ₹{price}</p>
      <Link href={`/view-details/${name}`}>
  <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
    View Details
  </button>
</Link>
    </div>
  );
}

