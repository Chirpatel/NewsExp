import React, {useEffect, useState}from 'react'
import TopHeadlineApi from '../Api/TopheadlineApi';
import * as FaIcons from 'react-icons/fa';
import Viewer from './Viewer';
import "./Topheadlines.css"
function TopHeadlines() {
    const [currentCountry, setCurrentCountry] =  useState("in");
    const [isLoading, setLoading] =  useState(true);
    const [isChanged,setChanged] = useState(true);
    const CountryData = {"ae" : "United Arab","ar" : "Argentina","at" : "Austria","au" : "Australia","be" : "Belgium","bg" : "Bulgria","br" : "Brazil","ca" : "Canada","ch" : "Switzerland","cn" : "China","co" : "Colombia","cu" : "Cuba","cz" : "Czechia","de" : "Germany","eg" : "Egypt","fr" : "France","gr" : "Greece","hk" : "Hong Kong","hu" : "Hungary","id" : "Indonesia","ie" : "Ireland","il" : "Israel","in" : "India","it" : "Italy","jp" : "Japan","kr" : "Republic of Korea","lt" : "Lithuania","lv" : "Latvia","ma" : "Morocco","mx" : "Mexico","my" : "Malaysia","ng" : "Nigeria","nl" : "Netherlands","no" : "Norway","nz" : "New Zealand","ph" : "Philippines","pl" : "Poland","pt" : "Portugal","ro" : "Romania","rs" : "Serbia","ru" : "Russian Federation","sa" : "Saudi Arabia","se" : "Sweden","sg" : "Singapore","si" : "Slovenia","sk" : "Slovakia","th" : "Thailand","tr" : "Turkey","tw" : "Taiwan","ua" : "Ukraine","us" : "United States of America","ve" : "Venezuela","za" : "South Africa"
    }
    const handleClick= (e)=>{
        setCurrentCountry(e.target.value);
        console.log(e.target.value);
        setChanged(true)
    }
    const [data,setData] = useState({});
    useEffect(() => {
        
        const call = async ()=>{
            setLoading(true)
            setData(await TopHeadlineApi({country:currentCountry}))
            setLoading(false)
            setChanged(false)
        }
        if(isChanged){
            call();
        }
    }, [setData,setChanged,setLoading,isChanged,currentCountry])
    return (
        <div className={'topheadlines-container'}>
            <div className={'topheadlines-container-heading'}>
                <h1>Top Headlines</h1>
                <div className="country">
                <span>Country: </span>
                    <select value={currentCountry}  onChange={handleClick}>
                    {Object.keys(CountryData).map((item,i)=>{
                        return <option key={i} value={item}>{CountryData[item]}</option>
                        })
                    }               
                    </select>
                </div>
            </div>
            {isLoading &&
                <>Loading...</>
            }
            {!isLoading && data.articles &&
                <Viewer data={data.articles} />
            }
            
        </div>
    )
}

export default TopHeadlines
