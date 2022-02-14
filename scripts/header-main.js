let header = document.createElement('header');

let indexWrap = document.createElement('div')
indexWrap.setAttribute('class', 'title-container');
let indexDiv = document.createElement('div')
indexDiv.setAttribute('id', 'title');
indexWrap.appendChild(indexDiv);
let indexImg = document.createElement('img');
indexImg.setAttribute('src', 'media/webblogo.png')
indexDiv.appendChild(indexImg);
let indexLink = document.createElement('a')
indexLink.appendChild(document.createTextNode('Webb Robotics'));
indexLink.setAttribute('href', 'index.html');

let headerWrap = document.createElement('div')
headerWrap.setAttribute('class', 'header-container');
headerWrap.appendChild(indexWrap);


let indexTeam = document.createElement('div')
indexTeam.setAttribute('class', 'team-header');
let indexTeamNum = document.createElement('p')
indexTeam.appendChild(indexTeamNum);
indexTeamNum.appendChild(document.createTextNode('1466'))
indexDiv.appendChild(indexLink);
headerWrap.appendChild(indexWrap);
headerWrap.appendChild(indexTeam);
header.appendChild(headerWrap);

pages_list = [null, 'first.html', 'calendar.html', 'photo-gallery.html', null];
text_list = ['About', 'FIRST Robotics', 'Upcoming Events', 'Photo Gallery', 'Sponsors'];

let headerNav = document.createElement('nav');

for (let i = 0; i < text_list.length; i++)
{
    let linkDiv = document.createElement('div');
    linkDiv.classList.add('navContainer');
    let link = document.createElement('a');
    if(pages_list[i])
    {    
        link.setAttribute('href', pages_list[i]);
    }
    link.appendChild(document.createTextNode(text_list[i]));
    linkDiv.appendChild(link);
    headerNav.appendChild(linkDiv);
}

header.appendChild(headerNav);
document.getElementsByTagName('body')[0].appendChild(header);
