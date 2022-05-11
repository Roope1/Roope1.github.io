function Translate() {
    var original = document.getElementById("original").value;
    var parody = document.getElementById("parody").value;

    var originalVerses = original.split("\n\n");
    console.log(originalVerses);
    var parodyVerses = parody.split("\n\n");
    console.log(parodyVerses);

    var finalSong = [];

    for(let i = 0; i < originalVerses.length; i++){
        var currentVerse = originalVerses[i].split("\n");
        var currentParodyVerse = parodyVerses[i].split("\n");

        for(let j = 0; j < currentVerse.length; j++){

            if(j % 2 == 0){
                finalSong.push(currentVerse[j]);
                finalSong.push(currentParodyVerse[j/2])
            }
        }
        finalSong.push("\n")
    }

    finalSongString = "";

    for(let i = 0; i < finalSong.length; i++){
        finalSongString += finalSong[i];
        finalSongString += "<br>";
    }

    document.getElementById("song").innerHTML = "<pre>" + finalSongString + "</pre>";
}   