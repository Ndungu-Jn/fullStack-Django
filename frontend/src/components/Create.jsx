import React, { useState, useEffect } from "react";
import AxiosInstance from "./Axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextForm from "./forms/TextForm";
import SelectForm from "./forms/SelectForm";
import MultiSelectForm from "./forms/MultiSelectForm";
import DescriptionForm from "./forms/Description";
import Button from "@mui/material/Button";
import { useFormik } from "formik";

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

  const formik = useFormik({
    initialValues: {
      name: "Haiya, Imework",
      description: "r rrsd",
      country: 1,
      league: 1,
      attendance: 15000,
      city: "this",
      characteristic: [1, 2],
    },

    onSubmit: (values) => {
      AxiosInstance.post(`footballclub `, values).then(() => {
        console.log("successfull data submission");
      });
    },
  });

  console.log("form values", formik.values);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
            <TextForm
              label={"Club name"}
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></TextForm>
            <Box sx={{ marginTop: "30px" }}>
              <TextForm
                label={"City"}
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></TextForm>
            </Box>
            <Box sx={{ marginTop: "30px" }}>
              <SelectForm
                label={"League"}
                options={league}
                name="league"
                value={formik.values.league}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></SelectForm>
            </Box>
            <Box sx={{ marginTop: "30px" }}>
              <Button type="submit" variant="contained">
                Submit the data
              </Button>
            </Box>
          </Box>

          <Box className={"FormArea"}>
            <SelectForm
              label={"Country"}
              options={country}
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></SelectForm>
            <Box sx={{ marginTop: "30px" }}>
              <TextForm
                label={"Attendance"}
                name="attendance"
                value={formik.values.attendance}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></TextForm>
            </Box>
            <Box sx={{ marginTop: "30px" }}>
              <MultiSelectForm
                label={"Characteristics"}
                options={characteristic}
                name="characteristic"
                value={formik.values.characteristic}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></MultiSelectForm>
            </Box>
          </Box>

          <Box className={"FormArea"}>
            <DescriptionForm
              label={"Description"}
              rows={9}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></DescriptionForm>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Create;
