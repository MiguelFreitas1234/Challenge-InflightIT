import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const Form: React.FC = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <form noValidate autoComplete="off">
                <Grid container rowSpacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: '2%', marginTop: '2%' }}>
                            Form
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Name" variant="outlined" sx={{ width: '50%' }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Date of birth" format="DD/MM/YYYY" sx={{ width: '50%' }}/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" variant="outlined" sx={{ width: '50%' }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ width: '50%', border: 1, borderRadius: 1, color: 'rgba(255, 255, 255, 0.23)', paddingBottom: '2%', '&:focus-within': { border: '2px solid #90caf9' }, "&:hover": { color: 'white' } }}>
                            <FormLabel component="legend" sx={{ textAlign: 'left', marginBottom: '4%', marginTop: '4%', marginLeft: '2%' }}>
                                Hobbies
                            </FormLabel>
                            <FormGroup sx={{ color: 'white', marginLeft: '2.5%' }}>
                                <FormControlLabel control={ <Checkbox /> } label="Soccer"/>
                                <FormControlLabel control={ <Checkbox /> } label="Running"/>
                                <FormControlLabel control={ <Checkbox /> } label="Hiking"/>
                                <FormControlLabel control={ <Checkbox /> } label="Swimming"/>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" size="large" sx={{ marginTop: '2%', width: '15vh' }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </ThemeProvider>
    );
};
export default Form;
