import DB_functions from "../database/simpleFunction";

const user = new DB_functions();

const getTime = (req:Request,res:Response):any =>{
    const {time} = req.body;

}