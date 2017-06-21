function startup(){
    
    var vid= document.getElementById("vid");
    navigator.getUserMedia({
        video: true,
        audio: true
    }, function (stream){
        var streamURL = window.URL.createObjectURL(stream);
        vid.src= streamURL;
        vid.play();
    }, function (error){
        console.warn(error);
    });
}

window.addEventListener("load", startup);