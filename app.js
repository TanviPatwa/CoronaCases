

function getCoronaStats(country){
    document.getElementById('country').innerHTML = country;
    var xmlHttp = new XMLHttpRequest();
    var url = `https://api.covid19api.com/total/country/${country}/status/confirmed`;
    xmlHttp.open("GET", url, false); //false for synchronous reques
    xmlHttp.send(null);
    console.log(xmlHttp.responseText);
    var statsJSONArray = JSON.parse(xmlHttp.responseText);
    statsJSONArray = statsJSONArray.reverse();
    var tags = "<tr> <th>Date</th> <th>Confirmed Cases</th> </tr>";
    statsJSONArray.forEach(element => {
        console.log(element);
        tags += "<tr><td>" + new Date(element.Date).toDateString() + "</td><td>" + element.Cases + "</td></tr>";
    });
    
    document.getElementById('stats').innerHTML=tags;
}