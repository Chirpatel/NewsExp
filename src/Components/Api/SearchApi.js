import axios from 'axios';

const SearchApi = async({page,search})=>{
    //console.log(page)
    var config = {
        method: 'get',
        url: `https://newsapiorg.glitch.me/search/${search}/${page}`,
        headers: {}
    };
    var data;
    await axios(config)
    .then(function (response) {
        data = response.data;
        //console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });
    //console.log(data);
    return data
      
}
export default SearchApi;