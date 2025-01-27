/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";

const tokenVerification = (token: any) => {
  return jwtDecode(token as string);
};

export default tokenVerification;