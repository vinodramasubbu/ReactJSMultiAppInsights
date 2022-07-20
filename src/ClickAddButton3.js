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
        instrumentationKey: '528fb0f4-XXXXX-XXXX-XXXXX-f2affe1f663e',
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
    instrumentationKey: "528fb0f4-XXXXX-XXXX-XXXXX-f2affe1f663e",
    extensions: [clickPluginInstance],
    extensionConfig: {
        [clickPluginInstance.identifier]: clickPluginConfig
    },
};

const appInsights = new ApplicationInsights({ config: configObj });
appInsights.loadAppInsights();

function ClickAddButton3() {

    async function ClickButton3(e) {
        console.log('Add Button 3 clicked.');
    }


    return (

        <div className="App">
            <div className="col-xs-12 col-sm-6 example-col">
                <p>Flat Button 3</p>
                <Button type='submit' onClick={ClickButton3}>Add 3</Button>
            </div>
        </div>
    )

}

//export default withAITracking(reactPlugin, ClickAddButton3);
export default ClickAddButton3