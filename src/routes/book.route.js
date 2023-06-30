import {Router} from  "express"
import {getSingleBook, getBookList, getBookTags} from "../controllers/book.controller.js"


const router = Router()

router.get('/', getBookList)
router.get('/tags', getBookTags)
router.get('/:bookId', getSingleBook)


export default router