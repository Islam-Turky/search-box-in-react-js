import { Stack, TextField } from "@mui/material";
import BasicTable from "./Table";
import { useState } from "react";

const Search = () => {
    const [target, setTarget] = useState("");

    return(
        <Stack>
            <TextField 
                label={'Search'}
                onChange={(e) => setTarget(e.target.value)}
            />
            <BasicTable target={target}/>
        </Stack>
    )
};

export default Search;