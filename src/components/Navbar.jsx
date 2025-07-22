import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-500 p-4 lg:text-lg justify-center gap-4">
        <NavbarItem title="Trending" param="fetchtrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
