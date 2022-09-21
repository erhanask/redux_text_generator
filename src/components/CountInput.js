import {useDispatch} from "react-redux";
import {fetchText} from "../redux/generatorSlice";

export const CountInput = () => {
    const dispatch = useDispatch();

    return (
        <div className={`count-input-wrapper`} style={{width: '100%',textAlign:'left'}}>
            <div style={{display: 'inline-block', textAlign: 'left'}}>
                <label style={{color: 'black', fontSize: 'smaller'}}>Paragraphs</label>
                <div>
                    <input min={0} defaultValue={4} onChange={(e) => dispatch(fetchText(e.target.value))} type={`number`} className={`count-input`} style={{width: '55%', padding: '5px'}}/>
                </div>
            </div>
            <div style={{display: 'inline-block', textAlign: 'left'}}>
                <label style={{color: 'black',fontSize: 'smaller'}}>Type</label>
                <div>
                    <select onChange={(e) => dispatch(fetchText(e.target.value))} style={{width: '100%', padding: '5px'}}>
                        <option value={`html`}>HTML</option>
                        <option value={`text`}>TEXT</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
