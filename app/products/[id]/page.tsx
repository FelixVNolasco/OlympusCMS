
import Image from 'next/image';
import Link from 'next/link';
import { getProduct } from '../../lib/api/products';

export default async function page({ params }: any) {

  const { id } = params;
  const product = await getProduct(id);
  const { img, title, categories, desc, price, } = product;

  return (
    <div className='lex flex-col mt-6 m-auto sm:mt-6 sm:m-auto md:mt-6 md:m-auto lg:mt-6 lg:m-auto xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 w-5/6  sm:border-slate-400 border-0 sm:border-2 rounded-lg drop-shadow-lg sm:shadow-sm shadow-slate-500 p-10'>
      <main className="grid justify-items-center lg:mt-32 xl-mt-64 mb-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center">
          <div className='flex justify-center'>
            <Image className='rounded-lg shadow-lg' src={img} width={520} height={520} alt="Product Image" />
          </div>
          <div className="flex flex-col">
            <h2 className='text-4xl text-center lg:text-left text-gray-800 font-semibold'>{title}</h2>
            <div className='flex gap-4 mt-1 mb-4'>
              {categories.map((category: string) => {
                return <span key={category} className="px-1 rounded-md bg-gray-300">{category}</span>
              })}
            </div>
            <p className='text-lg'>{desc}</p>
            <div className="flex justify-end mb-4">
              <p className='text-lg font-semibold'>${price}</p>
            </div>
            <div className="flex justify-center items-center gap-4 transition ease-in-out duration-150">
              <Link href={`/products/modify/${product._id}`} className='text-center text-stone-50 bg-gray-700 w-full p-2 rounded-md font-semibold cursor-pointer disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed'>Actualizar</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
