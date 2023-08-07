import { instance } from '../axios'
import { postSigninPath } from '../path'

export const SignInService = (data) => 
instance({
    url: postSigninPath,
    method: "POST",
    data,
}).then((res) => Promise.resolve(res))
.catch((err) => Promise.reject(err));