import React ,{useState}from 'react'
function Country() {
    const [currentCountry, setCurrentCountry] =  useState("in");
    const CountryData = {"ae" : "United Arab","ar" : "Argentina","at" : "Austria","au" : "Australia","be" : "Belgium","bg" : "Bulgria","br" : "Brazil","ca" : "Canada","ch" : "Switzerland","cn" : "China","co" : "Colombia","cu" : "Cuba","cz" : "Czechia","de" : "Germany","eg" : "Egypt","fr" : "France","gr" : "Greece","hk" : "Hong Kong","hu" : "Hungary","id" : "Indonesia","ie" : "Ireland","il" : "Israel","in" : "India","it" : "Italy","jp" : "Japan","kr" : "Republic of Korea","lt" : "Lithuania","lv" : "Latvia","ma" : "Morocco","mx" : "Mexico","my" : "Malaysia","ng" : "Nigeria","nl" : "Netherlands","no" : "Norway","nz" : "New Zealand","ph" : "Philippines","pl" : "Poland","pt" : "Portugal","ro" : "Romania","rs" : "Serbia","ru" : "Russian Federation","sa" : "Saudi Arabia","se" : "Sweden","sg" : "Singapore","si" : "Slovenia","sk" : "Slovakia","th" : "Thailand","tr" : "Turkey","tw" : "Taiwan","ua" : "Ukraine","us" : "United States of America","ve" : "Venezuela","za" : "South Africa"
}
        //console.log(CountryData)       
        
        const handleClick= (e)=>{
            setCurrentCountry(e.target.value);
            console.log(e.target.value);
        }
    return (
        <div className="country">
            Country
            <select value={currentCountry} onChange={handleClick}>
            {Object.keys(CountryData).map((item,i)=>{
                return <option key={i} value={item}>{CountryData[item]}</option>
                })
            }               
            </select>
        </div>
    )
}

export default Country
