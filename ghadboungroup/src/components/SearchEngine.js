import React, {useState, useRef, useEffect} from 'react'

const searchOptions = {
    "Email": ['contactus', 'email'],
    "Phone number": ['contactus', 'phone_number'],
    "Location": ['contactus', 'location'],
    "Address": ['contactus', 'address']
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

    return (
        <form onSubmit={() => searchQuery()} ref={ref} className='absolute left-0 w-full pl-[15px] pr-[15px] 820:pl-0 820:pr-0 820:w-fit 820:translate-x-[-90%]'>
            <input onChange={(e) => filterResults(e)} type="text" placeholder="Search something..." className='w-full nos:w-[160px] h-[30px] shadow rounded bg-white mt-[10px] text-center text-[14px]'></input>
            
            <div className="w-full nos:w-[160px] container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map((result, index) => (
                        <div onClick={() => scrollTo((searchOptions[result])[0], (searchOptions[result])[1])} key={index} className="bg-white border p-4 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h5 className="text-xl font-semibold">{result}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </form>
    )
}
