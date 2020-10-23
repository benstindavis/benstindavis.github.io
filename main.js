function set_src(r_name) {
    document.getElementById("iframe").src = r_name;
   
}

function forward() {
    window.frames[0].contentWindow.history.forward();
}


function backward() {
    window.frames[0].contentWindow.history.back();
}  