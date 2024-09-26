import { List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";

const country = {
  India: ["Goa", "Madhya Pradesh", "Maharashtra", "Rajasthan"],
  Australia: ["New South Wales", "Queensland", "Victoria"],
  "United States": ["California", "Texas", "Florida"],
};
const CountryData = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  console.log(selectedCountry);
  return (
    <div className="h-screen bg-zinc-500 ">
      <Typography className="text-center pt-10" variant="h4">
        Country and States
      </Typography>
      <div className="flex justify-center gap-2 pt-10">
        <List className="w-[200px]  ">
          {Object.keys(country).map((country) => (
            <ListItem
              key={country}
              className={`cursor-pointer p-2 border  transition-all ease-in-out duration-300 hover:bg-pink-200 ${
                country === selectedCountry
                  ? "bg-pink-500 text-white rounded-lg"
                  : "bg-gray-100"
              }`}
              onClick={() => handleSelectCountry(country)}
            >
              {country}
            </ListItem>
          ))}
        </List>
        <List className="w-[200px] ">
          {country[selectedCountry].map((state) => (
            <ListItem
              key={state}
              className="cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 border rounded-lg"
            >
              {state}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default CountryData;
