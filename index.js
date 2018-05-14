const fs = require('fs');

// Function adding current timestamp to date.txt file

function getDateEverySecond() {
  fs.appendFile("date.txt", Date.now() + "\r\n", (error) => {
    if(error) return console.log("Erreur lors de l'écriture du timestamp : " + error);
  });

  console.log("Currently writing", Date.now() + " in date.txt file");
}

setInterval(getDateEverySecond, 1000);
