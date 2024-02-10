import { Box, Img, Text } from "@chakra-ui/react";

const CardDetail = (props) => {
  return (
    <>
      <Box id="detailtour" >
        <Box id="imagedetail" style={{ display: "flex", height: "259px", overflow:"hidden", borderRadius:"10px 10px 0px 0px"}}>
          <Img
            borderRadius={"10px 10px 0px 0px"}
            style={{ position:"relative" }}
            _hover={{
              display: "flex",
              height: "259px",
              cursor: "pointer",
              transform: "scale(1.1)",
              transition: "all 0.3s",
              transitionTimingFunction:"ease-in-out",
              backgroundSize:"cover",
              borderRadius:"10px 10px 0px 0px"
            }}
            src={props.gambar}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            height: "120px",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100px",
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              gap: "25%",
            }}
          >
            <Text
              id="alltext"
              style={{
                display: "flex",
                height: "20px",
                fontSize: "20px",
                alignItems: "center",
                justifyContent: "center",
                color: "rgb(3, 128, 184)",
                cursor: "pointer",
              }}
            >
              {props.children}
            </Text>
            <Box
              style={{
                display: "flex",
                height: "41px",
                width: "auto",
                justifyContent: "space-between",
                gap: "9px",
              }}
            >
              <Text
                style={{
                  fontSize: "13px",
                  fontStyle: "italic",
                  color: "#7A7A7A",
                }}
              >
                From IDR
              </Text>
              <Text
                style={{
                  display: "flex",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#135184",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
                {props.harga}
              </Text>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#7A7A7A",
                  marginTop: "5px",
                  marginBottom: "12px",
                }}
              >
                /person
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            height: "46px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 0px 10px 10px",
          }}
          _hover={{
            display: "flex",
            height: "46px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 0px 10px 10px",
            color: "white",
            backgroundColor: "rgb(3, 108, 219)",
            transition:"all 0.3s ease-in-out",
            cursor: "pointer",
          }}
        >
          <Text
            id="alltext"
            style={{
              display: "flex",
              height: "16px",
              width: "90%",
              fontSize: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            View Detail
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default CardDetail;
