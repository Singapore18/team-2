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
import {addJob} from '../../services';

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

class AddJob extends Component {
    constructor() {
        super();
        this.state = {
            company_name: "",
            address: "",
            region: "",
            industry: "",
            jobTitle: "",
            skill1: "",
            skill2: "",
            skill3: "",
            description: "",
            days: "",
            startHour: "",
            endHour: "",
            contactname: "",
            contactphone: "",
            contactemail: "",
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
        
        //addJob(company_name, address, region, industry, jobTitle, skill1, skill2, skill3, description, days, startHour, endHour, contactname, contactphone, contactemail);
    }

    render() {

        const { classes } = this.props;
        return (
            <div className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        Add Job
                    </Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="company_name"
                                    name="company_name"
                                    label="Company Name"
                                    fullWidth
                                    onChange={this.handleChange('company_name')}
                                />
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
                                    label="Region"
                                    fullWidth
                                    onChange={this.handleChange('region')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="industry"
                                    name="industry"
                                    select
                                    label="Industry"
                                    onChange={this.handleChange('industry')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.industry}
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
                                    id="skills3"
                                    name="skill3"
                                    select
                                    label="Skills 3"
                                    onChange={this.handleChange('skill3')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.skill3}
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
                                    required
                                    id="description"
                                    name="description"
                                    label="Description"
                                    fullWidth
                                    onChange={this.handleChange('description')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="start_hours"
                                    select
                                    label="Start Hour"
                                    name="startHour"
                                    onChange={this.handleChange('startHour')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.startHour}
                                >
                                    {starthours.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="end_hours"
                                    select
                                    label="End Hour"
                                    name="endHour"
                                    onChange={this.handleChange('endHour')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.endHour}
                                >
                                    {endhours.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="days"
                                    select
                                    label="Days"
                                    name="days"
                                    onChange={this.handleChange('days')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.days}
                                >
                                    {days.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="isfulltime"
                                    select
                                    label="Full time/part time"
                                    name="isFullTime"
                                    onChange={this.handleChange('isFullTime')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    fullWidth
                                    value={this.state.days}
                                >
                                    {jobtype.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="contact_name"
                                    name="contactname"
                                    label="Contact Name"
                                    fullWidth
                                    onChange={this.handleChange('contact_name')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="phone"
                                    name="contactphone"
                                    label="Contact Number"
                                    fullWidth
                                    onChange={this.handleChange('contact_number')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="contact_email"
                                    name="contactemail"
                                    label="Contact Email"
                                    fullWidth
                                    onChange={this.handleChange('contact_email')}
                                />
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit}>
                            Submit
                        </Button>
                    </form>
                </Paper>
            </div >
        );
    }
}

export default withStyles(styles)(AddJob);