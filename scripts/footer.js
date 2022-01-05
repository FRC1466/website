// footer.js: adds the footer to every page
/*
Just adds links to all the socials
Still needs to look nice and all that
There might be more socials to link to as well 
 */

var footer = document.createElement('footer');

footer.style.cssText += 'grid-row-start: 6; grid-column-end: span 3; background: rgb(100,100,100);';

var fbLink = document.createElement('a');
fbLink.setAttribute('href', 'https://www.facebook.com/FIRST1466/');
var fbImg = document.createElement('img');
fbImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMIOBhCbudV3rygP1hfmMT8pTJswrj6E65Q&usqp=CAU');
fbLink.appendChild(fbImg);

var instaLink = document.createElement('a');
instaLink.setAttribute('href', 'https://www.instagram.com/webb_robotics/');
var instaImg = document.createElement('img');
instaImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomiQoY3ASxZYDNQnCBmmBBjCjmHWRYAdqnw&usqp=CAU');
instaLink.appendChild(instaImg);

var gitLink = document.createElement('a');
gitLink.setAttribute('href', 'https://github.com/FRC1466');
var gtImg = document.createElement('img');
gtImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpUiwviXomWkjsDAmGWyTp3Qp_O4ULEBYtw&usqp=CAU');
gitLink.appendChild(gtImg);

var swLink = document.createElement('a');
swLink.setAttribute('href', 'https://www.webbschool.org');
var swImg = document.createElement('img');
swImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp650nH8-Igx3zizSWhCe_yR0sKkuNE0pgxQ&usqp=CAU')
swLink.appendChild(swImg);

var frcLink = document.createElement('a');
frcLink.setAttribute('href', 'https://www.firstinspires.org/robotics/frc');
var frcImg = document.createElement('img');
frcImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNanFx4a_pl55qEqZtRCF-RN5hOGZgf2FnhA&usqp=CAU')
frcLink.appendChild(frcImg);

footer.appendChild(fbLink);
footer.appendChild(swLink);
footer.appendChild(frcLink);
footer.appendChild(gitLink);

document.getElementsByTagName('body')[0].appendChild(footer);