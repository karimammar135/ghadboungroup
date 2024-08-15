import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function getCsrfToken() {
    const cookieValue = document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
    return cookieValue;
}

const categories = {
    "Kitchen": "KITCHEN",
    "Door": "DOOR",
    "Living room": "LIVINGROOM",
    "Bathroom": "BATHROOM",
    "Bedroom": "BEDROOM",
    "Exterior": "EXTERIOR",
    "Other": "OTHER",
}

export default function Uploaddata() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        image: null,
        description: "",
        category: "",
    })

    // Push image to backend to save in database
    const pushImage = async () => {
        setLoading(true)
        // Create form data and append data to it
        const formData = new FormData();
        formData.append("image", data.image);
        formData.append("description", data.description)
        formData.append("category", data.category)
        
        try {
            const response = await fetch('/upload', {
                method: "POST",
                body: formData,
                headers: {
                    'X-CSRFToken': getCsrfToken(),
                }
            })
            const res_data = await response.json()
            setLoading(false)
            console.log(res_data.message)
            if (res_data.success === true){
                navigate("/") 
            } else {
                alert(res_data.message)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <section className='flex flex-col justify-center items-center w-[100%]'>
            <h1 className='w-[95%] flex justify-center items-center text-[32px] border-b border-[#8D8D8D] p-2 mt-2'>
                {!loading && "Upload Image" || "Uploading..."}
            </h1>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col justify-center items-end gap-[20px] pt-[20px] pb-[20px]'>
                <div className='upload-box'>
                    <div className='absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] flex flex-col justify-center items-center'>
                        <i className="fa-solid fa-cloud-arrow-up text-primary text-[45px]"></i>
                        <div className='max-w-[137px]'>
                            {!loading &&
                            <p className='text-[16px] text-center'>Drop file to upload or <span className='text-[16px] text-blue-800'>Browse</span></p>
                            || "Uploading Image..."}
                        </div>
                    </div>
                    <input id="get_image" className='absolute opacity-0 left-0 bottom-0 h-[90%] w-[100%]' onChange={(e) => setData({...data, image: e.target.files[0]})} type='file' accept='image/*' required></input>
                </div>
                {data.image && (
                    <div className='w-[100%] flex flex-col gap-1'>
                        <p className='text-[16px] text-[#344054]'>Selected image: {data.image.name}</p>
                        <img className='w-[388px] max-w-[90vw] rounded' src={URL.createObjectURL(data.image)} alt="Preview"/>
                    </div>
                )}
                <div className='flex flex-col items-start gap-[6px] w-[100%]'>
                    <label className='text-[14px] text-[#344054]' htmlFor="category">Category</label>
                    <select className='w-[100%] text-[#667085] text-[16px] border-[1px] border-slate-300 rounded-full p-3' onChange={(e) => setData({...data, category: e.target.value})} id="category" name="category">
                        <option disabled>Category</option>
                        {
                            Object.keys(categories).map((category, index) => {
                                return <option className='text-[#2a2e36] text-[16px]' key={index} value={categories[category]}>{category}</option>         
                            })
                        }
                    </select>
                    <p className='text-[12px] text-[#344054]'>Category can be changed later</p>
                </div>
                {!loading &&
                <button onClick={pushImage} className='w-fit rounded font-normal text-[16px] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] bg-orange-600 hover:bg-orange-500'>Upload Image</button>
                || <button className='w-fit rounded font-normal text-[16px] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] bg-orange-400'>Uploading...</button>}
            </form>
        </section>
    )
}
