import { Grid as MuiGrid } from "@material-ui/core";
import {
    DataGrid,
    GridEditCellPropsParams,
    GridEditCellValueParams,
    GridRowId,
    GridToolbar,
} from "@material-ui/data-grid";
import { useCallback } from "react";
import styled from "styled-components";
import { minMax } from "../utils/Helpers";

const EmployeesContainer = styled(MuiGrid)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-height: 600px;
    overflow: auto;
    padding: 10px;
    width: 100%;
    height: 600px;
`;

const Grid = styled(DataGrid)`
    color: rgba(238, 238, 238, 0.9) !important;
    width: 100%;

    &.MuiDataGrid-window {
        overflow: hidden;
    }

    &.MuiDataGrid-root .MuiDataGrid-colCellTitleContainer {
        overflow: unset;
    }

    &.MuiDataGrid-root .MuiTablePagination-root {
        color: rgba(238, 238, 238, 0.9) !important;
    }

    button {
        color: rgba(238, 238, 238, 0.9) !important;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

type EmployeesContainerPropsType = {
    Columns: any;
    rows: any;
};

const EmployeeGrid = ({ Columns, rows }: EmployeesContainerPropsType) => {
    const onCellValueChange = useCallback((params: GridEditCellPropsParams) => {
        const { field, id, props } = params;
        cellActions(field, id, props.value);
    }, []);

    const cellActions = (field: string, id: GridRowId, value: any) => {
        switch (field) {
            case "strike_points":
                return minMax(value);
            default:
                return null;
        }
    };

    return (
        <EmployeesContainer>
            <Grid
                components={{ Toolbar: GridToolbar }}
                rows={rows}
                columns={Columns}
                pageSize={10}
                onEditCellChange={onCellValueChange}
            />
        </EmployeesContainer>
    );
};

export default EmployeeGrid;
