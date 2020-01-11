import React, {useContext} from 'react';
import Wrapper from './Wrapper';

const Form = () => {

    const context = useContext(Wrapper);
    const onChangeHandler = event => {
        context.setName(
            context.name = event.target.value
        )
        console.log(context.name)
    }

    return(
        <form className="row form-group">
            <label className="col-2">Your Name:</label>
            {/* <label className="col-2">Put Yo' Bitch-Ass Name Here:</label> */}
            <input className="form-control col-5" type="text" onChange={onChangeHandler}/>
        </form>
    )
}
export default Form;