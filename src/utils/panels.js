import Absence from "../pages/Absence";
import Announcements from "../pages/Announcements/AnnouncementsContainer";
import Employees from "../pages/Employees";
import Eotw from "../pages/Eotw";
import WeeklyHours from "../pages/WeeklyHours";
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
        component: Employees,
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
