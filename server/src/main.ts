import { Express } from 'express';
import { default as morgan } from 'morgan';

export default ( server:Express ) => {

  server.use( morgan( 'tiny' ) );

  server.get('/test' , ( req , res , next ) => {
    res.header({ 'Content-Type' : 'application/json' }).send({
      message : 'hello world from custom endpoint'
    })
  });

  return server;

}