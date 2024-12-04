let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Brotherhood",
     path: "music/mankirt.mp4",
     img: "https://bollyfry.in/wp-content/uploads/2020/08/maxresdefault-25.jpg",
     singer: "Mankirt Aulakh"
   },
   {
     name: "Butterfly",
     path: "music/jass.mpeg",
     img: "images/pic8.jpeg",
     singer: "Jass Manak"
   },
   {
     name: "Brown Munde",
     path: "music/siddhu.mpeg",
     img: "images/pic9.jpeg",
     singer: "Siddhu Moosewala"
   },
   {
     name: "Raat di gedi",
     path: "music/mus.mpeg",
     img: "images/pic10.jpeg",
     singer: "Diljit Dosanjh"
   },
   {
     name: "Oyy hoy hoy",
     path: "music/muss.mpeg",
     img: "images/pic11.jpeg",
     singer: "Jassi Gill"
   },
   {
    name: "Jannat",
    path: "music/jannat.mpeg",
    img: "images/pic12.jpeg",
    singer: "Ammy Virk"
  },
  {
	name: "Talja",
	path: "music/b1.mpeg",
	img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_OzeOsBxR0uB7EwyBv4CILYpXaMdZvStliQ&usqp=CAU",
	singer: "Jass Dhillon"
  },
  {
	name: "Tawajjo",
	path: "music/b2.mpeg",
	img: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/10/Woman-Silhouette-Headphones-Sun-1296x728-Header-1024x575.jpg?w=1155&h=1528",
	singer: "Satinder Satraj"
  },
  {
	name: "Challa",
	path: "music/b5.mpeg",
	img: "https://bollyfry.in/wp-content/uploads/2020/08/maxresdefault-25.jpg",
	singer: "R Nait"
  },
  {
   name: "bhabi",
   path: "music/b4.mpg",
   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqITyktOPIzcp_iawYc6-EvBmKa_rQ7ExAeA&usqp=CAU",
   singer: "Mankirt Aulakh"
 }
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }