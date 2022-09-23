import {useDispatch} from "react-redux";
import {fetchText} from "../redux/generatorSlice";
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper, Select, Switch
} from "@chakra-ui/react";
import {useState} from "react";

export const CountInput = () => {
    const dispatch = useDispatch();

    const [paras, setParas] = useState('4');
    const [format, setFormat] = useState();

    const fetchHandler = () => {
        dispatch(fetchText({paras: paras, format: format}))
    }

    return (
        //states will be used on input values.
        <div className={`count-input-wrapper`} style={{width: '100%', textAlign: 'left'}}>
            <div style={{textAlign: 'left'}}>
                <label style={{color: 'black', fontSize: 'smaller'}}>Paragraphs</label>
                <NumberInput
                    onChange={(valueString) => {
                        setParas(valueString);
                        fetchHandler();
                    }}
                    value={paras}
                    min={1}
                    style={{color: 'black'}}
                >
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                    </NumberInputStepper>
                </NumberInput>
            </div>
            <div style={{textAlign: 'left'}}>
                <label style={{color: 'black', fontSize: 'smaller'}}>Turn To Text</label>
                <Switch onChange={() => {
                    setFormat(format === 'html' ? 'text' : 'html');
                    fetchHandler();
                }} style={{display: 'block'}}>
                </Switch >
            </div>
        </div>
    )
}
