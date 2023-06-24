import {Router} from  "express"
import {getSingeBook, getBookList} from "../controllers/book.js"


const router = Router()

router.get('/', getBookList)
router.get('/book/:bookId', getSingeBook)


export default router