import { TextField } from "@material-ui/core";
import { GridCellParams } from "@material-ui/data-grid";
import { minMax } from "../utils/Helpers";

export const renderNumberInput = (params: any) => {
    return <NumberInput {...params} />;
};

const NumberInput = (params: GridCellParams) => {
    const api = params.api;
    const id = params.id;
    const field = params.field;

    const handleChange = (e: any) => {
        e.stopPropagation();
        const editProps = {
            value: minMax(e.target.value),
        };
        api.commitCellChange({ id, field, props: editProps });
        api.setCellMode(id, field, "view");
    };
    
    return (
        <TextField
            value={params.value}
            onBlur={handleChange}
            onChange={handleChange}
            type="number"
        />
    );
};

export default NumberInput;
