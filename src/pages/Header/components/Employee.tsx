import { Avatar, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import Profile from "../../../assets/images/5259260.png";

const EmployeeContainer = styled(Grid)`
    position: relative;
    display: flex;
    height: 100%;
    padding-right: 15px;
    justify-content: flex-end;
`;

const EmployeeWrapper = styled(Grid)`
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Employee = () => {
    return (
        <EmployeeContainer item xs={3}>
            <EmployeeWrapper>
                <Avatar src={Profile} />
            </EmployeeWrapper>
        </EmployeeContainer>
    );
};

export default Employee;
