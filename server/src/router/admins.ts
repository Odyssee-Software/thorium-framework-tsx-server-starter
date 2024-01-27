import { Router } from 'express';

const router = Router();

router.get( '/admins' , ( req , res , next ) => {
  res.send( { router : "admin"} )
} )

export default router;