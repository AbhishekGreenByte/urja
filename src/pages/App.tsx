import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {config} from "../utils/Config";
import React from "react";

const App:React.FC = () => {

    return (
        <Router>
            <Routes>
                {
                    config.getAllPages().map((item, index) => {
                        const Component = config.getComponent(item);
                        return (
                            <Route
                                key={index}
                                path={config.getMenuItemRoute(item)}
                                element={Component ? <Component /> : <div>Component not found</div>}
                            />
                        );
                    })
                }
            </Routes>
        </Router>
    );
}

export default App;