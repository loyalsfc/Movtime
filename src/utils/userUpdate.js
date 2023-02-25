import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'

const userUpdate = (user) => {
    const dispatch = useDispatch()

    

    console.log(user)
}

export default userUpdate
