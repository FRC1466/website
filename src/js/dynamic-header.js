import webblogo from '../media/webblogo.png';

function DynamicHeader() {
    let header = document.createElement('header');

    let indexWrap = document.createElement('div');
    indexWrap.setAttribute('class', 'title-container');
    let indexDiv = document.createElement('div');
    indexDiv.setAttribute('id', 'title');
    indexWrap.appendChild(indexDiv);
    let indexImg = document.createElement('img');
    indexImg.setAttribute('src', webblogo);
    indexDiv.appendChild(indexImg);
    let indexLink = document.createElement('a');
    indexLink.appendChild(document.createTextNode('Webb Robotics'));
    indexLink.setAttribute('href', '/');

    let headerWrap = document.createElement('div');
    headerWrap.setAttribute('class', 'header-container');
    headerWrap.appendChild(indexWrap);


    let indexTeam = document.createElement('div');
    indexTeam.setAttribute('class', 'team-header');
    let indexTeamNum = document.createElement('p');
    indexTeam.appendChild(indexTeamNum);
    indexTeamNum.appendChild(document.createTextNode('FRC 1466, FTC 9934, FLL 5358/5360'));
    indexDiv.appendChild(indexLink);
    headerWrap.appendChild(indexWrap);
    headerWrap.appendChild(indexTeam);
    header.appendChild(headerWrap);

    const pages_list = ['#', '#', '#'];
    // const text_list = ['About', 'Team Pages', 'Upcoming Events', 'Photo Gallery', 'Sponsors'];
    const text_list = ['FRC', 'FTC', 'FLL'];

    const dropdown_list = [8, 8, 8];
    const dropdown_content = ['/FRC/About', '/FRC/Team', '/FRC/Events', '/FRC/Photos', '/FRC/Sponsors', '/FRC/Outreach', '/FRC/Awards', '/FRC/Robots', '/FTC/About', '/FTC/Team', '/FTC/Events', '/FTC/Photos', '/FTC/Sponsors', '/FTC/Outreach', '/FTC/Awards', '/FTC/Robots', '/FLL/About', '/FLL/Team', '/FLL/Events', '/FLL/Photos', '/FLL/Sponsors', '/FLL/Outreach', '/FLL/Awards', '/FLL/Robots'];
    const dropdown_content_name = ['About', 'Team Info', 'Upcoming Events', 'Photos', 'Sponsors', 'Outreach', 'Awards', 'Robots', 'About', 'Team Info', 'Upcoming Events', 'Photos', 'Sponsors', 'Outreach', 'Awards', 'Robots', 'About', 'Team Info', 'Upcoming Events', 'Photos', 'Sponsors', 'Outreach', 'Awards', 'Robots'];

    if (dropdown_content.length !== dropdown_content_name.length) {
        console.error("Header dropdown names and pages are misaligned. Length of arrays not equal.")
    }

    const nested_dropdown_list = [0];
    const nested_dropdown_content = ['nest1.html', 'nest2.html', 'nest3.html'];
    const nested_dropdown_name = ['nest1', 'nest2', 'nest3'];

    let headerNav = document.createElement('nav');
    let dropdownIndex = 0;
    let nestedIndex = 0;

    for (let i = 0; i < text_list.length; i++)
    {
        let linkDiv = document.createElement('div');
        linkDiv.classList.add('navContainer');
        let link = document.createElement('a');
        link.appendChild(document.createTextNode(text_list[i]));
        linkDiv.appendChild(link);
        if(dropdown_list[i]) //initialize dropdown
        {    
            let dropdownButton = document.createElement('button');
            dropdownButton.classList.add('dropdown-button');
            let dropdownButtonInner = document.createElement('i');
            dropdownButtonInner.classList.add('fa', 'fa-caret-down');
            dropdownButton.appendChild(dropdownButtonInner);
            linkDiv.appendChild(dropdownButton);

            let dropdownButtonContent = document.createElement('ul');
            dropdownButtonContent.classList.add('dropdown-content');
            linkDiv.appendChild(dropdownButtonContent);
            
            // console.log(dropdown_content_name[dropdownIndex]);
            for (let j = 0; j < dropdown_list[i]; j++) //generate dropdown links
            {
                // console.log(dropdownIndex, j, i, dropdown_list[i], dropdown_content[dropdownIndex]);
                let dropdownLinkContainer = document.createElement('li');
                dropdownLinkContainer.classList.add('dropdown-link-container');
                let dropdownLink = document.createElement('a');
                dropdownLink.innerHTML = dropdown_content_name[dropdownIndex];
                
                if(!dropdown_content_name[dropdownIndex]) 
                {
                    let nestedDropdown = document.createElement('ul');
                    nestedDropdown.classList.add('dropdown-nested-container');
                    
                    for (let k = 0; k < nested_dropdown_list[dropdownIndex]; k++)
                    {
                        let nestedLinkContainer = document.createElement('li');
                        nestedLinkContainer.classList.add('nested-link-container');
                        let nestedLink = document.createElement('a');
                        nestedLink.innerHTML = nested_dropdown_name[nestedIndex];
                        nestedLink.setAttribute('href', nested_dropdown_content[nestedIndex]);

                        // console.log('hi');

                        nestedLinkContainer.appendChild(nestedLink);
                        nestedDropdown.appendChild(nestedLinkContainer);
                        nestedIndex++;
                    }
                    
                    dropdownLinkContainer.appendChild(dropdownLink);
                    dropdownLinkContainer.appendChild(nestedDropdown);
                }
                else
                {
                    dropdownLink.setAttribute('href', dropdown_content[dropdownIndex]);
                    dropdownLinkContainer.appendChild(dropdownLink);
                }

                
                
                
                dropdownButtonContent.appendChild(dropdownLinkContainer);
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
    document.getElementsByClassName('App')[0].prepend(header);
    console.log("dynamic-header.js has loaded");

    return(0);
}

export default DynamicHeader;