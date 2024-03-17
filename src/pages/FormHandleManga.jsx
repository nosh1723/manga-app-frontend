import Header from '../components/Header'
import { useEffect, useState, useRef, useContext } from 'react'
import { createManga, getManga, updateManga } from '../services'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoadingBar from "react-top-loading-bar"
import { AppContext } from '../contexts'

export default function FormHandleManga() {
    const [data, setData] = useState({})
    const [manga, setManga] = useState({})
    const navigate = useNavigate()
    const path = useLocation().pathname
    const { id } = useParams()
    const ref = useRef(null)
    const context = useContext(AppContext)

    useEffect(() => {
        ref.current.continuousStart()
        const fetchManga = async () => {
            const result = await getManga(id)
            setManga(result)
        }
        fetchManga()
        ref.current.complete()
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const validData = () => {
        if (!data.name && !(path === `/update-manga/${id}`)) {
            toast.error("Input is required!!!")
            return false
        }
        return true
    }
    const handleSubmitForm = async () => {
        try {
            if (validData()) {
                ref.current.continuousStart()
                if (id) {
                    await updateManga(id, data)
                    context.isReRender ? context.setIsReRender(false) : context.setIsReRender(true)
                    navigate("/manga-management")
                    toast.success("Update manga successfully!!")
                } else {
                    const res = await createManga(data)
                    toast.success("Create manga successfully!!")
                }
                ref.current.complete()
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form>
            <LoadingBar color="#2998ff" ref={ref} shadow={true} />
            <Header />
            <div className="space-y-12 container w-full px-8 mx-auto my-10">
                <div className="border-b border-gray-900/10 pb-12">

                    <div className=" border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">{path === `/update-manga/${id}` ? "Edit Manga" : "Create Manga"}</h2>

                        <div className="mt-5 ">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Name</label>
                                <input onChange={handleChange} defaultValue={path === `/update-manga/${id}` ? manga.name : ""} name="name" type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Last chapter</label>
                                <input onChange={handleChange} defaultValue={path === `/update-manga/${id}` ? manga.lastChapter : ""} name="lastChapter" type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">UpdateAt</label>
                                <input onChange={handleChange} defaultValue={path === `/update-manga/${id}` ? manga.updatedAt : ""} name="updatedAt" type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Image Url</label>
                                <input onChange={handleChange} defaultValue={path === `/update-manga/${id}` ? manga.imageUrl : ""} name="imageUrl" type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-6 flex items-center justify-end gap-x-4 ">
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
