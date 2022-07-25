import { Router } from "express"
import multer from "multer"
import PedidosController from "../controllers/PedidosController.cjs"

const upload = multer({ dest: "uploads/" })

const router = Router()
router.post(
    "/pedido/importacao",
    upload.single("payload"), PedidosController.orderImport
)

export default router
