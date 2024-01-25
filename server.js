const express = require('express');

/**
 * Ce code exporte une fonction par défaut qui prend un objet serveur comme paramètre. À l'intérieur de
  la fonction, il configure un middleware utilisant Express.js pour servir les fichiers statiques du
  répertoire « public ». Enfin, il renvoie l'objet serveur.
 * @param server - Le paramètre serveur est une instance du serveur Express.js.
 * @returns L'objet serveur avec le middleware de fichiers statiques configuré.
*/
function serverConfiguration( server ){

  server.use(express.static('public'));

  return server;

}

module.exports.default = serverConfiguration;