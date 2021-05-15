import { Box, Grid, Paper } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import SideDrawer from "./components/Drawer";
import Header from "./components/Header/Header";
import { panels } from "./utils/panels";

const ViewContainer = styled(Grid)`
    background: rgb(27, 38, 53);
    padding: 20px;
`;

function App() {
    return (
        <div className="App">
            <Header />
            <Grid container style={{ height: 720, flexWrap: "nowrap" }}>
                <SideDrawer panels={panels} />
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
