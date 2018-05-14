const fs = require('fs');

function getDateEverySecond() {
  fs.appendFile("date.txt", Date.now() + "\r\n", (error) => {
    if(error) return console.log("Erreur lors de l'écriture du timestamp : " + error);
  });

  console.log("Currently writing", Date.now());
}

setInterval(getDateEverySecond, 1000);
