import { FormControl, MenuItem, Select } from "@material-ui/core";
import { GridCellParams } from "@material-ui/data-grid";
import styled, { createGlobalStyle } from "styled-components";

const SelectContainer = styled(FormControl)`
    margin: 5px !important;
    min-width: 50px !important;
`;

const Input = styled(Select)``;

const GlobalStyle = createGlobalStyle`
    .MuiSelect-select.MuiSelect-select {
        height: 35px;
        padding-top: 10px;
        padding-left: 15px;
    }

    .MuiInputBase-root {
        color: #fff !important;
    }

    .MuiMenu-paper {
        color: #fff !important;
        background-color: #233044 !important;

        .MuiButtonBase-root:hover {
            background-color:rgba(255, 255, 255, 0.2);
        }

        .MuiList-root {
            padding:0;
        }

        .MuiListItem-root.Mui-selected{
            background-color:rgba(255, 255, 255, 0.2); 
        }
    }

    .MuiDataGrid-cellEditable {
        background-color: #233044 !important;
    }

    option {
        background-color: rgb(27, 38, 53) !important;
        color: #fff !important;
        text-align: center;
        &:hover {
            background-color: rgba(0,0,0,.25);
        }
    }

`;

export const renderSelectInput = (params: any) => {
    return <SelectInput {...params} />;
};

const SelectInput = (params: GridCellParams) => {
    const api = params.api;
    const id = params.id;
    const field = params.field;

    const handleChange = (e: any) => {
        e.stopPropagation();
        const editProps = {
            value: e.target.value,
        };
        api.commitCellChange({ id, field, props: editProps });
        api.setCellMode(id, field, "view");
    };

    return (
        <div>
            <SelectContainer>
                <FormControl>
                    <GlobalStyle />
                    <Input onChange={handleChange} value={params.value}>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                    </Input>
                </FormControl>
            </SelectContainer>
        </div>
    );
};

export default SelectInput;
