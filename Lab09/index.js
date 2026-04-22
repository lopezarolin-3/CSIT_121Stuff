let isVisible = false;
let isLoaded = false;

function loadXMLDoc() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };

    xmlhttp.open("GET", "employee.xml", true);
    xmlhttp.send();
}

function empDetails(xml) {
    let xmlDoc = xml.responseXML;
    let table =
        `<tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Title</th>
            <th>Division</th>
            <th>Building</th>
            <th>Room</th>
        </tr>`;

    let x = xmlDoc.getElementsByTagName("employee");

    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("firstname")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("lastname")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("division")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("building")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("room")[0].childNodes[0].nodeValue + "</td></tr>";
    }

    document.getElementById("id").innerHTML = table;
}

//  AI-assisted toggle function
function toggleTable() {
    let table = document.getElementById("id");
    let button = document.getElementById("toggleBtn");

    if (!isVisible) {
        if (!isLoaded) {
            loadXMLDoc(); // load only once AI Suggested Advice
            isLoaded = true;
        }
        table.style.display = "table";
        button.innerText = "Close Employee Data";
        isVisible = true;
    } else {
        table.style.display = "none";
        button.innerText = "Get Employee Data";
        isVisible = false;
    }
}

// Button for image
const myButtomImg = document.getElementById("myButtonImg")
const myImg = document.getElementById("myImg")

myButtonImg.addEventListener("click", event => {

    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButtonImg.textContent = "Hide AI Assited Image";

    }

    else{
    myImg.style.display = "none";
    myButtonImg.textContent = "Show AI Assited Image";
    }
})