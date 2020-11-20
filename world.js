window.onload = function() {
    let button1 = document.getElementById("lookup");
    let button2 = document.getElementById("lookup_2");
    let c_Info = document.getElementById("country");
    let result = document.getElementById("result");

    button1.addEventListener('click',function(){
        var httpRequest = new XMLHttpRequest();
        let c_Data = c_Info.value;
        httpRequest.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  c_Data + "&context=none" );
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            let response = httpRequest.responseText;
            result.innerHTML = response;
        }
    });

    button2.addEventListener('click',function(){
        var httpRequest = new XMLHttpRequest();
        let c_Data = c_Info.value;
        httpRequest.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  c_Data + "&context=cities");
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            let response = httpRequest.responseText;
            result.innerHTML = response;
        }
    })
}