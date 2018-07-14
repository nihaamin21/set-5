function btnAdd(){
    
    
    let start = parseInt( document.querySelector("#start").value);
    let stop = parseInt( document.querySelector("#stop").value);
    let jump = parseInt( document.querySelector("#jump").value);
    let body = document.querySelector("p");
    for(i=start; i<=stop; i+=jump){
        
        body.innerHTML += "<p>" + i + "</p>"
    }
}