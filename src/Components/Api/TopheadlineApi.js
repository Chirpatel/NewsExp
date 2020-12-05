import axios from 'axios';

const TopHeadlineApi = async({country})=>{
    var config = {
        method: 'get',
        url: `https://newsapiorg.glitch.me/topheadlines/${country}`,
        headers: {}
    };
    var data;
    await axios(config)
    .then(function (response) {
        data = response.data;
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });
    //console.log(data);
    return data
      
}
export default TopHeadlineApi;