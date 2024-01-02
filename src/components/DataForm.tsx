import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker  } from "@mui/x-date-pickers";
import {Grid, Typography, TextField, ThemeProvider, createTheme, CircularProgress, Button, Checkbox, FormLabel, FormControl, FormGroup, FormControlLabel } from '@mui/material';
import { useFormik } from 'formik';
import { formSchema } from '../schemas/schema';
import dayjs from 'dayjs';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const onSubmit = async (Result: any, actions: any) => {
    console.log(Result)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    
}

interface FromResult {
    name: string;
    dob: Date;
    email: string;
    hobbies: string[];
}

const Result: FromResult = {
    name: "",
    dob: null as unknown as Date,
    email: "",
    hobbies: [] as string[],
}

const DataForm = () => {

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit, setFieldValue, setFieldTouched } = useFormik({
        initialValues: Result,  
        validationSchema: formSchema,
        onSubmit
    });

    const handleDateChange = (value: any) => {
        setFieldTouched('dob', true);
        setFieldValue('dob', value ? dayjs(value).toDate() : null);
    };


    return (
        <ThemeProvider theme={darkTheme}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container rowSpacing={4}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ marginBottom: "2%", marginTop: "2%" }}
                >
                  Form
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.name ? errors.name : ""}
                  error={touched.name && Boolean(errors.name)}
                  id="name"
                  label="Name"
                  variant="outlined"
                  sx={{ width: "50%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date of birth"
                    format="dd/MM/yyyy"
                    value={values.dob}
                    onChange={handleDateChange}
                    sx={{
                      width: "50%",
                    }}
                    slotProps={{
                      textField: {
                        id: "dob",
                        helperText: touched.dob && errors.dob != undefined ? String(errors.dob) : "",
                        error: touched.dob && Boolean(errors.dob),
                        inputProps: {
                          readOnly: true,
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email ? errors.email : ""}
                  error={touched.email && Boolean(errors.email)}
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  sx={{ width: "50%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  sx={{
                    width: "50%",
                    border: 1,
                    borderRadius: 1,
                    color: "rgba(255, 255, 255, 0.23)",
                    paddingBottom: "2%",
                    "&:focus-within": { border: "2px solid #90caf9", margin: "-1px" },
                    "&:hover": { color: "white" },
                    ...(touched.hobbies && errors.hobbies && { border: "1px solid #f44336",
                        "&:focus-within": { border: "2px solid #f44336", margin: "-1px",},
                      }),
                  }}
                >
                  <FormLabel
                    component="legend"
                    sx={{
                      textAlign: "left",
                      marginBottom: "4%",
                      marginTop: "4%",
                      marginLeft: "2%",
                      ...(touched.hobbies && errors.hobbies && { color: "#f44336!important",
                          "&:focus-within": { color: "#f44336" },
                        }),
                    }}
                  >
                    Hobbies
                  </FormLabel>
                  <FormGroup
                    sx={{
                      color: "#bebebe",
                      marginLeft: "2.5%",
                      ...(touched.hobbies && errors.hobbies && { color: "#f44336" }),
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            ...(touched.hobbies &&
                              errors.hobbies && { color: "#f44336" }),
                          }}
                          checked={values.hobbies.includes("Soccer")}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="hobbies"
                          value="Soccer"
                        />
                      }
                      label="Soccer"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            ...(touched.hobbies &&
                              errors.hobbies && { color: "#f44336" }),
                          }}
                          checked={values.hobbies.includes("Running")}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="hobbies"
                          value="Running"
                        />
                      }
                      label="Running"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            ...(touched.hobbies &&
                              errors.hobbies && { color: "#f44336" }),
                          }}
                          checked={values.hobbies.includes("Hiking")}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="hobbies"
                          value="Hiking"
                        />
                      }
                      label="Hiking"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            ...(touched.hobbies && errors.hobbies && { color: "#f44336" }),
                          }}
                          checked={values.hobbies.includes("Swimming")}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="hobbies"
                          value="Swimming"
                        />
                      }
                      label="Swimming"
                    />
                  </FormGroup>
                </FormControl>
                {errors.hobbies && touched.hobbies && (
                  <Typography
                    sx={{
                      color: "#f44336",
                      fontFamily: '"Roboto","Helvetica","Arial", sans-serif',
                      fontWeight: "400",
                      fontSize: "0.75rem",
                      lineHeight: "1.66",
                      letterSpacing: "0.03333em",
                      textAlign: "left",
                      marginTop: "3px",
                      marginRight: "14px",
                      marginBottom: "0",
                      marginLeft: "26%",
                    }}
                  >
                    {errors.hobbies}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ marginTop: "2%", width: "15vh" }}
                >
                  {isSubmitting ? ( <CircularProgress size={26} color="inherit" />) : ("Submit")}
                </Button>
              </Grid>
            </Grid>
          </form>
        </ThemeProvider>
    ); 
};
export default DataForm;
