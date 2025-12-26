export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
}) {
  const categories = ["All", "Starters", "Main Course", "Drinks", "Dessert"];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        {categories.map(cat => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}
