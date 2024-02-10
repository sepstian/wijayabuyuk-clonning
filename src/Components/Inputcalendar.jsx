import { Box, IconButton, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

const Inputcalendar = (props) => {
  const [Focus, setFocus] = useState(false);
  return (
    <>
      <Box style={{ display: "flex", padding: "0px 10px" }}>
        {props.icon}
        <IconButton
          bg={"rgb(33, 107, 204)"}
          colorScheme="rgb(33, 107, 204)"
          icon={props.emote}
          style={{
            borderRadius: "5px 0px 0px 5px",
            cursor: "default",
            border: "solid 1px rgb(33, 107, 204)",
            borderRight: "none",
          }}
        />
        <Input
          display={props.display}
          bg="rgb(172, 207, 252)"
          transition={"all 0.4s ease-in-out"}
          borderColor="rgb(33, 107, 204)"
          color="rgb(88, 99, 112)"
          placeholder={props.keterangan}
          type={Focus ? "date" : "text"}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ borderRadius: "0px 5px 5px 0px", width: "200px" }}
          _hover={{ borderColor: "rgb(33, 107, 204)", width: "200px" }}
        />
      </Box>
    </>
  );
};

export default Inputcalendar;
