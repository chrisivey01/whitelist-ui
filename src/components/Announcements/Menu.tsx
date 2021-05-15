import {
    Button as MuiButton,
    Grid,
    Menu as MuiMenu,
    MenuItem as MuiMenuItem,
    Tooltip,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Fragment, MouseEvent } from "react";
import styled from "styled-components";
import { Announcement } from "../../models/Announcement";

type MenuOptionsPropTypes = {
    anchorEl: any;
    open: boolean;
    menuClose: any;
    handleEdit: any;
    handleDelete: any;
    i: number;
};

const MenuOptions = ({
    anchorEl,
    open,
    menuClose,
    handleEdit,
    handleDelete,
    i,
}: MenuOptionsPropTypes) => {
    return (
        <MuiMenu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={menuClose}
            aria-controls="fade-menu"
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            <MuiMenuItem
                onClick={(e: MouseEvent<HTMLElement>) => handleEdit(e, i)}
            >
                Edit
            </MuiMenuItem>
            <MuiMenuItem
                onClick={(e: MouseEvent<HTMLElement>) => handleDelete(e, i)}
            >
                Delete
            </MuiMenuItem>
        </MuiMenu>
    );
};

const Button = styled(MuiButton)`
    &.MuiButton-root {
        padding: 0;
        min-width: auto;
    }
`;

type ButtonPropsType = {
    menuOpen: any;
    i: number;
};

const MenuButton = ({ menuOpen, i }: ButtonPropsType) => {
    return (
        <Tooltip title="More" placement="top">
            <Button onClick={menuOpen} size="small" variant="contained">
                <MoreHorizIcon />
            </Button>
        </Tooltip>
    );
};

const ButtonWrapper = styled(Grid)`
    position: absolute;
    right: 10px;
    top: 0px;
`;

type MenuPropsType = {
    menuOpen: any;
    i: number;
    item: Announcement;
    anchorEl: HTMLAnchorElement;
    open: boolean;
    menuClose: any;
    handleEdit: any;
    handleDelete: any;
};

const Menu = ({
    menuOpen,
    i,
    item,
    anchorEl,
    open,
    menuClose,
    handleEdit,
    handleDelete,
}: MenuPropsType) => {
    if (item.show) {
        return (
            <ButtonWrapper>
                <MenuButton menuOpen={menuOpen} i={i} />
                <MenuOptions
                    anchorEl={anchorEl}
                    open={open}
                    menuClose={menuClose}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    i={i}
                />
            </ButtonWrapper>
        );
    } else {
        return <Fragment />;
    }
};

export default Menu;
