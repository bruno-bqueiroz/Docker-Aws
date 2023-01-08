import { loginGitHub } from "@/controllers/oauth-controller";
import { Router } from "express";

const oauthRouter = Router();
oauthRouter.post("/github/login", loginGitHub);

export { oauthRouter };
