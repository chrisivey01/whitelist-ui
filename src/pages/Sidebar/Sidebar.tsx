import { List, ListItem, ListItemText } from "@material-ui/core";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Panel } from "../../models/Panel";

const SideBarContainer = styled.div`
    background: #233044;
    a {
        color: rgba(238, 238, 238, 0.9);
        text-decoration: none;
    }
`;

const SideBarList = styled(List)`
    padding: 0px !important;
`;

const SideBarItem = styled(ListItem)`
    &.MuiListItem-root.Mui-selected,
    .MuiListItem-root.Mui-selected:hover {
        background: rgb(27, 38, 53);
    }
`;

type Panels = {
    panels: Panel[];
};

const Sidebar = ({ panels }: Panels) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (
        event: MouseEvent<HTMLDivElement>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    return (
        <SideBarContainer>
            <SideBarList>
                {panels.map((item, i) => {
                    return (
                        <Link key={i} to={item.name}>
                            <SideBarItem
                                button
                                selected={selectedIndex === i}
                                onClick={(event) =>
                                    handleListItemClick(event, i)
                                }
                            >
                                <ListItemText primary={item.label} />
                            </SideBarItem>
                        </Link>
                    );
                })}
            </SideBarList>
        </SideBarContainer>
    );
};
export default Sidebar;
