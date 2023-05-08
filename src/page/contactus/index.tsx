import { Grid, Typography } from "@mui/material";

import CompanyWhite from "../../assets/icons/logo-white.svg";
import SvgIcon from "../../components/icon/Icon";

const contactValue = ["Who We Are", "Our Values", "The Perks"];

export default function ContactUs() {
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
                height: 100,
                width: 800,
                borderRadius: 2,
              }}
            ></Grid>
          </Grid>
          <Grid mt={-5}>
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
