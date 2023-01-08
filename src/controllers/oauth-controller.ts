import oauthService from "@/services/oauth-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function loginGitHub(req: Request, res: Response) {
  const code = req.body.code as string;
  try {
    const response = await oauthService.oauthSession(code);
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
