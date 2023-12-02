import Magazine_snippets from './Magazine-snippets'
import Fetch_empty from './Fetch_empty'
import Fetch_loader from './Fetch_loader'
import Fectch_error from './Fectch_error'
import { useSelector } from 'react-redux'






const Magazine_snippets_container = () => {

    let error = useSelector(state=>state.fromMagazine.error);
    let loading = useSelector(state=>state.fromMagazine.loading);
    let data = useSelector(state=>state.fromMagazine.data);


    if(loading == true){

        return (
            <Fetch_loader/>
        )

    }else if(error == true){

        return (
            <Fectch_error/>
        )

    }else if(loading == false && error == false && data.length == 1){
        
        return <Fetch_empty/>

    }else{

        return (
            <div className='Magazine-snippets-container'>
                <div className='snippets-container'>
                    {data.slice(1,5).map((item,i)=> <Magazine_snippets data={item} key={i}/> )}
                </div>
            </div>
        )

    }

}

export default Magazine_snippets_container
