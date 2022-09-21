import {useDispatch, useSelector} from "react-redux";
import {fetchText, textItem, textStatus} from "../redux/generatorSlice";
import {useEffect} from "react";


export const TextView = () => {

    const dispatch = useDispatch();
    const data = useSelector(textItem);
    const status = useSelector(textStatus);

    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchText())
    },[dispatch,status])

    return(
        <div style={{color:'black',backgroundColor:'lightgray',padding:'5px',textAlign:'left',margin:'5px 0px'}}>
            {data}
        </div>
    )
}
