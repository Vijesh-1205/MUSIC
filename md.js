const songs = [
    {
        name: "Anirudh Hits",
        img: "https://tse3.mm.bing.net/th?id=OIP.i5sECoDT9WGDoH4jha0ZsAHaJT&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/qdvuf5e4138uv"
    },
    {
        name: "Yuvan hits Hits",
        img: "https://tse1.mm.bing.net/th?id=OIP.F1rDiRaqAbH6Z46HEOufFgHaFj&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/f939szg6a48uv"
    },
    {
        name: "Vidhyasagar Hits",
        img: "https://tse3.mm.bing.net/th?id=OIP.mWdGy1U8fPpcn1E_uCVaZwAAAA&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/bb2vs3yaa48uv"
    },
    {
        name: "AR Rahman Hits",
        img: "https://tse4.mm.bing.net/th?id=OIP.dqdTVZubHJ18FeNAneManAHaE0&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/8vs416z3b48uv"
    },
    {
        name: "Ilayaraja Hits",
        img: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/03/13/Pictures/concert-maestro-ilayaraja-enthralled-music-lovers-first_49150ca4-2677-11e8-9f95-06a811d7e716.jpg",
        audio: "https://stream.zeno.fm/5u2c0yh0ekhvv"
    },

    {
        name: "Harris Hits",
        img: "https://tse2.mm.bing.net/th?id=OIP.Lo_UedSrMA7sZppCeHxR6AHaJF&pid=Api&P=0&h=220",
        audio: "http://154.38.171.207:8240/harris_jayaraj_R"
    },
    {
        name: "Imman Hits",
        img: "https://tse2.mm.bing.net/th?id=OIP.P6PIBIx1aL8KZyCwRLWjSAHaEJ&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/1zsd11zaa48uv"
    },
    {
        name: "Deva Hits",
        img: "https://media.maalaimalar.com/h-upload/2022/11/21/1794994-i.jpg",
        audio: "https://stream.zeno.fm/6cxuhfmcbkhvv"
    },
    {
        name: "Santhosh Narayanan Hits",
        img: "https://tse2.mm.bing.net/th?id=OIP.Lo_UedSrMA7sZppCeHxR6AHaJF&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/wkqvzsg1238uv"
    },


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
