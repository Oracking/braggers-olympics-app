import {Box, Card, Grommet, Tab, Tabs, ThemeType} from 'grommet'
import mainBannerBackgroundImage from "./assets/main-banner-background.jpg"
import {Teams} from "./subTabs/teams";
import {Events} from "./subTabs/events";
import {Individuals} from "./subTabs/individuals";


const theme: ThemeType = {
    global: {
        focus: {
            outline: {
                color: "#7d4cdb"
            }
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
};


function App() {

    const nextEvent = "Women's 400m";

    return (
    <Grommet
        theme={theme}
        style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}
        full>
        <Box alignContent={"center"} style={{width:'100%', height:'100%'}} >
            <div style={{width: "100%", backgroundImage: `url(${mainBannerBackgroundImage})`, height: "160px"}}>
                <div style={{paddingBottom: "40px", paddingTop: "60px", display: "flex", justifyContent: "center", alignItems: "center"}}>

                    <div
                        style={{fontWeight: "bolder", fontSize: "30px", color: "white", marginTop: "40px"}}
                    >
                        Bragger's Olympics
                    </div>

                </div>
            </div>


            <Tabs style={{marginTop: "50px"}}>
                <Tab title="Teams">
                    <Teams />
                    <Card style={{margin: "30px", marginTop: "15px", padding: "20px"}} >
                        Next Event: {nextEvent}
                    </Card>
                </Tab>
                <Tab title="Events">
                    <Events />
                </Tab>
                <Tab title="Individual">
                    <Individuals />
                    <Card style={{margin: "30px", marginTop: "15px", padding: "20px"}} >
                        Next Event: {nextEvent}
                    </Card>
                </Tab>
            </Tabs>
            <div>

            </div>

        </Box>

    </Grommet>
    )
}

export default App
