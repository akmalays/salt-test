import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import DownIcon from "../../assets/icons/down-icon.png";
import SvgIcon from "../../components/icon/Icon";
import Navbar from "../../components/navbar/navbar";

export default function MainPage() {
  return (
    <div>
      <Grid sx={{ backgroundColor: "#53A7E9" }}>
        {/* navbar */}
        <Navbar />
        {/* main Page */}
        <Grid sx={{ px: 5, py: 2 }}>
          <Grid item>
            <Typography
              sx={{
                maxWidth: 600,
                color: "#ffffff",
                fontWeight: 600,
                fontSize: 34,
                pb: 2,
              }}
            >
              Discover Your Wonder
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ maxWidth: 600, color: "#ffffff", fontSize: 18 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, alias. Nesciunt suscipit ex aliquam voluptas dolor
              autem sed voluptate nam molestias, possimus, quia necessitatibus
              error fugit dolore non dolorum sit.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: -2,
          cursor: "pointer",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
          }}
        >
          <SvgIcon icon={DownIcon} height={"20"} width={"20"} />
        </Grid>
      </Grid>
    </div>
  );
}
