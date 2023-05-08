import { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, Typography } from "@mui/material";

interface CompanyValue {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
}
const companyValue: CompanyValue[] = [
  {
    id: 1,
    title: "Who We Are",
    subtitle: "Technology Company",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio quam molestias nobis similique repudiandae, recusandae, distinctio alias culpa ea eveniet laborum quis veritatis necessitatibus consequatur modi suscipit quae rerum magnam fugiat ex perspiciatis temporibus itaque. Quibusdam, inventore culpa. Doloribus doloremque eius id molestias laborum, odio optio officiis expedita deserunt sequi minima rem exercitationem commodi vitae sunt facere corrupti deleniti possimus at magni maiores consequatur iusto quo? Sed rerum exercitationem recusandae perspiciatis delectus et possimus. Eos ipsam consequuntur quasi odit perspiciatis qui deleniti nisi modi necessitatibus. Et eaque blanditiis voluptas aut at dignissimos perspiciatis repellat consequuntur quibusdam. Iste, quos praesentium!",
  },
  {
    id: 2,
    title: "What We Do",
    subtitle: "Professional Brand Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio quam molestias nobis similique repudiandae, recusandae, distinctio alias culpa ea eveniet laborum quis veritatis necessitatibus consequatur modi suscipit quae rerum magnam fugiat ex perspiciatis temporibus itaque. Quibusdam, inventore culpa. Doloribus doloremque eius id molestias laborum, odio optio officiis expedita deserunt sequi minima rem exercitationem commodi vitae sunt facere corrupti deleniti possimus at magni maiores consequatur iusto quo? Sed rerum exercitationem recusandae perspiciatis delectus et possimus. Eos ipsam consequuntur quasi odit perspiciatis qui deleniti nisi modi necessitatibus. Et eaque blanditiis voluptas aut at dignissimos perspiciatis repellat consequuntur quibusdam. Iste, quos praesentium!",
  },
  {
    id: 3,
    title: "How We Do",
    subtitle: "Startegize, Design, Collaborate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio quam molestias nobis similique repudiandae, recusandae, distinctio alias culpa ea eveniet laborum quis veritatis necessitatibus consequatur modi suscipit quae rerum magnam fugiat ex perspiciatis temporibus itaque. Quibusdam, inventore culpa. Doloribus doloremque eius id molestias laborum, odio optio officiis expedita deserunt sequi minima rem exercitationem commodi vitae sunt facere corrupti deleniti possimus at magni maiores consequatur iusto quo? Sed rerum exercitationem recusandae perspiciatis delectus et possimus. Eos ipsam consequuntur quasi odit perspiciatis qui deleniti nisi modi necessitatibus. Et eaque blanditiis voluptas aut at dignissimos perspiciatis repellat consequuntur quibusdam. Iste, quos praesentium!",
  },
];

const coreValue = [
  {
    id: 1,
    title: "Dedication",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum, commodi quibusdam enim corporis voluptatibus?",
  },
  {
    id: 2,
    title: "Intellectual Honestly ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum, commodi quibusdam enim corporis voluptatibus?",
  },
  {
    id: 3,
    title: "Curiosity",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum, commodi quibusdam enim corporis voluptatibus?",
  },
];

export default function OurCompany() {
  const [storecompanyVal, setStoreCompanyVal] = useState<CompanyValue>(
    companyValue[0]
  );
  const [counter, setCounter] = useState<number>(0);

  const handleNextCompanyVal = (count: number, type?: string) => {
    setStoreCompanyVal(companyValue[count]);
    if (type === "back") {
      setCounter(count - 1);
      setStoreCompanyVal(companyValue[count - 1]);
      if (count < 1) {
        setCounter(2);
        setStoreCompanyVal(companyValue[2]);
      }
    } else {
      setStoreCompanyVal(companyValue[count]);
      setCounter(count + 1);
      if (count > companyValue.length - 1) {
        setCounter(1);
        setStoreCompanyVal(companyValue[0]);
      }
    }
  };

  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid maxWidth={1000} py={5}>
          {/* company value */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pb: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: 36, color: "#029FE4" }}
            >
              {storecompanyVal.title}
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: 1,
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
              {storecompanyVal.subtitle}
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "#777777 ", fontSize: 14 }}>
              {storecompanyVal.desc}
            </Typography>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 2,
            }}
          >
            <Grid
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 24 }}>
                {`0${storecompanyVal.id}`}
              </Typography>
              <Grid sx={{ display: "flex", gap: 0.5, pt: 1 }}>
                <Typography sx={{ color: "#B6B6B6" }}>/</Typography>
                <Typography sx={{ color: "#B6B6B6" }}>
                  {companyValue.length}
                </Typography>
              </Grid>
            </Grid>

            <Grid display="flex" gap={1} pb={5}>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  width: 50,
                  backgroundColor: "#F1F1F1",
                  cursor: "pointer",
                }}
                onClick={() => handleNextCompanyVal(counter, "back")}
              >
                <Typography color={"#B6B6B6"}>
                  <ArrowBackIcon />
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  width: 50,
                  backgroundColor: "#1BA0E1",
                  cursor: "pointer",
                }}
                onClick={() => handleNextCompanyVal(counter)}
              >
                <Typography color={"#ffffff"}>
                  <ArrowForwardIcon />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* core value */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              py: 7,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: 36, color: "#029FE4", pb: 1 }}
            >
              Our Core Values
            </Typography>
            <Typography
              sx={{
                color: "#777777 ",
                fontSize: 14,
                pb: 1,
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              perspiciatis cupiditate eveniet assumenda sequi omnis molestiae
              accusantium recusandae officia reprehenderit quis ea nisi corporis
              expedita consectetur dolorum, nesciunt ipsum amet.
            </Typography>
            <Typography
              sx={{ color: "#777777 ", fontSize: 14, textAlign: "center" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
              obcaecati.
            </Typography>
            <Grid display="flex" py={5}>
              {coreValue.map((val) => {
                return (
                  <Grid sx={{ maxWidth: 300 }} key={val.id}>
                    <Grid sx={{ display: "flex", gap: 2, py: 1 }}>
                      <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
                        {val.id}
                      </Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
                        {val.title}
                      </Typography>
                    </Grid>
                    <Typography sx={{ color: "#777777 ", fontSize: 14 }}>
                      {val.desc}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
