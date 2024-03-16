import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { deleteManga } from '../services'
import LoadingBar from "react-top-loading-bar"
import Paginate from "../components/Paginate"
import { AppContext } from '../contexts'


export default function MangaManagement() {
    const context = useContext(AppContext)
    const handleDelete = async (id) => {
        try {
            await deleteManga(id)
            context.isReRender ? context.setIsReRender(false) : context.setIsReRender(true)
        } catch (error) {
            console.log(error);
        }
    }
    return (<>
        <LoadingBar color="#2998ff" ref={context.ref} shadow={true} />
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
            <table className="table table-bordered table-hover mt-6">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className='w-[5%]'>#</th>
                        <th scope="col" className='w-[20%]'>Title</th>
                        <th scope="col" className='w-[5%%]'>Last Chapter</th>
                        <th scope="col" className='w-[5%%]'>Updated At</th>
                        <th scope="col" className='w-[20%%]'>Image Url</th>
                        <th scope="col" className='w-[5%]'></th>
                    </tr>
                </thead>
                <tbody>
                    {context.manga.DT && context.manga.DT.map((manga, index) => {
                        return <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{manga.name}</td>
                            <td>{manga.lastChapter}</td>
                            <td>{manga.updatedAt}</td>
                            <td>{manga.imageUrl}</td>
                            <td>
                                <div className=' flex items-center justify-start gap-x-2'>
                                    <Link to={`/update-manga/${manga._id}`} className="text-gray-600 hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                        Edit
                                    </Link>
                                    <Link onClick={() => handleDelete(manga._id)} className="text-gray-600 hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                        Delete
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

            <Paginate setPage={context.setPage} totalpage={context.manga.totalPage} />
        </div>
    </>
    )
}
