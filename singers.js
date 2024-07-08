const songs = [
    {
        name: "SPB Hits",
        img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/25/952625-sp-balasubrahmanyam.jpg",
        audio: "https://stream.zeno.fm/ey44ycfscuhvv"
    },
    {
        name: "Yesudas hits",
        img: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/10/02/Incoming/Pictures/1271098_Wallpaper2.jpg?",
        audio: "https://stream.zeno.fm/avt4e9yaa48uv"
    },
    {
        name: "Mano Hits",
        img: "https://tse3.mm.bing.net/th?id=OIP.ytp7aVTJuW0roc6BZYDvnwHaEc&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/we99zw61w0hvv"
    },
    {
        name: "Shankar Mahadevan",
        img: "https://rollingstoneindia.com/wp-content/uploads/2022/04/Shankar-Mahadevan-MCMM-JioSaavn-scaled.jpg",
        audio: "https://stream.zeno.fm/wpzkyefcbkhvv"
    },
    {
        name: "Hariharan",
        img: "https://tse4.mm.bing.net/th?id=OIP.efwEpa4tQ3PvlzO9xiJSDQHaFY&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/gu69vryaa48uv"
    },
    {
        name: "Sid Sriram",
        img: "https://tse2.mm.bing.net/th?id=OIP.f-muscf-ZcIBSxds-Y44nAHaFm&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/5vxa8zyaa48uv"
    },
    {
        name: "Shreya Goshal",
        img: "https://tse4.mm.bing.net/th?id=OIP.6ezYAUo-GxybZn_acBNpjgHaEK&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/czvuphmcbkhvv"
    },
    {
        name: "Janaki hits",
        img: "https://static.india.com/wp-content/uploads/2020/06/s-janaki-dead-death-hoax-main.jpg",
        audio: "https://stream.zeno.fm/ewdn3pfcbkhvv"
    },
    {
        name: "Chitra Hits",
        img: "https://th-i.thgim.com/public/entertainment/music/ypb6hv/article35011959.ece/alternates/LANDSCAPE_1200/chitra5",
        audio: "https://stream.zeno.fm/h9vqwpmcbkhvv"
    }
    
];


let currentAudio = null;

const musicPlayer = document.getElementById('music-player');

songs.forEach(song => {
    const songDiv = document.createElement('div');
    songDiv.classList.add('song');
    songDiv.innerHTML = `
        <img src="${song.img}" alt="${song.name}">
        <p>${song.name}</p>
    `;
    songDiv.onclick = () => playAudio(song.audio);
    musicPlayer.appendChild(songDiv);
});

function playAudio(audioFile) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(audioFile);
    currentAudio.play();
}
