setTimeout(() => {
    let start = Date.now()

    let time = start % 86400000;

    let hours = Math.floor(time / 3600000) + 1;

    let hours2 = hours + ":";

    let minutes = Math.floor((time % 3600000) / 60000)
    
    let minutes2 = minutes + ":"

    if (minutes < 10){
        minutes2 = "0" + minutes2
    };

    let secondes = Math.floor((time % 3600000) % 60000 / 1000)

    console.log("Il est très pécisément: " + hours2 + minutes2 + secondes);
    
    if(hours == 12 && minutes == 45 && secondes < 10){
        return
    }



}, 1000);
