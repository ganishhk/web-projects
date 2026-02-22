let leftbut = document.querySelector(".left")
let rightbut = document.querySelector(".right")
let songs = document.querySelector(".songs")
const audio = new Audio();
let currentIndex = 0;
function songsresponse() {
    leftbut.style.opacity = songs.scrollLeft <= 0 ? 0 : 1;

    rightbut.style.opacity = songs.scrollLeft + songs.clientWidth  >= songs.scrollWidth - 5 ? 0 : 1;

    if (songs.scrollLeft <= 0) {
        songs.classList.remove("both", "no-right")
        songs.classList.add("no-left")
    }
    else if (songs.scrollLeft + songs.clientWidth >= songs.scrollWidth ) {
        songs.classList.remove("both", "no-left")
        songs.classList.add("no-right")
    }
    else {
        songs.classList.remove("no-left", "no-right")
        songs.classList.add("both")
    }
}
leftbut.addEventListener("click", () => {
    songs.scrollLeft = songs.scrollLeft - 400;

});
rightbut.addEventListener("click", () => {
    songs.scrollLeft = songs.scrollLeft + 400;

});
songs.addEventListener("scroll", songsresponse);

console.log(songs.classList)
let songdata = [{
    img: "Mil.jpg",
    title: "Millionaire",
    artist: ["Yo Yo Honey singh"],
    src:"mil.mp3"
},{
    img: "ez.jpg",
    title: "EZ-EZ (From \"Dhurandhar\")",
    artist: ["Shashwat Sachdev","Diljit Dosanjh","Hanumankind"],
    src:"ez.mp3"
},{
    img: "khat.jpg",
    title: "Khat",
    artist: ["Navjot Ahuja"],
    src:"khat.mp3"
} 
,{
    img: "sway.webp",
    title: "Sway",
    artist: ["Michael Buble"],
    src: "sway.org.mp3"
}
,{
    img: "tkj.webp",
    title: "Tujhko Jo Paayat",
    artist: ["Pritam","Mohit Chauhan"],
    src: "tkjorg.mp3"
}
,{
    img: "fil.webp",
    title: "Can't Help Falling in Love",
    artist: ["Elvis Presley","Blue Hawaii"],
    src:"ch.org.mp3"
}
,{
    img: "tere.jpg",
    title: "Teri Deewani",
    artist: ["Kailash Kher","Kailasa"],
    src:"tered.mp3"
}
,{
    img: "dhu.jpg",
    title: "Dhurandhar",
    artist: ["Shaswat Sachdev","Madhubanti Bagchi","Jasmine Sandlas"],
    src:"dhu.mp3"
}
,{
    img: "pbss.jpg",
    title: "Parvati Boli Shankar Se",
    artist: ["Hansaraj Raghuwanshi","Bharat Kamal","Ravi Chopra"],
    src:"pbs.mp3"
}
,{
    img: "Bham.jpg",
    title: "Bham Lahiri",
    artist: ["Kailash Kher","Paresh Kamath","Naresh Kamath"],
    src:"bl.mp3"
}]
function playsong(index) {
                    currentIndex = index;
                    audio.src = songdata[index].src;
                    audio.play();
                }
songdata.forEach((song, index) => {
    let card = document.createElement("div");
    card.classList.add("song");
    let artistHtml = song.artist.map(name =>
        `<span class="artist-name">${name}</span>`
    ).join("")   
     
    card.innerHTML = `
    <div class="imgwrapper">
    <div class="play">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <title xmlns="">play</title>
                                        <path fill="currentColor" d="M8 5.14v14l11-7z" />
                                    </svg>
                                    </div>
                                <img src="${song.img}" alt="${song.title}">
                            </div>
                            <div class="songname">
                                <h4>${song.title}</h4>
                            </div>
                            <div class="songinfo">
                                ${artistHtml}
                            </div>;
                            `;
            card.querySelector(".play").addEventListener("click",(e)=>{
                e.stopPropagation();
                playsong(index);
            })
    songs.appendChild(card);
});
songsresponse();