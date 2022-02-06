import axios from "axios";

var options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
  headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': '0757f86fcbmshd8f0145b7a5e116p1229e2jsn79a3b9e87341'
  }
};


export const wordApi = {

    downloadSynonym(word) {
        options.url = 'https://wordsapiv1.p.rapidapi.com/words/'+ word +'/synonyms'

        axios.request(options).then(function (response) {
        	console.log(response.data);
        	alert(response.data)
        }).catch(function (error) {
        	console.error(error);
        });
    }
}