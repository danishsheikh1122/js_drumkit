// alert("hello")
const music_list = {
  a: {
    src: "sound/01 - JavaScript Drum Kit_sounds_clap.wav",
  },
  s: {
    src: "sound/01 - JavaScript Drum Kit_sounds_boom.wav",
  },
  d: {
    src: "sound/01 - JavaScript Drum Kit_sounds_hihat.wav",
  },
  f: {
    src: "sound/01 - JavaScript Drum Kit_sounds_kick.wav",
  },
  g: {
    src: "sound/01 - JavaScript Drum Kit_sounds_tink.wav",
  },
  h: {
    src: "sound/01 - JavaScript Drum Kit_sounds_snare.wav",
  },
  j: {
    src: "sound/01 - JavaScript Drum Kit_sounds_snare.wav",
  },
};
const audio = document.querySelector("audio");
window.addEventListener("keypress", (event) => {
  //   alert(event.key);
  // audio.src=""
  for (const key in music_list) {
    if (key == event.key) {
      audio.src = music_list[key].src;
      // console.log(music_list[key].src);
      let div=document.querySelector(`div[data-keys="${event.key}"]`)
    //   console.log(div);
    div.style.borderColor="red"
    setTimeout(() => {
        div.style.borderColor="sandybrown"
 
    }, 500);
    
      audio.play();
    }
  }
});
