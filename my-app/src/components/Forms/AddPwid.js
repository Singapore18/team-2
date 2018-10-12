import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {addPwid} from '../../services';
import ResumeTemplate from '../ResumeTemplate';

const styles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
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
    menu: {
        width: 200,
    },
});

const industries = [
    {
        value: 'hotel',
        label: 'Hotel',
    },
    {
        value: 'food_and_beverage',
        label: 'Food & Beverage',
    },
    {
        value: 'shopping',
        label: 'Shopping',
    }
];

const skills = [
    {
        value: 'carpentry',
        label: 'Carpentry',
    },
    {
        value: 'administrative',
        label: 'Administrative',
    },
    {
        value: 'cleaning',
        label: 'Cleaning',
    },
    {
        value: 'cooking',
        label: 'Cooking',
    },
    {
        value: 'Customer Service',
        label: 'Customer Service',
    }
];

const jobtype = [
    {
        value: 'fulltime',
        label: 'Full time',
    },
    {
        value: 'parttime',
        label: 'Part time',
    },
];

const starthours = [
    {
        value: '9:00am',
        label: '9:00am',
    },
    {
        value: '10:00am',
        label: '10:00am',
    },
    {
        value: '12:00pm',
        label: '12:00pm',
    },
];

const endhours = [
    {
        value: '4:00pm',
        label: '4:00pm',
    },
    {
        value: '6:00pm',
        label: '6:00pm',
    },
    {
        value: '8:00pm',
        label: '8:00pm',
    },
];

const days = [
    {
        value: 'weekdays',
        label: 'Weekdays',
    },
    {
        value: 'weekends',
        label: 'Weekends',
    },
];

class AddJob extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            address: "",
            region: "",
            industry: "",
            jobTitle: "",
            skill1: "",
            skill2: "",
            skill3: "",
            interest1: "",
            interest2: "",
            interest3: "",
            description: "",
            days: "",
            startHour: "",
            endHour: "",
            contactname: "",
            contactphone: "",
            contactemail: "",
            resume: false,
            form: true,
        }
    }

    handleChange = name => event => {
        console.log(name);
        console.log(event.target.value);
        this.setState({
          [name]: event.target.value,
        });
      };

    onSubmit = () => {
        const { company_name, address, region, industry, jobTitle, skill1, skill2, skill3, description, days, startHour, endHour, contactname, contactphone, contactemail} = this.state;
        this.setState({
            resume: true,
            form: false,
          });
        //addPwid(company_name, address, region, industry, jobTitle, skill1, skill2, skill3, description, days, startHour, endHour, contactname, contactphone, contactemail);
    }

    render() {

        const { classes } = this.props;
        return (
            <div className={classes.layout}>
                {
                    this.state.form ? 
                    <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Add Person with Intellectual Disabilities
                    </Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="full_name"
                                    name="fullname"
                                    label="Full Name"
                                    fullWidth
                                    onChange={this.handleChange('fullname')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="skills1"
                                    select
                                    name="skill1"
                                    label="Skills 1"
                                    onChange={this.handleChange('skill1')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.skill1}
                                >
                                    {skills.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="skills2"
                                    name="skill2"
                                    select
                                    label="Skills 2"
                                    onChange={this.handleChange('skill2')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.skill2}
                                >
                                    {skills.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField
                                    id="interest1"
                                    select
                                    name="interest1"
                                    label="Interest 1"
                                    onChange={this.handleChange('interest1')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.interest1}
                                >
                                    {industries.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="interest2"
                                    name="interest2"
                                    select
                                    label="Interest 2"
                                    onChange={this.handleChange('interest2')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.interest2}
                                >
                                    {industries.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="interest3"
                                    name="interest3"
                                    select
                                    label="Interest 3"
                                    onChange={this.handleChange('interest3')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.interest3}
                                >
                                    {industries.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    onChange={this.handleChange('address')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="region"
                                    name="region"
                                    label="Preferred Work Region"
                                    fullWidth
                                    onChange={this.handleChange('region')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="isFullTime"
                                    name="isFullTime"
                                    select
                                    label="Full time/part time"
                                    onChange={this.handleChange('isFullTime')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.skill2}
                                >
                                    {jobtype.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit}>
                            Generate Resume
                        </Button>
                        
                    </form>
                </Paper>
                :
                ""    
                }
                
                {this.state.resume ? <ResumeTemplate fullname={this.state.fullname} skill1={this.state.skill1} skill2={this.state.skill2} interest1={this.state.interest1} interest2={this.state.interest2} interest3={this.state.interest3}/> : ""}
            </div >
        );
    }
}

export default withStyles(styles)(AddJob);