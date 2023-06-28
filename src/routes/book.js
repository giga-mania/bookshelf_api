import {Router} from  "express"
import {getSingeBook, getBookList, getBookTags} from "../controllers/book.js"


const router = Router()

router.get('/', getBookList)
router.get('/:bookId', getSingeBook)
router.get('/tags', getBookTags)


export default router