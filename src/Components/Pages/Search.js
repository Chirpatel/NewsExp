import React,{useState,useEffect} from 'react'
import SearchApi from '../Api/SearchApi';
import Viewer from './Viewer';
import './Search.css'
function Search() {
    const [page,setPage] = useState(1);
    const [pageChanged,setPageChanged] = useState(false);
    const [isLoading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(()=>{
        const call = async ()=>{
            setLoading(true)
            setData(await SearchApi({search:search,page:page}));
            setPageChanged(false)
            setLoading(false)
        }

        if(pageChanged){
            call();
        }
    },[pageChanged,page,search])
    const pageClick= (p)=>{
        setPage(p);
        //console.log(p);
        setPageChanged(true);
    }
    const searchChange= (e)=>{
        setSearch(e.target.value);
    }
    const searchClick=()=>{
        setPageChanged(true);
    }
    const handleKeyPress = (e)=>{
        if(e.key==="Enter"){
            searchClick();
        }
    }
    return (
        <div className="search">
            <h1>Search</h1>
            <div className="search-container">
                <div className={"search-container-details"}>
                    <input type="text" value={search} onChange={searchChange} onKeyPress={handleKeyPress}/>
                    <button><i className="fas fa-search" onClick={searchClick}></i></button>
                </div>
            </div>
            {isLoading &&
                <div className={"loaders"}>Searching...</div>
            }
            {!isLoading && data.totalResults===0 &&
                <div className={"loaders"}>No Result Found</div>
            }
            {!isLoading && data.articles && data.totalResults!==0 &&
                <>
                <Viewer data={data.articles} />
                <div className="pagination">
                    <div className="pagination-button">
                        {data.totalResults>=20*1 && 
                            <button className={`${page===1 ? "active":""}`} onClick={()=>{pageClick(1)}}>1</button>
                        }
                        {data.totalResults>=20*2 && 
                            <button className={`${page===2 ? "active":""}`} onClick={()=>{pageClick(2)}}>2</button>
                        }
                        {data.totalResults>=20*3 && 
                            <button className={`${page===3 ? "active":""}`} onClick={()=>{pageClick(3)}}>3</button>
                        }
                        {data.totalResults>=20*4 && 
                            <button className={`${page===4 ? "active":""}`} onClick={()=>{pageClick(4)}}>4</button>
                        }
                        {data.totalResults>=20*5 && 
                            <button className={`${page===5 ? "active":""}`} onClick={()=>{pageClick(5)}}>5</button>
                        }
                    </div>
                </div>
                </>
            }
            
        </div>
    )
}

export default Search
