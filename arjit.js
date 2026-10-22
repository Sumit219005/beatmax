const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
   {
      id: "1",
      songName:`chahun main ya naa<br> 
      <div class="subtitle">Arjit Singh</div>`,
      poster:"img/arjit/8.jpeg"
   },
    {
      id: "2",
      songName:`sanam Re  <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/9.jpeg"
   },
    {
      id: "3",
      songName:` Tera Fitoor <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/13.jpeg"
   },
    {
      id: "4",
      songName:`   Phir Kabhi <br> 
      <div class="subtitle">Diljit Dosanjh</div>`,
      poster:"img/arjit/14.jpeg"
   },
    {
      id: "5",
      songName:` Qaafirana <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/16.jpeg"
   },
    {
      id: "6",
      songName:` Khairiyat<br> 
      <div class="subtitle"> Arjit Singh<</div>`,
      poster:"img/arjit/17.jpeg"
   },
    {
      id: "7",
      songName:`Apna Bana Le <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/25.jpeg"
   },
    {
      id: "8",
      songName:`Teri Meri Kahaani <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/arjit/26.jpeg"
   },
    {
      id: "9",
      songName:` Ae Dil Hai Mushkil<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/arjit/29.jpeg"
   },
    {
      id: "10",
      songName:`Phir Bhi Tumko Chaahunga <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/32.jpeg"
   },
    {
      id: "11",
      songName:`Tum Hi Ho <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/39.jpeg"
   },
    {
      id: "12",
      songName:`Har Kisi Ko <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/54.jpeg"
   },
    {
      id: "13",
      songName:`Phir Mohabbat <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/arjit/56.jpeg"
   },
    {
      id: "14",
      songName:`Baaton Ko Teri<br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/arjit/61.jpeg"
   },
    {
      id: "15",
      songName:`Valam  <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/63.jpeg"
   },
    {
      id: "16",
      songName:`Khamoshiyan <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/arjit/68.jpeg"
   },
    {
      id: "17",
      songName:`Mareez-E-Ishq <br> 
      <div class="subtitle">Arijit Singh</div>`,
      poster:"img/arjit/70.jpeg"
   },
    {
      id: "18",
      songName:`Kabhi Jo Baadal Barse <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/72.jpeg"
   },
    {
      id: "19",
      songName:`Dekha Hazaro Dafaa <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/80.jpeg"
   },
    {
      id: "20",
      songName:`Pal <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/82.jpeg"
   },
    {
      id: "21",
      songName:`Maahi <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/89.jpeg"
   },
    {
      id: "22",
      songName:`Uska Hi Banana<br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/90.jpeg"
   },
    {
      id: "23",
      songName:`Lo Maan Liya<br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/91.jpeg"
   },
    {
      id: "24",
      songName:`Baatein Ye Kabhi Na <br> 
      <div class="subtitle">Arjit Singh<</div>`,
      poster:"img/arjit/92.jpeg"
   },
    
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img') [0].src = songs[i].poster; 
     e.getElementsByTagName('h5') [0].innerHTML = songs[i].songName; 
});


let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterplay.addEventListener('click',()=>{
   if (music.paused || music.currentTime <= 0) {
      music.play();
      wave.classList.add('active1');
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
   } else {
     music.pause(); 
     wave.classList.remove('active1');
      masterplay.classList.add('bi-play-fill');
       masterplay.classList.remove('bi-pause-fill');
   }
});

const makeAllBackground = () =>{
   Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
      el.style.background = 'rgb(105, 105, 105, .0)';
   })
}

const makeAllplayes = () =>{
   Array.from(document.getElementsByClassName('playlistplay ')).forEach((el)=>{
       el.classList.add('bi-play-circle-fill');
       el.classList.remove('bi-pause-circle-fill');
   })
}




let index = 0;
// let title = document.getElementById('title');
let download_music = document.getElementById('download_music');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
   e.addEventListener('click',(el)=>{
      index = el.target.id;
      // console.log(index);
      music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
     download_music.href = `audio/arjit/${index}.mp3`;


   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

   });
})

let currentstart = document.getElementById('currentstart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',() => {
   let music_curr = music.currentTime;
   let music_dur = music.duration;
   

   let min1 = Math.floor(music_dur / 60);
   let sec1 = Math.floor(music_dur % 60);
//   console.log(min1);
  
if (sec1 < 10) {
   sec1 = `0${sec1}`;
}
 currentEnd.innerText = `${min1}:${sec1}`;

 let min2 = Math.floor(music_curr / 60);
 let sec2 = Math.floor(music_curr % 60);


if (sec2 < 10) {
   sec2 = `0${sec2}`;
}


 currentstart.innerText = `${min2}:${sec2}`;


  let progressBar = parseInt((music_curr / music_dur) * 100);
   seek.value = progressBar;
   // console.log(seek.value);
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change',()=>{
   music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol= document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
   if (vol.value == 0) {
      vol_icon.classList.remove('bi-volume-up-fill');
       vol_icon.classList.remove('bi-volume-down-fill');
       vol_icon.classList.add('bi-volume-off-fill');
   }
   if (vol.value > 0) {
      vol_icon.classList.remove('bi-volume-up-fill');
       vol_icon.classList.add('bi-volume-down-fill');
       vol_icon.classList.remove('bi-volume-off-fill'); 
   }
   if (vol.value > 50) {
      vol_icon.classList.add('bi-volume-up-fill');
       vol_icon.classList.remove('bi-volume-down-fill');
       vol_icon.classList.remove('bi-volume-off-fill'); 
   }
   let vol_a = vol.value;
   vol_bar.style.width = `${vol_a}%`;
   vol_dot.style.left = `${vol_a}%`;
   music.volume = vol_a / 100;

});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
   index -= 1;
   if (index < 1) {
      index = Array.from(document.getElementsByClassName('songItem')).length;
   }
   music.src = `audio/arjit/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');

   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

})

