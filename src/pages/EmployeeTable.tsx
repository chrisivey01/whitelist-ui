import { Grid } from "@material-ui/core";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import styled from "styled-components";
import employeesData from "../assets/json/employeesData.json";

const EmployeesContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-height: 600px;
    overflow: auto;
    background-color: #233044;
    padding: 10px;
    width: 100%;
`;

const EmployeeGrid = styled(DataGrid)`
    color: rgba(238, 238, 238, 0.9) !important;
    width: 100%;
    &.MuiDataGrid-window {
        overflow: hidden;
    }

    &.MuiDataGrid-root .MuiDataGrid-colCellTitleContainer {
        overflow: unset;
    }
`;

const EmployeeTable = () => {
    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            width: 50,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
        },
        {
            field: "firstName",
            headerName: "First name",
            width: 130,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
        },
        {
            field: "lastName",
            headerName: "Last name",
            width: 130,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
        },
        {
            field: "ssn",
            headerName: "SSN",
            type: "number",
            width: 90,
            headerAlign: "center",
            align: "center",
            disableColumnMenu: true,
        },
        {
            field: "phone_number",
            headerName: "Phone Number",
            width: 130,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
        },
        {
            field: "last_logged",
            headerName: "Last Seen",
            width: 130,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
        },

        {
            field: "weekly_hours",
            headerName: "Weekly Hours",
            width: 130,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
        },
        {
            field: "performance",
            headerName: "Performance",
            width: 130,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
        },
        {
            field: "rank",
            headerName: "Rank",
            width: 75,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
            editable: true,
        },
        {
            field: "strike_points",
            headerName: "Strike Points",
            width: 130,
            headerAlign: "center",
            align: "center",
            hideSortIcons: false,
            disableColumnMenu: true,
            editable: true,
        },
    ];

    return (
        <EmployeesContainer>
            <EmployeeGrid
                density={"compact"}
                rows={employeesData}
                columns={columns}
                pageSize={10}
                checkboxSelection
            />
        </EmployeesContainer>
    );
};

export default EmployeeTable;
