import React from "react";
import { Box, SimpleGrid, Image } from "@chakra-ui/core";

function Results(props) {
  console.log(props.gifInfo);
  return (
    <div>
      <SimpleGrid columns={2} spacing={5} marginTop="5%">
        {props.gifInfo
          ? props.gifInfo.map((gif) => (            
                <Image src={"https://i.giphy.com/media/".concat(gif.id).concat("/100.gif")} alt={gif.id}/>
            ))
          : null}
      </SimpleGrid>
    </div>
  );
}

export default Results;
