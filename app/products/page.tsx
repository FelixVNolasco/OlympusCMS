import { ProductCard } from '../components/Cards/ProductCard';

const getHomeProducts = () => {
  return fetch("https://olympus-backend.vercel.app/api/products", { cache: "no-store" })
    .then((res) => res.json())
}

export default async function HomeProducts() {
  const homeProducts = await getHomeProducts();

  return (
    <div className="flex flex-col mt-6 m-auto sm:mt-6 sm:m-auto md:mt-6 md:m-auto lg:mt-6 lg:m-auto xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 w-5/6  sm:border-slate-400 border-0 sm:border-2 rounded-lg drop-shadow-lg sm:shadow-sm shadow-slate-500 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between">
        {homeProducts.map((product: any) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  )
}