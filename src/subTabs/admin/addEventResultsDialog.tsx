import {Box, Button, Card, CardBody, Layer, TextInput} from "grommet";
import * as Icons from "grommet-icons";
import {useState} from "react";
import athletics from "../../assets/athletics.png"
import {EventResults} from "./eventResults";

interface AddEventDialogProps {
    showDialog: boolean;
    setShowDialog: (showDialog: boolean) => void;
    eventName?: string;
    eventId?: number;
}


export const AddEventResultsDialog = (props: AddEventDialogProps) => {

    const [results, setResults] = useState([
        {name: "Oracking", position: 1},
        {name: "Kwaku", position: 2},
    ])
    // const results = [
    //     {name: "Oracking", position: 1},
    //     {name: "Kwaku", position: 2},
    // ]

    return (
        <>
            {props.showDialog && (
                <Layer
                    onEsc={() => props.setShowDialog(false)}
                    onClickOutside={() => props.setShowDialog(false)}
                    responsive={false}
                    margin={"medium"}
                    full={true}
                >   <Box justify={"center"} alignContent={"center"} style={{padding: "10px"}}>
                    <div style={{width: "100%", background: "#7d4cdb", color: "white", borderRadius: "7px"}}>
                        <div style={{padding: "20px", paddingBottom: "30px"}}>
                            <Box style={{textAlign: "center"}}>
                                Event Results
                            </Box>
                            <div style={{justifyContent: "center", alignItems: "center", display: "flex"}}>
                                <img src={athletics} style={{width: "150px", margin: "20px"}} />
                            </div>
                            <Box style={{textAlign: "center"}}>
                                Men's 100m Sprint
                            </Box>
                        </div>
                    </div>

                    <div style={{borderRadius: '7px', marginTop: "10px", padding: "10px", overflowY: 'scroll', boxShadow: "2px 2px 10px #CCCCCC"}}>
                        <EventResults results={results} />
                        <div style={{justifyContent: "center", alignItems: "center", display: "flex"}}>

                            <Button primary icon={<Icons.Add color="white" />} label={"Add"} hoverIndicator color={"#7d4cdb"} style={{color: "white"}}
                                onClick={() => {
                                    setResults([...results, {"name": "", "position": 0}]);
                                }}
                            />
                        </div>
                    </div>

                    <div style={{marginTop: "20px"}}>
                        <TextInput
                            placeholder="Admin Password"
                            type="password"

                            // value={""}
                            // onChange={event => setValue(event.target.value)}
                        />
                    </div>

                    <div style={{marginTop: "20px", justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <Button primary label={"Cancel"} hoverIndicator color={"#e34675"} style={{color: "white", margin: "10px"}}
                                onClick={() => {props.setShowDialog(!props.showDialog)}}
                        />
                        <Button primary label={"Save"} hoverIndicator color={"#7d4cdb"} style={{color: "white", margin: "10px"}} />
                    </div>


                </Box>

                </Layer>
            )}
        </>
    )
}