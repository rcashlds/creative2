const api_key = "224cd1e4-6159-4d0c-b42e-ef30d03a1994";
const max_records = 200;                                                        //arbitrarily chosen
var url = "https://api.harvardartmuseums.org/object?classification=Paintings";
url += "&size=" + max_records;
url += "&apikey=" + api_key;
let results = "";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    debugger
    let size = 18;                                                              //arbitrarily chosen
    for (let i = 0; i < size; i++) {
      let randomimagenumber = Math.floor(Math.random() * json.info.totalrecordsperquery);
      if (json.records[i].images == null) {
        continue;
      } else {
        for (let j = 0; j < json.records[i].images.length; j++) {
          let imgurl = json.records[i].images[j].baseimageurl;
          results += "<div class=museumimage>";
          results += "<img class=paintingimg src=" + imgurl + "></div>"
        }
      }
    }
    document.getElementById("museum-grid").innerHTML = results;
  });
