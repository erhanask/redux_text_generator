import {useDispatch, useSelector} from "react-redux";
import {fetchText, textItem, textStatus} from "../redux/generatorSlice";
import {useEffect} from "react";
import {Textarea} from "@chakra-ui/react";


export const TextView = () => {

    const dispatch = useDispatch();
    const data = useSelector(textItem);
    const status = useSelector(textStatus);
    const text = useSelector(state => state.text.item);

    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchText())
    },[dispatch,status])

    return(
        <div style={{color:'black',backgroundColor:'lightgray',padding:'5px',textAlign:'left',margin:'5px 0px'}}>
            <Textarea rows={20} isReadOnly={true} value={text} h="auto" border="none" />
        </div>
    )
}
