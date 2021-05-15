import { Grid, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const Wrapper = styled(Grid)`
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
`;

const SearchWrapper = styled.div`
    position: relative;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15);
    &:hover {
        background-color: rgba(0, 0, 0, 0.25);
    }
    margin: 5px;
`;

const SearchTextbox = styled.div`
    padding: 2px;
    height: 100%;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchInput = styled(InputBase)`
    padding: 10px 0px 0px 30px;
    width: 100%;

    input {
        color: #fff;
    }
`;

const Search = () => {
    return (
        <Wrapper item xs={3}>
            <SearchWrapper>
                <SearchTextbox>
                    <SearchIcon />
                </SearchTextbox>
                <SearchInput placeholder="Search…" />
            </SearchWrapper>
        </Wrapper>
    );
};

export default Search;
