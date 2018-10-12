import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import AllInbox from '@material-ui/icons/AllInbox';
import TagFaces from '@material-ui/icons/TagFaces';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    icon: {
        
    }
});

class ResumeTemplate extends Component {

    render() {
        const { classes, fullname, interest1, interest2, interest3, skill1, skill2, skill3 } = this.props;
        // const name = "Jason";
        // const interest1 = "shopping";
        // const interest2 = "listening to music";
        // const interest3 = "spending time with family";


        return (
            <div className={classes.layout} >
                <Paper className={classes.paper}>
                    <Typography component="h2" variant="display2" align="center" style={{ color: '#6969B3' }} gutterBottom >
                        Hello, my name is {fullname}.
                    </Typography>
                    <br></br>
                    <Typography component="h2" variant="headline" align="center" style={{ color: '#000' }} gutterBottom >
                        My personal interests: 
                    </Typography>
                    <Typography component="h2" variant="display1" align="center" style={{ color: '#FE5F55' }} gutterBottom >
                        I love <ShoppingBasket /> {interest1} <ShoppingBasket />, {interest2} and {interest3} .
                    </Typography>
                    <br></br><br></br>
                    <Typography component="h2" variant="headline" align="center" style={{ color: '#000' }} gutterBottom >
                        My skills are: {this.props.skill1}, {this.props.skill2}
                    </Typography>
                    
                    <br></br><br></br>
                    <Typography component="h2" variant="headline" align="center" style={{ color: '#000' }} gutterBottom >
                    Please give me simple and clear instructions, encouragement and guidance. I may be slow in the beginning but with time, let me show you my capabilities!
                    </Typography>
                    <br></br><br></br>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Click here to hire me
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ResumeTemplate);