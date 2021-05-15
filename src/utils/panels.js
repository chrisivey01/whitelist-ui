import Absence from "../components/Absence";
import Announcements from "../containers/Announcements";
import Employees from "../components/Employees";
import Eotw from "../components/Eotw";
import WeeklyHours from "../components/WeeklyHours";

export const panels = [
    {
        label: "Announcements",
        name: "/",
        component: Announcements,
    },
    {
        label: "Employees",
        name: "/employees",
        component: Employees,
    },
    {
        label: "Weekly Hours",
        name: "/weekly_hours",
        component: WeeklyHours,
    },
    {
        label: "Employee of the Week",
        name: "/eotw",
        component: Eotw,
    },
    {
        label: "Absence",
        name: "/absence",
        component: Absence,
    },
];