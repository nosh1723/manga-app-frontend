import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { deleteManga, getAllManga } from '../services'


export default function MangaManagement() {
    const [manga, setManga] = useState([])
    const [isReRender, setIsReRender] = useState(true)

    useEffect(() => {
        const fetchDataManga = async () => {
            const result = await getAllManga()
            setManga(result)
        }
        fetchDataManga()
    }, [isReRender])

    const handleDelete = async (id) => {
        try {
            await deleteManga(id)
            isReRender ? setIsReRender(false) : setIsReRender(true)
        } catch (error) {
            console.log(error);
        }
    }
    return (<>
        <Header />
        <div className="container w-full m-auto border-gray-200 bg-white px-10 py-10 mt-10 sm:px-6">
            <div className=' flex justify-end w-full'>
                <Link to={`/create-manga`} className="hover:text-black hover:bg-gray-400 bg-gray-700 text-white  rounded-md px-3 py-2 text-sm font-medium md:w-60 md:mb-0 text-center w-full mb-6 ">
                    Create new Manga
                </Link>
            </div>
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                {manga.map((manga) => (
                    <li key={manga.name} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={manga.imageUrl} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{manga.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">C. {manga.lastChapter} - {manga.updatedAt}</p>
                            </div>
                        </div>
                        { }
                        <div className="mt-6 flex items-center justify-end gap-x-2">
                            <Link to={`/update-manga/${manga._id}`} className="text-black hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                Edit
                            </Link>
                            <Link onClick={() => handleDelete(manga._id)} className="text-black hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                Delete
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between border-t pt-6">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        <a
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                            3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                            ...
                        </span>
                        <a
                            href="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            9
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            10
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </>
    )
}
