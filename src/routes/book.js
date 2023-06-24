import {Router} from  "express"
import {getSingeBook, getBookList} from "../controllers/book.js"


const router = Router()

router.get('/', getBookList)
router.get('/:bookId', getSingeBook)


export default router