import { Box, Grid, Typography } from "@mui/material";

import CompanyIcon from "../../assets/icons/logo-colored.svg";
import SvgIcon from "../icon/Icon";

export default function Navbar() {
  const menu = [
    "Main Page",
    "Our Company",
    "Our Core Values",
    "Our Speciality",
    "Contact Us",
  ];
  return (
    <div>
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            px: 5,
            py: 3,
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
          }}
        >
          <Grid item sx={{ display: "flex", gap: 3 }}>
            <SvgIcon
              icon={CompanyIcon}
              height={"35"}
              width={"35"}
              pb={1}
              pr={1}
            />
            <Typography
              sx={{ fontSize: 25, fontWeight: 600, color: "#4097DB" }}
            >
              My Company
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex", color: "#4097DB" }}>
            {menu.map((val) => {
              return (
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    pr: 2,
                    "&:hover": {
                      color: "#08385F",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {val}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
