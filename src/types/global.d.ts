import { Request, Response } from 'express'

type Controller = (req: Request, res: Response) => void
