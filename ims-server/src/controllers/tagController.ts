import { type Request, type Response } from 'express'
import TagSchema from '../models/tagModel'

export default class TagController {
  public async addTag (req: Request, res: Response) {
    try {
      const tag = await TagSchema.create(req.body)
      return res.status(200).json(tag)
    } catch (error) {
      return res.status(404).json({ message: error })
    }
  }

  public async getAllTags (req: Request, res: Response) {
    try {
      const tags = await TagSchema.find()
      return res.status(200).json(tags)
    } catch (error) {
      return res.status(404).json({ message: error })
    }
  }

}

