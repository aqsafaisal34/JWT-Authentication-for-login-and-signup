import { GlobalContext } from '../../context';
import { useContext } from "react";



let Profile = () => {
   
 let {state, dispatch} = useContext(GlobalContext);

 

    return (
        <div >            
        {(state.user === null) ?
            <div>Loading...</div>
            :
            <div>
                id: {state.user?._id}
                <br />
                name: {state.user?.firstName} {state.user?.lastName}
                <br />
                email: {state.user?.email}
                <br />
                age: {state.user?.age}
            </div>
        }

    </div>
);
}

export default Profile;