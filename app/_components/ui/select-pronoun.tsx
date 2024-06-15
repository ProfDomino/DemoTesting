"use client";
import { Select } from "@mui/joy";
import Option from '@mui/joy/Option';

//The Select component is used to trigger a popup that displays a list of Option components.

export function SelectPronoun(): JSX.Element {
    return (
        <Select placeholder="Please Select" variant="outlined">
            <Option value="he/him">he/him</Option>
            <Option value="she/her">she/her</Option>
            <Option value="they/them">they/them</Option>
            <Option value="she/they">she/they</Option>
            <Option value="he/they">he/they</Option>
            <Option value="other">other</Option>
        </Select>
    );
}