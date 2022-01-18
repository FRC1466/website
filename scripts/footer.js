// footer.js: adds the footer to every page

var footer = document.createElement('footer');

var logoWrap = document.createElement('div');
logoWrap.className = 'logo-wrap';

var fbWrap = document.createElement('div');
fbWrap.className = 'logo-footer';
fbWrap.id = 'facebook-logo-footer';
var fbLink = document.createElement('a');
fbLink.setAttribute('href', 'https://www.facebook.com/FIRST1466/');
var fbImg = document.createElement('img');
fbImg.setAttribute('src', 'media/socials/logo-facebook.svg');
fbWrap.appendChild(fbLink);
fbLink.appendChild(fbImg);

var instaWrap = document.createElement('div');
instaWrap.className = 'logo-footer';
instaWrap.id = 'instagram-logo-footer';
var instaLink = document.createElement('a');
instaLink.setAttribute('href', 'https://www.instagram.com/webb_robotics/');
var instaImg = document.createElement('img');
instaImg.setAttribute('src', 'media/socials/logo-instagram.svg');
instaWrap.appendChild(instaLink);
instaLink.appendChild(instaImg);

var twitWrap = document.createElement('div');
twitWrap.className = 'logo-footer';
twitWrap.id = 'twitter-logo-footer';
var twitLink = document.createElement('a');
twitLink.setAttribute('href', 'https://twitter.com/webb1466');
var twitImg = document.createElement('img');
twitImg.setAttribute('src', 'media/socials/logo-twitter.svg');
twitWrap.appendChild(twitLink);
twitLink.appendChild(twitImg);

var ytWrap = document.createElement('div');
ytWrap.className = 'logo-footer';
ytWrap.id = 'youtube-logo-footer';
var ytLink = document.createElement('a');
ytLink.setAttribute('href', 'https://www.youtube.com/channel/UCFfOXEsL3QqyypXxH4HnG4g');
var ytImg = document.createElement('img');
ytImg.setAttribute('src', 'media/socials/logo-youtube.svg');
ytWrap.appendChild(ytLink);
ytLink.appendChild(ytImg);

var gitWrap = document.createElement('div');
gitWrap.className = 'logo-footer';
gitWrap.id = 'github-logo-footer';
var gitLink = document.createElement('a');
gitLink.setAttribute('href', 'https://github.com/FRC1466');
var gtImg = document.createElement('img');
gtImg.setAttribute('src', 'media/socials/logo-github.svg');
gitWrap.appendChild(gitLink);
gitLink.appendChild(gtImg);

var swWrap = document.createElement('div');
swWrap.className = 'logo-footer';
swWrap.id = 'webb-logo-footer';
var swLink = document.createElement('a');
swLink.setAttribute('href', 'https://www.webbschool.org');
var swImg = document.createElement('img');
swImg.setAttribute('src', 'media/socials/logo-webb.svg');
swImg.style.cssText += 'filter:invert()';
swWrap.appendChild(swLink);
swLink.appendChild(swImg);

var frcWrap = document.createElement('div');
frcWrap.className = 'logo-footer';
frcWrap.id = 'frc-logo-footer';
var frcLink = document.createElement('a');
frcLink.setAttribute('href', 'https://www.firstinspires.org/robotics/frc');
var frcImg = document.createElement('img');
frcImg.setAttribute('src', 'media/socials/logo-first.svg');
frcWrap.appendChild(frcLink);
frcLink.appendChild(frcImg);

footer.appendChild(logoWrap);
logoWrap.appendChild(fbWrap);
logoWrap.appendChild(instaWrap);
logoWrap.appendChild(twitWrap);
logoWrap.appendChild(ytWrap);
logoWrap.appendChild(gitWrap);
logoWrap.appendChild(swWrap);
logoWrap.appendChild(frcWrap);

document.getElementsByTagName('body')[0].appendChild(footer);