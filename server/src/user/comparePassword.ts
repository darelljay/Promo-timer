import bcrypt from 'bcrypt'


export const comparePassword = async (password:string,hashedPassword:string):Promise<any>=>{
    const check = await bcrypt.compare(password,hashedPassword);

   return check;
}