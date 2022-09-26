import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
export function login(req,res){
    let { name, email, password, age } = req.body;
    let hashedPassword=Users.password
    if ( !email || !password ) {
		return res.status(400).json({
			message: `Please fill all the fields ${
				!email ? 'email, ' : ''
			}${!password ? 'password, ' : ''}}`,
		});
	}
    
    bcrypt.compare(password,hashedPassword)
    .then(doMatch=>{
        if(doMatch){
             res.json({message:"SignIn successfull"})
         
            res.json({token,user:{email,name}})
        }else{
            return res.status(422).json({error:"Invalid Email or Password"})}
    
  
   
}