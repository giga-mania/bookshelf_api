import {Router} from  "express"


const router = Router()

router.get('/')
router.get('/book/:bookId')


export default router