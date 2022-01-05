var currentFileName = location.pathname.split("/").slice(-1);
console.log(currentFileName);

var body = document.getElementsByTagName('body')[0];

switch(currentFileName){
    case "index.html":
        body.style.cssText += 'display: grid; grid-template-rows: auto 400px 200px 200px 200px auto; grid-template-columns: 40% 20% 40%;';
        break;
}