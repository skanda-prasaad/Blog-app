import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("Request working");
})

export default router