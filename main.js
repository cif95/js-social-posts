const posts = [
	{
		"id": 1,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/300?image=171",
		"author": {
			"name": "Phil Mangione",
			"image": "https://unsplash.it/300/300?image=15"
		},
		"likes": 80,
		"created": "2021-06-25"
	},
	{
		"id": 2,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=112",
		"author": {
			"name": "Sofia Perlari",
			"image": "https://unsplash.it/300/300?image=10"
		},
		"likes": 120,
		"created": "2021-09-03"
	},
	{
		"id": 3,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=234",
		"author": {
			"name": "Chiara Passaro",
			"image": "https://unsplash.it/300/300?image=20"
		},
		"likes": 78,
		"created": "2021-05-15"
	},
	{
		"id": 4,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=24",
		"author": {
			"name": "Luca Formicola",
			"image": null
		},
		"likes": 56,
		"created": "2021-04-03"
	},
	{
		"id": 5,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=534",
		"author": {
			"name": "Alessandro Sainato",
			"image": "https://unsplash.it/300/300?image=29"
		},
		"likes": 95,
		"created": "2021-03-05"
	},
	{
		"id": 6,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=533",
		"author": {
			"name": "Alessia Franco",
			"image": "https://unsplash.it/300/300?image=28"
		},
		"likes": 210,
		"created": "2021-03-05"
	},
	{
		"id": 7,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=530",
		"author": {
			"name": "Veralba Taldone",
			"image": "https://unsplash.it/300/300?image=25"
		},
		"likes": 595,
		"created": "2021-04-05"
	},
	{
		"id": 8,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=524",
		"author": {
			"name": "Silvia Vergari",
			"image": "https://unsplash.it/300/300?image=30"
		},
		"likes": 133,
		"created": "2021-04-05"
	},
	{
		"id": 9,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=550",
		"author": {
			"name": "Pasquale Orsini",
			"image": "https://unsplash.it/300/300?image=19"
		},
		"likes": 5,
		"created": "2021-06-05"
	},
	{
		"id": 10,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=434",
		"author": {
			"name": "Valeria Rossi",
			"image": "https://unsplash.it/300/300?image=39"
		},
		"likes": 280,
		"created": "2021-07-05"
	},
	{
		"id": 11,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=634",
		"author": {
			"name": "Agnese Fratelli",
			"image": "https://unsplash.it/300/300?image=38"
		},
		"likes": 142,
		"created": "2021-08-05"
	},
	{
		"id": 12,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=250",
		"author": {
			"name": "Noemi Fortunato",
			"image": "https://unsplash.it/300/300?image=12"
		},
		"likes": 156,
		"created": "2021-08-05"
	},
	{
		"id": 13,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=598",
		"author": {
			"name": "Giuseppe Buongiorno",
			"image": "https://unsplash.it/300/300?image=15"
		},
		"likes": 124,
		"created": "2021-08-05"
	},
	{
		"id": 14,
		"content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		"media": "https://unsplash.it/600/400?image=634",
		"author": {
			"name": "Alberto Lorusso",
			"image": "https://unsplash.it/300/300?image=23"
		},
		"likes": 415,
		"created": "2021-09-05"
	},
];



// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: id del post, numero progressivo da 1 a n nome autore, foto autore, data in formato americano (mm-gg-yyyy), testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// Non è necessario creare date casuali, per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// ** BONUS
// 1 - Formattare le date in formato italiano (gg/mm/aaaa)
// 2 - Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3 - Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

posts.forEach((element)=> {
let date = formatDateFromYyMmDdToDdMmYy(element['created']);
document.getElementById('container').innerHTML += `
	<div class="post">
		<div class="post__header">
				<div class="post-meta">                    
					<div class="post-meta__icon">
						<img class="profile-pic" src=${element['author']['image']} alt=${element['author']['name']}>                    
					</div>
					<div class="post-meta__data">
						<div class="post-meta__author">${element['author']['name']}</div>
						<div class="post-meta__time">${date}</div>
					</div>                    
				</div>
		</div>
		<div class="post__text">${element['content']}</div>
		<div class="post__image">
				<img src=${element['media']} alt="image post">
		</div>
		<div class="post__footer">
				<div class="likes js-likes">
					<div class="likes__cta">
						<a class="like-button  js-like-button" href="#" data-postid="${element['id']}">
								<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
								<span class="like-button__label">Mi Piace</span>
						</a>
					</div>
					<div class="likes__counter">
						Piace a <b id="like-counter-${element['id']}" class="js-likes-counter">${element['likes']}</b> persone
					</div>
				</div> 
		</div>            
	</div>`;
});



// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
const IdPostsLiked = [];

document.querySelectorAll('a.js-like-button').forEach((element)=> {
	element.addEventListener('click', function() {
		this.classList.toggle('like-button--liked');
		IdPostsLiked.push(parseInt(this.dataset.postid));
		console.log(IdPostsLiked);
		let likes = parseInt(this.parentNode.parentNode.children[1].children[0].innerHTML);
		likes++;
		this.parentNode.parentNode.children[1].children[0].innerHTML = likes;
	});
});


function formatDateFromYyMmDdToDdMmYy(string){
	let italianDate;
	let year = 		string.charAt(0) 
					+ string.charAt(1)
					+ string.charAt(2)
					+ string.charAt(3);
	let day = 		string.charAt(5)
					+ string.charAt(6);
	let month = 	string.charAt(8)
					+ string.charAt(9);
	return italianDate = `${day}-${month}-${year}`;
}
