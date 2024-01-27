import { Router } from 'express';

const router = Router();

router.get( '/users' , ( req , res , next ) => {
  res.send( { router : "users"} )
} )

export default router;