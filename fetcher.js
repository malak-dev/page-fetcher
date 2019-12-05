const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);
let url = args[0];
let location = args[1];

let fileName = location.split("/").pop();
let filePath = location.replace('/' + fileName, '');
if (fs.existsSync(filePath)) {
  request(url, (error, response, body) => {
    fs.writeFile(location, body, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Downloaded and saved ${body.length} Bytes to ${location}`);
      }
    });
  });
} else {
  console.log('invalid path');
}