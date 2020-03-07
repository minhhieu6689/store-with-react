import Cookies from 'js-cookie';
import axios from 'axios';

const Authenticate = {

    isAuthenticated(cb){
        if(cb != null)
        {
            return cb
        }
        const result = Cookies.get('token') != null ? true : false
        return result;
    },

    authenticate(cb) {
        this.isAuthenticated(true)
        //setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated(false)
    }
}
export default Authenticate