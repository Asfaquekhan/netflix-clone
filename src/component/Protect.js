
import { useNavigate } from 'react-router-dom'
import { UserAuth } from './context/Auth'
export default function Protect({children}) {
    const {user}=UserAuth()
    const nagivate=useNavigate()
 
      if(!user?.email){
        return nagivate('/')
      }
      else{
        return children
      }

   
  
}
