import { Grid } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import HeaderContainer from "./pages/Header/HeaderContainer";
import Sidebar from "./pages/Sidebar/Sidebar";
import Welcome from "./pages/Welcome/components/Message";
import { panels } from "./utils/panels";

const ViewContainer = styled(Grid)`
    background: rgb(27, 38, 53);
    padding: 20px;
    justify-content: center;
`;

function App() {
    return (
        <div className="App">
            <HeaderContainer />
            <Grid container spacing={1} >
                {/* <Sidebar panels={panels} /> */}
                <ViewContainer container>
                    <Switch>
                        {panels.map((item, i) => {
                            return (
                                <Route
                                    key={i}
                                    exact
                                    path={item.name}
                                    component={item.component}
                                />
                            );
                        })}
                    </Switch>
                </ViewContainer>
            </Grid>
        </div>
    );
}

export default App;
