import { Text } from "@chakra-ui/react";

const Footer = (props) => {
  return (
    <>
      <div id="footer">
        <Text id="alltext" style={{ fontSize: "14px", color: "white" }}>
          © 2022 <span id="nametag">Wijaya Buyuk Fastboat</span>.
          All Rights Reserved
        </Text>
      </div>
    </>
  );
};

export default Footer;
