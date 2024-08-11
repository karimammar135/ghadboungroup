import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

function getCsrfToken() {
    const cookieValue = document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
    return cookieValue;
}

const categories = {
    "Kitchen": "KITCHEN",
    "Door": "DOOR",
    "Bathroom": "BATHROOM",
    "Bedroom": "BEDROOM",
    "Exterior": "EXTERIOR",
    "Other": "OTHER",
}

export default function EditImage() {
    const { image_id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({
        image: null,
        title: "",
        description: "",
        category: "",
    })
    const [newData, setNewData] = useState({
        description: "",
        category: "",
    })

    // fetch Image data
    const fetchImage = async () => {
        try{
            const response = await fetch(`/get_image/${image_id}`)
            const response_data = await response.json()
            console.log(response_data)
            setData({
                ...data,
                image: response_data.image_url,
                title: response_data.title,
                description: response_data.description,
                category: response_data.category,
            })
        } catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
        fetchImage()
    }, [])

    // Push image to backend to save in database
    const pushEdit = async () => {
        setLoading(true)
        const newData = {
            description: data.description,
            category: data.category,
        }
        try {
            const response = await fetch(`/edit_image/${image_id}`, {
                method: "PUT",
                body: JSON.stringify(newData),
                headers: {
                    'X-CSRFToken': getCsrfToken(),
                }
            })
            const res_data = await response.json()
            setLoading(false)
            console.log(res_data.message)
            navigate("/")
        } catch (e) {
            console.log(e.message)
        }
    }

    // Delete Image
    const deleteImage = async () => {
        setLoading(true)
        try {
            const response = await fetch(`/delete_image/${image_id}`, {
                method: "DELETE",
                headers: {
                    'X-CSRFToken': getCsrfToken(),
                }
            })
            const data = await response.json()
            setLoading(false)
            console.log(data.message)
            navigate("/")
        } catch (error){
            console.log(error.message)
        }
    }

    return (
        <section className='flex flex-col justify-center items-center w-[100%]'>
            <h1 className='w-[95%] flex justify-center items-center text-[32px] border-b border-[#8D8D8D] p-2 mt-2'>
                {!loading && "Edit Image" || "Processing..."}
            </h1>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col justify-center items-end gap-[20px] pt-[20px] pb-[20px]'>
                {data.image && (
                    <div className='w-[100%] flex flex-col gap-1'>
                        <p className='text-[16px] text-[#344054]'>Selected image:</p>
                        <img className='w-[388px] max-w-[90vw] rounded' src={data.image} alt="Preview" />
                    </div>
                ) || <Skeleton height="200px" width="200px"></Skeleton>}
                <div className='flex flex-col items-start gap-[6px] w-[100%]'>
                    <label className='text-[14px] text-[#344054]' htmlFor="category">Category</label>
                    <select className='w-[100%] text-[#667085] text-[16px] border-[1px] border-slate-300 rounded-full p-3' onChange={(e) => setData({...data, category: e.target.value})} id="category" name="category">
                        <option disabled>Category</option>
                        {
                            Object.keys(categories).map((category, index) => {
                                if(categories[category] === data.category) {
                                    return <option key={index} value={categories[category]} selected>{category}</option>
                                } else {
                                    return <option key={index} value={categories[category]}>{category}</option>
                                }
                            })
                        }
                    </select>
                </div>
                {!loading && <>
                    <button onClick={pushEdit} className='w-[100%] rounded font-normal text-[16px] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] bg-orange-600 hover:bg-orange-500'>Edit Image</button>
                    <button onClick={deleteImage} className='w-[100%] rounded font-normal text-[16px] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] bg-red-600 hover:bg-red-500'>Delete Image</button>
                </> || <>
                <button className='w-[100%] rounded font-normal text-[16px] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] bg-orange-400'>{!loading && "Edit Image" || "Processing..."}</button>
                <button className='w-[100%] rounded font-normal text-[16px] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] bg-red-400'>{!loading && "Delete Image" || "Processing..."}</button>
                </>
                }
            </form>
        </section>
    )
}