next.addEventListener('click',()=>{
   index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
      index = 1;
    }
   music.src = `audio/arjit/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');

   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
});


















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
   pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click',()=>{
   pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click',()=>{
   Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click',()=>{
   Artists_bx.scrollLeft -= 330;
});



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
   let a = shuffle.innerHTML;

   switch (a) {
      case "next":
         shuffle.classList.add('bi-arrow-repeat');
         shuffle.classList.remove('bi-music-note-beamed');
         shuffle.classList.remove('bi-shuffle');
         shuffle.innerHTML = 'repeat';
         break;
   
      case "repeat":
         shuffle.classList.remove('bi-arrow-repeat');
         shuffle.classList.remove('bi-music-note-beamed');
         shuffle.classList.add('bi-shuffle');
         shuffle.innerHTML = 'random';
         break;

         case "random":
         shuffle.classList.remove('bi-arrow-repeat');
         shuffle.classList.add('bi-music-note-beamed');
         shuffle.classList.remove('bi-shuffle');
         shuffle.innerHTML = 'next';
         break;
   }
});




const next_music = () => {
  if (index == songs.length) {
     index = 1
 } else {
     index++;
 }
      music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
     download_music.href = `audio/${index}.mp3`;


   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}


const repeat_music = () => {
     if (index == songs.length) {
     index = 1
 } else {
     index;
 }
      music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
     download_music.href = `audio/${index}.mp3`;


   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}


const random_music = () => {
    if (index == songs.length) {
     index = 1
 } else {
     index = Math.floor((Math.random() * songs.length) + 1);
 }
      music.src = `audio/${index}.mp3`;
      music.play();
      masterplay.classList.remove('bi-play-fill');
      masterplay.classList.add('bi-pause-fill');
     download_music.href = `audio/${index}.mp3`;


   //  let songTitles = songs.filter((els)=>{
   //    return els.id == index;
   //  });

   //  songTitles.forEach(elss =>{
   //    let{songName} = elss;
   //    title.innerHTML = songName;


   //  })   

     makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
      makeAllplayes();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}




music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;

    switch (b) {
      case 'repeat':
         repeat_music();
         break;
         case 'next':
         next_music();
         break;
         case 'random':
         random_music();
         break;
    }
   
})