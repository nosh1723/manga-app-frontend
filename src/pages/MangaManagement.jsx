import Header from '../components/Header'
import { Link } from 'react-router-dom'
import _ from 'lodash'
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
    const handleSearch = _.debounce(e => {
        context.setSearchValue(e.target.value)
    }, 600)
    return (<>
        <LoadingBar color="#2998ff" ref={context.ref} shadow={true} />
        <Header />
        <div className="container w-full m-auto border-gray-200 bg-white px-10 py-10 mt-10 sm:px-6">
            <div class="pt-2 w-max relative text-gray-600">
                <input onChange={handleSearch} className="border-2 border-gray-300 bg-white h-10 pl-3 pr-14 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search Manga Name " />
                <div className="absolute opacity-60 right-0 top-0 mt-[1.25rem] mr-4">
                    <svg className="text-gray-600 stroke-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </div>
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
                    })
                    }
                </tbody>
            </table>

            <Paginate setPage={context.setPage} totalpage={context.manga.totalPage} />
            <div className=' flex justify-end w-full '>
                <Link to={`/create-manga`} className="hover:text-black hover:bg-gray-400 bg-gray-700 text-white  rounded-md px-3 py-2 text-sm font-medium md:w-60 md:mb-0 text-center w-full mb-6 ">
                    Create new Manga
                </Link>
            </div>
        </div>
    </>
    )
}
