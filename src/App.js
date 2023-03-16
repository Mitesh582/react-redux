import './App.css';
import Header from './container/Header/Header';
import Counter from './componats/Counter/Counter';
import User from './componats/Counter/Form/User';
import ViewData from './componats/Counter/ViewData/ViewData';
import UpdateUser from './componats/Counter/UpdateUser/Update.User';
import { useSelector } from 'react-redux';

function App(){

    const { isEdit } =useSelector(state => state.userReducer)   

    return(
        <>
            <Header />
            <Counter />
            {
                isEdit 
                ?
                <UpdateUser />
                :
                <User />
            }
            <ViewData />
        </>
    )
}

export default App;