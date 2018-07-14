function print(){
    let body = document.querySelector("body");
    let start = document.querySelector("#start").value;
    let stop = document.querySelector("#stop").value;

    for(i=start; i<stop; i++){
        body.innerHTML += "<p>" + i + "</p>";
    }
}