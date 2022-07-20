import React from 'react';
//import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ClickAnalyticsPlugin } from '@microsoft/applicationinsights-clickanalytics-js';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import Button from 'react-bootstrap/Button';
import { createBrowserHistory } from "history";

/*
const browserHistory = createBrowserHistory({ basename: '' });
var reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: 'c04801c1-XXXXX-XXXX-XXXXX-9dfdf1ec8d4b',
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
    instrumentationKey: "c04801c1-XXXXX-XXXX-XXXXX-9dfdf1ec8d4b",
    extensions: [clickPluginInstance],
    extensionConfig: {
        [clickPluginInstance.identifier]: clickPluginConfig
    },
};

const appInsights = new ApplicationInsights({ config: configObj });
appInsights.loadAppInsights();



function ClickAddButton2() {

    async function ClickButton2(e) {
        console.log('Add Button 2 clicked.');
    }


    return (

        <div className="App">
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Flat Button 2</p>
                <Button type='submit' onClick={ClickButton2}>Add 2</Button>
            </div>
        </div>
    )

}

//export default withAITracking(reactPlugin, ClickAddButton2);
export default ClickAddButton2