import React, {useState, useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './static/css/searchEngine.css';

const searchOptions = {
    "Email": {"type": "scroll", "content": ['contactus', 'email']},
    "Phone number": {"type": "scroll", "content": ['contactus', 'phone_number']},
    "Location": {"type": "scroll", "content": ['contactus', 'location']},
    "Address": {"type": "scroll", "content": ['contactus', 'address']},
    "Interior & Exterior": {"type": "scroll", "content": ['services', 'interior-exterior']},
    "Architecture": {"type": "scroll", "content": ['services', 'architecture']},
    "Post Tension": {"type": "scroll", "content": ['services', 'post-tension']},
    "Introductive Video": {"type": "scroll", "content": ['', 'video']},
    // Redirects
    "Instagram": {"type": "redirect", "link": "https://www.instagram.com/ghadboun.group?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
    "Facebook": {"type": "redirect", "link": "https://www.facebook.com/Ghadboun.Group"},
    "Tiktok": {"type": "redirect", "link": "https://www.tiktok.com/@ghadboungroup"},
    "Whatsapp": {"type": "redirect", "link": "https://wa.me/+96171351678"},
    // Links
    "Contact us": {"type": "link", "link": "/contactus"},
    "Home": {"type": "link", "link": "/"},
    "Modern gallery": {"type": "link", "link": "/gallery"},
    "Kitchen gallery": {"type": "link", "link": "/gallery/kitchen"},
    "Bathroom gallery": {"type": "link", "link": "/gallery/bathroom"},
    "Bedroom gallery": {"type": "link", "link": "/gallery/bedroom"},
    "Exterior gallery": {"type": "link", "link": "/gallery/exterior"}
}

export default function SearchEngine({ setSearchEngine, scrollTo }) {
    const ref = useRef(null);
    const [resize, setResize] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setSearchEngine(false);
        }
    };

    const closeEngine = () => {
        setSearchEngine(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('resize', closeEngine);
        return () => {
            window.removeEventListener('resize', closeEngine);
        };
    }, [])

    // Filter Results
    const filterResults = (e) => {
        if (e.target.value != ''){
            setSearchResults([])
            Object.keys(searchOptions).forEach(key => {
                if ((key.toLowerCase()).includes((e.target.value).toLowerCase())){
                    setSearchResults(prevState => {
                        return [...prevState, key]
                    })
                }
            })
        }
    }

    // Search Query
    const searchQuery = () => {
    }

    return (
        <form onSubmit={() => searchQuery()} ref={ref} className='absolute left-0 w-full pl-[15px] pr-[15px] 820:pl-0 820:pr-0 820:w-fit 820:translate-x-[-90%]'>
            <div
                className='relative flex justify-center items-center w-full max-w-md min-w-[200px] mt-4 h-[40px] border border-gray-300 rounded shadow-lg focus:outline-none transition duration-300 ease-in-out transform hover:scale-105'
            >
                <input className='w-[100%] p-4 h-[100%] outline-none focus:ring-2 focus:ring-orange-600' onChange={(e) => filterResults(e)} type="text" placeholder="Search..." ></input>
                <i onClick={() => closeEngine()} className="absolute cursor-pointer right-4 fa-solid fa-xmark text-orange-800 hover:text-orange-400"></i>
            </div>
            
            <div className="w-full max-w-md p-4">
                <ul className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {searchResults.map((result, index) => {
                        let searchResult = searchOptions[result]
                        if (searchResult["type"] == "scroll"){
                            return (
                                <li
                                onClick={() => scrollTo((searchResult["content"])[0], (searchResult["content"])[1])}
                                key={index}
                                className="cursor-pointer p-4 border-b last:border-b-0 border-gray-200 transition duration-300 ease-in-out transform hover:bg-orange-100 hover:scale-105 fade-in"
                                >
                                {result}
                                </li>
                            )
                        } else if (searchResult["type"] == "redirect"){
                            return (
                                <li    
                                key={index}
                                className="cursor-pointer p-4 border-b last:border-b-0 border-gray-200 transition duration-300 ease-in-out transform hover:bg-orange-100 hover:scale-105 fade-in"
                                >
                                <a 
                                target='_blank'
                                href={searchResult["link"]} 
                                id='search-link'
                                >{result}</a>
                                </li>
                            )
                        } else if (searchResult["type"] == "link"){
                            return (
                                <li    
                                key={index}
                                className="cursor-pointer p-4 border-b last:border-b-0 border-gray-200 transition duration-300 ease-in-out transform hover:bg-orange-100 hover:scale-105 fade-in"
                                >
                                <NavLink 
                                to={searchResult["link"]} 
                                id='search-link'
                                >{result}</NavLink>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>

        </form>
    )
}
