import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default class FormField extends React.Component {
  render() {
    return <Grid container direction="row">
      <Grid item xs={2}>
        {this.props.label}
      </Grid>
      <Grid item xs={10}>
        <TextField value={this.props.value} onChange={(e) => this.props.onChange(this.props.key, e.target.value)}/>
      </Grid>
    </Grid>
  }
}