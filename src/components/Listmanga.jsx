import { useContext } from "react"
import { Link } from "react-router-dom"
import LoadingBar from "react-top-loading-bar"
import { AppContext } from '../contexts'
import Paginate from "./Paginate"


export default function Listmanga() {
    const context = useContext(AppContext)

    return (
        <div className="bg-white">
            <LoadingBar color="#2998ff" ref={context.ref} shadow={true} />
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Manga List</h2>

                <Link className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
                    {context.manga.DT && context.manga.DT.map((product) => (
                        <div key={product.name} className="group relative w-[10rem]">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                                <img
                                    src={product.imageUrl}
                                    className="min-h-[260px] w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 w-full flex justify-between">
                                <div className="w-full">
                                    <h3 className="text-sm text-gray-700 font-bold ">
                                        <a >
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            <p className="truncate w-full">{product.name}</p>
                                        </a>
                                    </h3>
                                    <div className="flex justify-between items-center mt-1">
                                        <span className=" text-sm text-gray-500">{product.updatedAt}</span>
                                        <span className="text-sm font-medium text-gray-900">C. {product.lastChapter}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Link>
                <div className="mt-5"></div>
                <Paginate setPage={context.setPage} totalpage={context.manga.totalPage} />
            </div>
        </div>
    )
}