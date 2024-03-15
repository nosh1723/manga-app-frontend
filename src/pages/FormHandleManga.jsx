import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { createManga, getManga, updateManga } from '../services'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function FormHandleManga() {
    const [data, setData] = useState({})
    const [manga, setManga] = useState({})
    const navigate = useNavigate()
    const path = useLocation().pathname
    const { id } = useParams()

    useEffect(() => {
        const fetchManga = async () => {
            const result = await getManga(id)
            setManga(result)
        }
        fetchManga()
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const validData = () => {
        if (!data.name || !data.updatedAt || !data.lastChapter || !data.imageUrl) {
            toast.error("Input is required!!!")
            return false
        }
        return true
    }

    const handleSubmitForm = async () => {
        try {
            if (validData) {
                if (id) {
                    await updateManga(id, data)
                    navigate("/manga-management")
                    toast.success("Update manga successfully!!")
                } else {
                    const res = await createManga(data)
                    toast.success("Create manga successfully!!")
                }
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form>
            <Header />
            <div className="space-y-12 container w-full px-8 m-auto my-10">
                <div className="border-b border-gray-900/10 pb-12">

                    <div className=" border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Create Manga</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleChange}
                                        name="name"
                                        type="text"
                                        defaultValue={path === `/update-manga/${id}` ? manga.name : ""}
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last chapter
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleChange}
                                        name="lastChapter"
                                        type="text"
                                        defaultValue={path === `/update-manga/${id}` ? manga.lastChapter : ""}
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    UpdateAt
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleChange}
                                        name="updatedAt"
                                        type="text"
                                        defaultValue={path === `/update-manga/${id}` ? manga.updatedAt : ""}
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Image Url
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={handleChange}
                                        name="imageUrl"
                                        type="text"
                                        defaultValue={path === `/update-manga/${id}` ? manga.imageUrl : ""}
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-4 mb-10 ">
                    <Link to={"/manga-management"} className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </Link>
                    <Link
                        onClick={handleSubmitForm}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </Link>
                </div>
            </div>
        </form>
    )
}
