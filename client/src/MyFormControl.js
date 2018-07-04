import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class MyFormControl extends React.Component{
    render(){
        return(
            <FormControl fullWidth={true}>
                <InputLabel htmlFor="name-simple" style={{fontSize: 20}}><b>{this.props.label}</b></InputLabel>
                <Input id="name-simple" value={this.props.field} onChange={this.props.handleChange} />
            </FormControl>
        )
    }
}

export default MyFormControl;