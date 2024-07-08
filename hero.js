const songs = [
    {
        name: "Ajith Hits",
        img: "https://2.bp.blogspot.com/-dByyWXSXSmc/W0226IABdvI/AAAAAAAAFiQ/P7lUEEUV2b0tdf2MC5_vJGJ41ZOnnmk_ACLcBGAs/s1600/ajith-kumar-thala-hd-photos-stylish-hd-3.jpg",
        audio: "https://stream.zeno.fm/qfkksd31w0hvv"
    },
    {
        name: "Vijay Hits",
        img: "https://tse3.mm.bing.net/th?id=OIP.zJFA3xA5mT_0X2TYQNGbswHaJ4&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/2pn99a71w0hvv"
    },
    {
        name: "Kamal Hits",
        img: "https://tse3.mm.bing.net/th?id=OIP.H7SUhF_GaM0cCkF3wzj6bwHaEK&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/ya6emvmcbkhvv"
    },
    {
        name: "Rajini Hits",
        img: "https://i2.cinestaan.com/image-bank/1500-1500/124001-125000/124001.jpg",
        audio: "https://stream.zeno.fm/vcn3hvqpad0uv"
    },
    {
        name: "Suriya Hits",
        img: "https://filmfare.wwmindia.com/content/2020/oct/suriya21603690823.jpg",
        audio: "https://stream.zeno.fm/rzf5mbq3b48uv"
    },
    {
        name: "Dhanush Hits",
        img: "https://tse4.mm.bing.net/th?id=OIP.dqdTVZubHJ18FeNAneManAHaE0&pid=Api&P=0&h=220",
        audio: "https://stream.zeno.fm/aqp97f3z238uv"
    },
    {
        name: "Simbhu Hits",
        img: "https://images.tv9telugu.com/wp-content/uploads/2023/03/simbu-7.jpg",
        audio: "https://stream.zeno.fm/8kgd85rx338uv"
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
