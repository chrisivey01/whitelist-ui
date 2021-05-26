import Absence from "../pages/Absence";
import Announcements from "../pages/Announcements/AnnouncementsContainer";
import EmployeesContainer from "../pages/Employees/EmployeesContainer";
import Eotw from "../pages/Eotw";
import WelcomeContainer from "../pages/Welcome/WelcomeContainer";

export const panels = [
    {
        label: "Welcome",
        name: "/",
        component: WelcomeContainer,
    },
    {
        label: "Announcements",
        name: "/announcements",
        component: Announcements,
    },
    {
        label: "Employees",
        name: "/employees",
        component: EmployeesContainer,
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
