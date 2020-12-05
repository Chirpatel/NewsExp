import React,{useEffect,useState} from 'react'
import './Viewer.css'
function Viewer({data}) {
    const [cols,setCols] = useState([]);
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    useEffect(() => {
        var colsdata=[]
        const dividecols = (n)=>{
            for(let i =0;i<data.length;i=i+1-1){
                var tempdata=[]
                for(let j=0;j<n&&i<data.length;j++){
                    if(data[i].description==="" || data[i].description===null || data[i].urlToImage===null){
                        j--;
                    }else{
                        tempdata.push(data[i]);
                    }
                    
                    i++;
                }
                if(tempdata.length!==0){
                    colsdata.push(tempdata);
                }
            }
        }

        if(window.innerWidth<=450){
            dividecols(1);
        }
        else if(window.innerWidth<=640){
            dividecols(2);
        }else if(window.innerWidth<=991){
            dividecols(3);
        }else{
            dividecols(4);
        }
        //console.log(data)
        //console.log(colsdata);
        setCols(colsdata);
    }, [data,setCols])
    
    return (
        <div className="viewer-container">
            

            {cols.map((data,i)=>{
                return(
                    <div className="viewer-row" key={i}>
                        { data.map((item,i)=>{
                            return(
                                <div className="viewer-column" key={i}>
                                    <div className="viewer-column-image">
                                        <img src={item.urlToImage} alt={item.description}/>
                                    </div>
                                    <div className="viewer-column-title">
                                    <div><a href={item.url} target="_blank" rel = "noopener noreferrer">{item.title}</a></div>
                                    </div>
                                    <div className="viewer-column-description">
                                        <div>{item.description}</div>
                                    </div>
                                    <div className={"viewer-column-url"}>
                                        
                                    <div><span onClick={()=>{openInNewTab(item.url)}}><i className="fas fa-external-link-alt"></i></span></div>
                                    </div>
                                </div>

                            )
                        })

                        }
                    </div>
                )
            })

            }
        </div>
    )
}

export default Viewer
