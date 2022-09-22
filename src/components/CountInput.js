import {useDispatch} from "react-redux";
import {fetchText} from "../redux/generatorSlice";
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper, Select
} from "@chakra-ui/react";

export const CountInput = () => {
    const dispatch = useDispatch();

    return (
        //states will be used on input values.
        <div className={`count-input-wrapper`} style={{width: '100%', textAlign: 'left'}}>
            <div style={{textAlign: 'left'}}>
                <label style={{color: 'black', fontSize: 'smaller'}}>Paragraphs</label>
                    <NumberInput
                        onChange={(valueString) => dispatch(fetchText({paras:valueString,format: `html`}))}
                        value={4}
                        min={1}
                        style={{color:'black'}}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
            </div>
            <div style={{textAlign: 'left'}}>
                <label style={{color: 'black', fontSize: 'smaller'}}>Type</label>
                    <Select onChange={(e) => {
                        dispatch(fetchText({paras:4,format: e.target.value}))
                    }} style={{color: 'black',width: '100%', margin: '0px 0px 0px 5px'}}>
                        <option value={`html`}>HTML</option>
                        <option value={`text`}>TEXT</option>
                    </Select>
            </div>
        </div>
    )
}
