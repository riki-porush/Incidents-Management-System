
import React from 'react';
import { Dialog, FormControl, InputLabel, Input, FormHelperText, Button, RadioGroup, FormControlLabel, Radio, Select, MenuItem, Grid } from "@mui/material";
import { useForm } from 'react-hook-form';
import { DatePicker } from "@mui/lab";
// import type { TextFieldProps } from "@mui/material/TextField";
import CustomTextField from '../components/CustomTextField/CustomTextfield';
import { GridCloseIcon } from '@mui/x-data-grid';
interface FormData {
    name: string;
    description: string;
    priority: string;
    date: string;
    type: string;
    tags: string[];
}

interface Props {
    open: boolean;
    onClose: () => void;
}




export default function AddIncident({ open, onClose }: Props) {
    const { handleSubmit, register, formState: { errors } } = useForm<FormData>();

    function onSubmit(data: FormData) {
        console.log("Form data:", data);
    }
    const closeIconStyles: React.CSSProperties = {
        width: '17px',
        height: '17px',
        flexShrink: 0,
        strokeWidth: '1px',
        stroke: '#000',
        position: 'absolute',
        top: '20px',
        right: '20px',
        cursor: 'pointer',
    };
    const popupStyles: React.CSSProperties = {
        borderRadius: '20px',
        background: '#FFF',
        display: 'inline-flex',
        padding: '30px 31px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',

        maxWidth: '100%',
        height: '981px',
        top: '80px',
        border: '2px solid #000',
        overflow: 'hidden',
    };

    const backdropStyles: React.CSSProperties = {
        background: 'rgba(0, 48, 18, 0.84)',
    };

    return (
        <Dialog open={open} onClose={onClose} BackdropProps={{ style: backdropStyles }} scroll={'body'}>
            <div className="addIncident" style={popupStyles}>
                <GridCloseIcon style={closeIconStyles} onClick={onClose} />
                <h1>Add Incident</h1>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="name">Incident Name</InputLabel>
                                <CustomTextField
                                    id="name"
                                    size="small"
                                    {...register("name", {
                                        required: "Name is required",
                                        maxLength: { value: 20, message: "Name should not exceed 20 characters" },
                                    })}
                                    placeholder="Enter Incident Name"
                                />
                                {/* Error message */}
                                {errors.name && <span>{errors.name.message}</span>}
                            </FormControl>
                        </Grid>




                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <CustomTextField
                                    id="description"
                                    size="medium"
                                    {...register("description")}
                                    placeholder="Write about the incident..."
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="priority">Priority</InputLabel>
                                <RadioGroup id="priority" {...register("priority")}>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <FormControlLabel value="P0" control={<Radio />} label="P0" />
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel value="P1" control={<Radio />} label="P1" />
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel value="P2" control={<Radio />} label="P2" />
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel value="P3" control={<Radio />} label="P3" />
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="date">Date</InputLabel>
                                {/* Date picker */}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="type">Type</InputLabel>
                                {/* Type select */}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="tags">Tags</InputLabel>
                                {/* Tags buttons */}
                            </FormControl>
                        </Grid>

                    </Grid>
                    <Button type="submit" style={{ width: '100%' }} >Add</Button>
                </form>
            </div>
        </Dialog>
    );
}
