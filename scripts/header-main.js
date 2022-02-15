let header = document.createElement('header');

let indexWrap = document.createElement('div');
indexWrap.setAttribute('class', 'title-container');
let indexDiv = document.createElement('div');
indexDiv.setAttribute('id', 'title');
indexWrap.appendChild(indexDiv);
let indexImg = document.createElement('img');
indexImg.setAttribute('src', 'media/webblogo.png');
indexDiv.appendChild(indexImg);
let indexLink = document.createElement('a');
indexLink.appendChild(document.createTextNode('Webb Robotics'));
indexLink.setAttribute('href', 'index.html');

let headerWrap = document.createElement('div');
headerWrap.setAttribute('class', 'header-container');
headerWrap.appendChild(indexWrap);


let indexTeam = document.createElement('div');
indexTeam.setAttribute('class', 'team-header');
let indexTeamNum = document.createElement('p');
indexTeam.appendChild(indexTeamNum);
indexTeamNum.appendChild(document.createTextNode('1466'));
indexDiv.appendChild(indexLink);
headerWrap.appendChild(indexWrap);
headerWrap.appendChild(indexTeam);
header.appendChild(headerWrap);

pages_list = ['about-team.html', 'first-robotics.html', 'calendar.html', 'photo-gallery.html', 'sponsor-info.html'];
text_list = ['About', 'FIRST Robotics', 'Upcoming Events', 'Photo Gallery', 'Sponsors'];
dropdown_list = [2, 1, 0, 1, 0];
dropdown_content = ['test1.html', 'test2.html', 'test3.html', 'test4.html'];
dropdown_content_name = ['test1', 'test2', 'test3', 'test4', 'test5'];

let headerNav = document.createElement('nav');
let dropdownIndex = 0;

for (let i = 0; i < text_list.length; i++)
{
    let linkDiv = document.createElement('div');
    linkDiv.classList.add('navContainer');
    let link = document.createElement('a');
    link.appendChild(document.createTextNode(text_list[i]));
    linkDiv.appendChild(link);
    if(dropdown_list[i])
    {    
        let dropdownButton = document.createElement('button');
        dropdownButton.classList.add('dropdown-button');
        let dropdownButtonInner = document.createElement('i');
        dropdownButtonInner.classList.add('fa', 'fa-caret-down');
        dropdownButton.appendChild(dropdownButtonInner);
        linkDiv.appendChild(dropdownButton);

        let dropdownButtonContent = document.createElement('div');
        dropdownButtonContent.classList.add('dropdown-content');
        linkDiv.appendChild(dropdownButtonContent);
        
        

        for (let j = 0; j < dropdown_list[i]; j++)
            {
                // console.log(dropdownIndex, j, i, dropdown_list[i], dropdown_content[dropdownIndex]);
                let dropdownLink = document.createElement('a');
                dropdownLink.setAttribute('href', dropdown_content[dropdownIndex]);
                dropdownLink.innerHTML = dropdown_content_name[dropdownIndex];
                dropdownButtonContent.appendChild(dropdownLink);
                dropdownIndex++;
            }

    }
    else 
    {
        link.setAttribute('href', pages_list[i]);
    }
    headerNav.appendChild(linkDiv);
}

header.appendChild(headerNav);
document.getElementsByTagName('body')[0].appendChild(header);
