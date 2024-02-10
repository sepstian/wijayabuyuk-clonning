import { Box, IconButton, Select } from "@chakra-ui/react";

const Selectoption = (props) => {
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
        <Select
          id="alltext"
          bg="rgb(172, 207, 252)"
          borderColor="rgb(33, 107, 204)"
          color="rgb(88, 99, 112)"
          placeholder={props.keterangan}
          style={{ borderRadius: "0px 5px 5px 0px", width: "200px" }}
          _hover={{ borderColor: "rgb(33, 107, 204)", width: "200px" }}
        >{props.children}</Select>
      </Box>
    </>
  );
};

export default Selectoption;
