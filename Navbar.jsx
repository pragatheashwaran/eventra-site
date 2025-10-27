export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Eventra</h1>
      <ul className="flex gap-6">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Vendors</li>
        <li className="cursor-pointer">Login</li>
      </ul>
    </nav>
  )
}
