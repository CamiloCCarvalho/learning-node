import { Router, Request, Response } from 'express'

const router = Router();

router.get('/:id', (req:Request, res:Response)=> {
  console.log(req.params.id)
  res.status(200).send(`ID: ${req.params.id}`)
})

export default router
