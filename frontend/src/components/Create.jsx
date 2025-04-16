import React, { useState, useEffect } from "react";
import AxiosInstance from "./Axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextForm from "./forms/TextForm";
import SelectForm from "./forms/SelectForm";

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);

  console.log("country", country);
  console.log("league", league);
  console.log("characteristic", characteristic);

  const GetData = () => {
    AxiosInstance.get("country/").then((res) => {
      setCountry(res.data);
    });

    AxiosInstance.get("league/").then((res) => {
      setLeague(res.data);
    });

    AxiosInstance.get("characteristic/").then((res) => {
      setCharacteristic(res.data);
    });
  };

  useEffect(() => {
    GetData(); // ✅ Call the function!
  }, []);

  return (
    <div>
      <Box className={"TopBar"}>
        <AddBoxIcon></AddBoxIcon>
        <Typography
          sx={{ marginLeft: "15px", fontWeight: "bold" }}
          variant="subtitle2"
        >
          Create a new club!!
        </Typography>
      </Box>

      <Box className={"FormBox"}>
        <Box className={"FormArea"}>
          <TextForm label={"Club name"}></TextForm>
        </Box>
        <Box className={"FormArea"}>
          <TextForm label={"City name"}></TextForm>
        </Box>
        <Box className={"FormArea"}>
          <SelectForm label={"League"} options={league}></SelectForm>
        </Box>
        <Box className={"FormArea"}>
          <SelectForm label={"Country"} options={country}></SelectForm>
        </Box>
      </Box>
    </div>
  );
};

export default Create;
