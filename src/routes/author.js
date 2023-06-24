import {Router} from "express"


const router = Router()

router.get('/')
router.get('/:authorId')
router.get('/:authorId/books')


export default router