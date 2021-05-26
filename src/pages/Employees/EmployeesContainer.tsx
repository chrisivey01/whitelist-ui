import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import employeesData from "../../assets/json/employeesData.json";
import EmployeeGrid from "./components/EmployeeGrid";
import { BossColumns, EmployeeColumns } from "./utils/Columns";

const EmployeesContainer = () => {
    const [rows, setRows] = useState<any[]>([]);
    const user = useSelector((state: RootStateOrAny) => state.user.employee);

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            setRows(employeesData);
        } else {
            //other
        }
    }, []);

    return (
        <>
            {user.rank === "boss" ? (
                <EmployeeGrid Columns={BossColumns} rows={rows} />
            ) : (
                <EmployeeGrid Columns={EmployeeColumns} rows={rows} />
            )}
        </>
    );
};

export default EmployeesContainer;
