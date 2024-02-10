import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const LayoutPage = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div id="bodynavbar">
        <div id="navbar">
          <div id="logo">
            <Box id="boxlogo"/>
          </div>
          <div id="button">
            <div id="caption" onClick={() => navigate("/")}>Home</div>
            <div id="caption" onClick={() => navigate("/boat")}>Boat</div>
            <div id="caption" onClick={() => navigate("/gallery")}>Gallery</div>
            <div id="caption" onClick={() => navigate("/terms")}>Terms & conditions</div>
            <div id="caption" onClick={() => navigate("/contact")}>Contact</div>
          </div>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default LayoutPage;
