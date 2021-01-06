
import axios from 'axios';

class User  {
	constructor(props) {
		//super(props);
		this.state = {
            user:props
        };
        this.isAuthorized=false;
	}
   setToken(token)
    {
       // alert("Set Token: "+token)
        this._token=token;
    }
    getToken ()
    {
        return this._token;
    }
    auth (em, pw)
	{
		axios.get("http://localhost:8888/symto.net/reactauth.php", 
		{
			params: {
				username:em, 
				password:pw
			}
		})
		.then (request =>
		{
			const data = request.data;

			const token=data.token;
//alert(data.token);
			if (token.length>5)
			{
				localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('token', token);
                alert(data.lname);
                return true;
            }else{
				return false;
			}
		});
	}
}

export default User
