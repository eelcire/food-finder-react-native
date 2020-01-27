import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3Idtto5p0ZLNGN4LoWTki4vbuAD_-cwSBwfzCbMJsZwoumE4yibJ2IIKOKhy_XWEHn3NS0GOSpnKTPs-0TqPtTMLWqWdB41LgU0MDgvHX8BSSGrjFxNLLgj1rQEvXnYx'
    }
})