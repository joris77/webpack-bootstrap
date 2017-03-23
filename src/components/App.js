import React from 'react'
import styles from './App.scss'
import { FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap'

const App = () => (
    <div className={styles.app}>
        <form>
            <FormGroup
                controlId="formBasicText"
                bsSize="small"
            > <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Enter text!!!"
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
        </form>
    </div>
);

export default App;
