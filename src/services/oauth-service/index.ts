import userRepository from "@/repositories/user-repository";
import faker from "@faker-js/faker";
import bcrypt from "bcrypt";
import axios from "axios";
import authenticationService from "../authentication-service";

async function oauthSession(code: string) {
  const response = await axios.post("https://github.com/login/oauth/access_token", {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code
  });
  const token = response.data.slice(13).split("&")[0];
  const userResponse = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const user = await userRepository.findByEmail(userResponse.data.email);
  if(user) {
    const session = await authenticationService.createSession(user.id);
    return({ user: { id: user.id, email: user.email }, token: session });
  }
  const tempPassword = await bcrypt.hash(faker.random.alphaNumeric(20), 12);
  const newUser = await userRepository.create({ email: userResponse.data.email, password: tempPassword });
  const session = await authenticationService.createSession(newUser.id);
  return ({ user: { id: newUser.id, email: newUser.email }, token: session });
}

const oauthService = {
  oauthSession
};

export default oauthService;
