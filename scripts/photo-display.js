const fs = require('fs');
const mediaPath = './media/photo-gallery/FTC';

var currentFileName = location.pathname.split("/").slice(-1);
console.log(currentFileName);

fs.readdir(dir, (err, files) => {
    console.log(files.length);
  });
  



if (currentFileName == 'FLL-photo-gallery.html') {
    console.log("Loading FLL photos...");
    
}

if (currentFileName == 'FRC-photo-gallery.html') {
    
    console.log("Loading FRC photos...");

    getFileCount('media/photo-gallery/FTC');

    for (let i = 0; i < 5; i++) {

    }


}

if (currentFileName == 'FTC-photo-gallery.html') {
    console.log("Loading FTC photos...");

}