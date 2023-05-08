import { useState } from "react";

import { Grid, MenuItem, TextField, Typography } from "@mui/material";

import CompanyWhite from "../../assets/icons/logo-white.svg";
import SvgIcon from "../../components/icon/Icon";

const contactValue = ["Who We Are", "Our Values", "The Perks"];
const departmentVal = [
  {
    id: 1,
    departement: "Information and Technology",
  },
  {
    id: 2,
    departement: "Finance and Collecion",
  },
  {
    id: 3,
    departement: "People Services",
  },
];

export default function ContactUs() {
  const [deptAddress, setDeptAddress] = useState<string>(
    "Information and Technology"
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeptAddress(event.target.value);
  };
  const returnAddressValue = (deptAddress: string) => {
    switch (deptAddress) {
      case "Information and Technology":
        return "Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat";
      case "Finance and Collecion":
        return "Jl. Madakaripura No 1266 Kel. Braga Kec. Sumur Utara, Kota Bandung, Jawa Barat";
      case "People Services":
        return "Jl. Parayangn No 8gA Kel. Braga Kec. Sumur CC, Kota Bandung, Jawa Barat";
    }
  };

  return (
    <div>
      <Grid sx={{ backgroundColor: "#08385F" }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            px: 5,
            pt: 5,
            pb: 5,
          }}
        >
          <Grid display="flex" justifyContent="space-between">
            <Grid item sx={{ display: "flex", gap: 3 }}>
              <SvgIcon
                icon={CompanyWhite}
                height={"35"}
                width={"35"}
                pb={1.5}
                pr={1}
              />
              <Typography
                sx={{ fontSize: 25, fontWeight: 600, color: "#ffffff" }}
              >
                My Company
              </Typography>
            </Grid>
            <Grid
              sx={{
                backgroundColor: "#ffffff",
                height: 150,
                width: 800,
                borderRadius: 2,
                p: 2,
              }}
            >
              <Grid
                sx={{
                  display: "grid",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                <TextField
                  size="small"
                  sx={{ width: 300 }}
                  select
                  type="email"
                  value={deptAddress}
                  onChange={handleChange}
                >
                  {departmentVal.map((val) => (
                    <MenuItem key={val.id} value={val.departement}>
                      {val.departement}
                    </MenuItem>
                  ))}
                </TextField>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#25A0D8",
                    maxWidth: 350,
                  }}
                >
                  {returnAddressValue(deptAddress)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid mt={-10}>
            {contactValue.map((val) => {
              return (
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#ffffff",
                    pb: 1,
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  {val}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
