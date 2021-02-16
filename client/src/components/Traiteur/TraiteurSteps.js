import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {useDispatch} from 'react-redux';
import {addTraiteur} from '../../redux/actions/traiteurAction'
import {getTraiteur} from '../../redux/actions/traiteurAction'
import {useEffect} from 'react'



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));



function getSteps() {
  return ["Your email","A phone number to contact you","Select your event date", "How many people will attend this event", "where the event will be held", "What type of service", "Special request ?" , "Submit your request" ];
}



export default function TraiteurSteps() {
      // The first commit of Material-UI
      const [date, setDate] = useState("");
      const [nPerson, setNperson] = useState();
      const [adress, setAdress] = useState("");
      const [type, setType] = useState("");
      const [phone, setPhone] = useState();
      const [email, setEmail] = useState("");
      const [special, setSpecial] = useState("");

    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(getTraiteur());
  }, []);
    const handleTraiteur =()=> {
      dispatch (addTraiteur({date,nPerson,adress,type,phone,email,special}))
    }
  
      const handleDateChange = (date) => {
        setDate(date);
      };
    
  console.log(date)
  function getStepContent(step) {

  
    
  switch (step) {
    case 0:
        return        <TextField id="standard-basic" label="Standard" value={email}  onChange={(e) => setEmail(e.target.value)} />
        ;
    case 1:
        return        <TextField id="standard-basic" label="Standard" value={phone}  onChange={(e) => setPhone(e.target.value)} />
        ;
        
    case 2:
      return    <MuiPickersUtilsProvider utils={DateFnsUtils} > <KeyboardDatePicker margin="normal" id="date-picker-dialog" label="Date picker dialog" format="MM/dd/yyyy" value={date}  onChange={handleDateChange}    KeyboardButtonProps={{ 'aria-label': 'change date', }} /> </MuiPickersUtilsProvider>
      ;
    case 3:
      return        <TextField id="standard-basic" label="Standard" value={nPerson}  onChange={(e) => setNperson(e.target.value)}/>
      ;
    case 4:
      return        <TextField id="standard-basic" label="Standard" value={adress}  onChange={(e) => setAdress(e.target.value)} />
      ;
    case 5:
      return        <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={type}  onChange={(e) => setType(e.target.value)}
    >
      <MenuItem >Full Day</MenuItem>
      <MenuItem >Brunch</MenuItem>
      <MenuItem >Apero</MenuItem>
    </Select>
      ;
    case 6:
      return        <TextField id="standard-basic" label="Standard" value={special}  onChange={(e) => setSpecial(e.target.value)}/> 
      ;

    case 7:
        return        'We will get back to you soon' 
        ;
  

    default:
      return "Unknown step";
  }
}


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ?
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleTraiteur}
                    className={classes.button}
                  >
                     Finish
                  </Button>: <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                     Next
                  </Button>}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
