import React from 'react';
//import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ClickAnalyticsPlugin } from '@microsoft/applicationinsights-clickanalytics-js';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking, useAppInsightsContext } from '@microsoft/applicationinsights-react-js';
import Button from 'react-bootstrap/Button';
import { createBrowserHistory } from "history";
/*
const browserHistory = createBrowserHistory({ basename: '' });
var reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: 'b43c9924-XXXXX-XXXX-XXXXX-6ff17ef22d6f',
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: browserHistory }
        }
    }
});
appInsights.loadAppInsights();
*/

const clickPluginInstance = new ClickAnalyticsPlugin();
// Click Analytics configuration
const clickPluginConfig = {
    autoCapture: true
};
// Application Insights Configuration
const configObj = {
    instrumentationKey: "b43c9924-XXXXX-XXXX-XXXXX-6ff17ef22d6f",
    extensions: [clickPluginInstance],
    extensionConfig: {
        [clickPluginInstance.identifier]: clickPluginConfig
    },
};

const appInsights = new ApplicationInsights({ config: configObj });
appInsights.loadAppInsights();

function ClickAddButton1() {

    async function ClickButton1(e) 
    {
        console.log('Add Button 1 clicked.');
    }

    
    return (

        <div className="App">
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Flat Button 1</p>
                <Button type='submit' onClick={ClickButton1}>Add 1</Button>
            </div>
        </div>
    )

}

//export default withAITracking(reactPlugin, ClickAddButton1);

export default ClickAddButton1