import dotenv from "dotenv";
dotenv.config();
import express,{Application} from "express";
import { initAppExpress } from "./src/server/initExpress";

const PORT: number = parseInt(process.env.PORT || '3000', 10);

const app: Application = express();

initAppExpress(app).then(()=>{
    app.listen(PORT,()=>{
        console.log("**----------------------------------**");
        console.log("====      Server is On...!!!      ====");
        console.log("**----------------------------------**");
    })
}).catch((error:any)=>{
    console.error('Server failed to start:', error);

});


