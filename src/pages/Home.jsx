import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import {
  FaCalendar,
  FaGlobe,
  FaMapMarker,
  FaUser,
} from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import "../App.css";
import React, { useEffect, useState } from "react";
import LayoutPage from "../Components/LayoutPage";
import Selectoption from "../Components/Select";
import Inputcalendar from "../Components/Inputcalendar";
import CardDetail from "../Components/Carddetail";
import Footer from "../Components/Footer";

function Home() {
  const [gambarIndex, setGambarIndex] = useState(0);
  const [Check, setCheck] = useState(false);
  const [From, setFrom] = useState([
    "FAST BOAT PADANG BAY TO GILI LOMBOK",
    "Gili Air",
    "Gili Meno",
    "Gili Trawangan",
    "Lembongan",
    "Lombok (Bangsal)",
    "Nusa Penida",
    "Padang Bay",
    "Sanur",
    "Padang Bay"
  ]);
  const [Destination, setDestination] = useState([
    "FAST BOAT PADANG BAY TO GILI LOMBOK",
    "Gili Air",
    "Gili Meno",
    "Gili Trawangan",
    "Lembongan",
    "Lombok (Bangsal)",
    "Nusa Penida",
    "Padang Bay",
    "Sanur",
    "Padang Bay"
  ]);
  const [Nationaly, setNationaly] = useState([
    "Indonesia",
    "Foreigner"
  ]);
  const [Passenger, setPassenger] = useState([
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
  ]);

  const gambarPaths = [
    "https://www.wijayabuyuk.com/wp-content/uploads/2022/10/banner-wijaya-buyuk-fastboat.jpg",
    "https://www.wijayabuyuk.com/wp-content/uploads/2022/09/seat-wijaya-buyuk.jpg",
    "https://www.wijayabuyuk.com/wp-content/uploads/2022/09/wijaya-buyuk-fastboat-2-1.jpeg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGambarIndex((prevIndex) => (prevIndex + 1) % gambarPaths.length);
    }, 4900);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <LayoutPage>
        <div id="body">
          <Box id="slider" bgImage={gambarPaths[gambarIndex]}>
            <Box
              id="judul"
              style={{
                display:
                  gambarPaths[gambarIndex] ===
                  "https://www.wijayabuyuk.com/wp-content/uploads/2022/09/wijaya-buyuk-fastboat-2-1.jpeg"
                    ? "flex"
                    : "none",
              }}
            >
              <Box id="headerslider">
                <p id="judul1">FASBOAT ROUTE</p>
                <p id="judul2">
                  SANUR - NUSA PENIDA - GILI TRAWANGAN - GILI AIR - LOMBOK
                </p>
              </Box>
            </Box>
            <Box
              id="judul"
              style={{
                display:
                  gambarPaths[gambarIndex] ===
                  "https://www.wijayabuyuk.com/wp-content/uploads/2022/09/seat-wijaya-buyuk.jpg"
                    ? "flex"
                    : "none",
              }}
            >
              <Box id="headerslider">
                <p id="judul1">THE BIG FASTBOAT</p>
                <p id="judul2">Comfort and safety is our priority</p>
              </Box>
            </Box>
          </Box>
          <Box id="boxcheckout">
            <Box id="boxcheckout2">
              <Box id="boxcaption">
                <p id="book">Book ticket here!</p>
                <Checkbox
                  size="lg"
                  colorScheme="blue"
                  defaultChecked
                  onChange={() => setCheck(!Check)}
                />
                <p id="checkbox">Return Ticket</p>
              </Box>
              <Box id="boxcaption" style={{ marginTop: "10px" }}>
                <Selectoption
                  keterangan="From"
                  element="Select"
                  emote={<FaShip />}
                >
                  {From.map((data)=> {
                    return(
                      <option key={data.length} value={data.length}>
                        {data}
                      </option>
                    )
                  })}
                </Selectoption>
                <Selectoption
                  keterangan="To Destination"
                  emote={<FaMapMarker />}
                >
                  {Destination.map((data)=> {
                    return(
                      <option key={data.length} value={data.length}>
                        {data}
                      </option>
                    )
                  })}
                </Selectoption>
                <Inputcalendar
                  display="flex"
                  keterangan="Departure Date"
                  emote={<FaCalendar />}
                ></Inputcalendar>
                <Inputcalendar
                  display={Check === false ? "flex" : "none"}
                  keterangan="Return Date"
                  emote={<FaCalendar />}
                ></Inputcalendar>
              </Box>
              <Box id="boxcaption">
                <Selectoption
                  keterangan="No Passenger"
                  emote={<FaUser />}
                >
                  {Passenger.map((data)=> {
                    return(
                      <option key={data.length} value={data.length}>
                        {data}
                      </option>
                    )
                  })}
                </Selectoption>
                <Selectoption
                  keterangan="Your Nationality"
                  emote={<FaGlobe />}
                >
                  {Nationaly.map((data)=> {
                    return(
                      <option key={data.length} value={data.length}>
                        {data}
                      </option>
                    )
                  })}
                </Selectoption>
                <Button id="buttonsearch">SEARCH BOAT</Button>
              </Box>
            </Box>
          </Box>
        </div>
        <div id="body2">
          <Box id="boxbody2">
            <Text
              id="textpaket"
              style={{
                display: "flex",
                height: "24px",
                fontSize: "24px",
                alignItems: "center",
                justifyContent: "center",
                color:"#7A7A7A"
              }}
            >
              PAKET TOUR
            </Text>
            <Box id="boxpaket">
              <CardDetail
                gambar="https://www.wijayabuyuk.com/wp-content/uploads/elementor/thumbs/hotel-2-qftkykxxu7ouozgytkuyee8rpjk9hmg9paupeum01k.jpg"
                harga="1.600K"
              >
                3 Days 2 Night Tour Snorkeling
              </CardDetail>
              <CardDetail
                gambar="https://www.wijayabuyuk.com/wp-content/uploads/elementor/thumbs/Kelingking-Beach-7-qftkykxxu7ouozgytkuyee8rpjk9hmg9paupeum01k.jpg"
                harga="350K"
              >
                One Day Trip West
              </CardDetail>
              <CardDetail
                gambar="https://www.wijayabuyuk.com/wp-content/uploads/elementor/thumbs/rumah-pohon-6-qftkykxxu7ouozgytkuyee8rpjk9hmg9paupeum01k.jpg"
                harga="400K"
              >
                One Day Trip Mix
              </CardDetail>
            </Box>
          </Box>
        </div>
        <Footer />
      </LayoutPage>
    </>
  );
}

export default Home;
