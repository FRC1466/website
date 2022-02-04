var currentFileName = location.pathname.split("/").slice(-1);
console.log(currentFileName);

var body = document.getElementsByTagName('body')[0];
var footer = body.getElementsByTagName('footer')[0];

if(currentFileName == "index.html") {
    body.style.cssText += 'display: grid';
    footer.style.cssText += 'display:inline-grid; grid-row:3;';
    
}



//body.style.cssText += 'display: grid; grid-template-rows: auto 400px 200px 200px 200px auto; grid-template-columns: 40% 20% 40%;';