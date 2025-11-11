// routes/results.routes.js
import express from "express";
import { isAdmin, verifyToken } from "../middlewares/auth.js";
import { getVotersByProduct, getVotingResults, voteProduct } from "../controllers/vote.controllers.js";

const router = express.Router();

router.post("/voteProduct/:id", verifyToken, voteProduct)
// router.get("/votosByProduct/:id", verifyToken, isAdmin, getVotersByProduct );
router.get("/votosByProduct/:id", getVotersByProduct );

router.get("/AllVotos", getVotingResults);

export default router;
