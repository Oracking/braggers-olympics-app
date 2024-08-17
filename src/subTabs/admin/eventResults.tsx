import {Box, Select} from "grommet";
import * as Icon from "grommet-icons"

interface Result {
    name: string;
    position: number;
}

interface EventResultProps {
    results: Result[];
}


export const EventResults = (props: EventResultProps) => {
    return (
        <Box>
            {props.results.map((result: Result) =>
                <Box direction="row" justify={"center"} alignContent={"center"} style={{width: "100%"}}>
                    <Box style={{width: "100%", flex: 4, margin: "10px", marginBottom: "15px"}}>
                        <Select
                            options={['Kwaku', 'Oracking']}
                            value={result.name}
                            defaultValue={""}
                            // onChange={({ option }) => setValue(option)}
                            style={{width: "100%"}}
                        />
                    </Box>

                    <Box style={{width: "100%", flex: 2, margin: "10px", marginBottom: "15px"}}>
                        <Select
                            options={[0, 1, 2, 3, 4, 5, 6]}
                            value={result.position}
                            defaultValue={0}
                            color={"green"}
                            // onChange={({ option }) => setValue(option)}
                            style={{width: "100%"}}
                        />
                    </Box>
                    <Box style={{width: "100%", flex: 1, margin: "10px", marginBottom: "15px", justifyContent: "center", alignItems: "end"}}>
                        <Icon.Trash color={"#e34675"}></Icon.Trash>
                    </Box>

                </Box>

            )}
        </Box>
    )
}