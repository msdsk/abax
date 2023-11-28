import clsx from "clsx"

type Props = {
  open: boolean
}


const categories = [
  'Products', 'Categories', 'Community', 'Marketplace'
]


function MenuCategories({ open }: Props) {

  return <div className={clsx("absolute bg-white border border-gray-300 w-screen h-screen top-16 transition-transform  lg:border-0 lg:flex lg:static lg:translate-x-0 lg:w-auto lg:h-auto", {
    '-translate-x-full': !open,
  })}>
    {categories.map((category) => (
      <a href="#" key={category} className="block px-4 py-2 text-gray-600 hover:text-orange-600">{category}</a>
    ))}
  </div>
}

export default MenuCategories