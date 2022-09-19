export const CountInput = () => {


    return (
        <div className={`count-input-wrapper`} style={{width: '100%',textAlign:'left'}}>
            <div style={{display: 'inline-block', textAlign: 'left'}}>
                <label style={{color: 'black', fontSize: 'smaller'}}>Paragraphs</label>
                <div>
                    <input type={`number`} className={`count-input`} style={{width: '55%', padding: '5px'}}/>
                </div>
            </div>
            <div style={{display: 'inline-block', textAlign: 'left'}}>
                <label style={{color: 'black',fontSize: 'smaller'}}>Type</label>
                <div>
                    <select style={{width: '100%', padding: '5px'}}>
                        <option>HTML</option>
                        <option>Normal</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
