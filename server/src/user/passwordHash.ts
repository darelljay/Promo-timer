import bcrypt from 'bcrypt'

export const hashPassword =  async (password:string): Promise<any> =>{
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const hashedPassword = bcrypt.hash(password,salt);

    return hashedPassword;
}

