import {Router} from "express"
import {getAuthorList, getSingleAuthor, getAuthorBooks } from "../controllers/author.js"


const router = Router()

router.get('/', getAuthorList)
router.get('/:authorId', getSingleAuthor)
router.get('/:authorId/books', getAuthorBooks)


export default router