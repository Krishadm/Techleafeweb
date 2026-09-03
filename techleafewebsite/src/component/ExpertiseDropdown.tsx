import { useState } from "react";
import { Box, Container } from "@mui/material";
import { DISCIPLINES } from "../data/servicesData";

import { useNavigate } from "react-router-dom";  //

const GREEN = "#3ecf6e";
const PANEL_BG = "rgb(30, 34, 34)";
const LINE = "rgba(255,255,255,0.1)";

interface ExpertiseDropdownProps {
  onNavigate?: () => void;
}

const ExpertiseDropdown = ({ onNavigate }: ExpertiseDropdownProps) => {
  const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);
  const active = DISCIPLINES.find((d) => d.id === activeId) ?? DISCIPLINES[0];

const navigate = useNavigate();  

  return (
    <Box
      sx={{
        position: "fixed",
        top: 72,
        left: 0,
        right: 0,
        width: "100vw",
        background: PANEL_BG,
        borderTop: `1px solid ${LINE}`,
        borderBottom: `1px solid ${LINE}`,
        boxShadow: "0 18px 36px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.04)",
        zIndex: 100,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 0, md: 2 }, py: 0 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr 1.1fr" },
            minHeight: 280,
            gap: 0,
          }}
        >
          <Box
            sx={{
              p: { xs: 2, md: 3 },
              borderRight: { md: `1px solid ${LINE}` },
              borderBottom: { xs: `1px solid ${LINE}`, md: "none" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              component="h2"
              sx={{
                m: 0,
                color: "#f3f3f3",
                fontSize: { xs: 22, md: 38 },
                lineHeight: 1,
                letterSpacing: "-0.04em",
                fontFamily: "'Francois One', sans-serif",
                fontWeight: 400,
              }}
            >
              Enterprise AI,
              <br />
              Blockchain &amp; Mobile
              <br />
              Applications
            </Box>

            <Box
              component="p"
              sx={{
                m: 0,
                mt: 1.5,
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: 12, md: 15 },
                lineHeight: 1.5,
                maxWidth: 420,
                fontWeight: 400,
              }}
            >
              High-performance software engineering for startups and enterprises — turning
              complex tech requirements into reliable production software.
            </Box>
          </Box>

          <Box
            sx={{
              borderRight: { md: `1px solid ${LINE}` },
              borderBottom: { xs: `1px solid ${LINE}`, md: "none" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            {DISCIPLINES.map((d) => {
              const isActive = d.id === activeId;
              return (
                <Box
                  key={d.id}
                  component="button"
                  type="button"
                  onClick={() => {
                    setActiveId(d.id);
                    if(d.id == "blockchain"){
                      navigate(`/expertise/blockchain-development`)
                    }
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    textAlign: "left",
                    background: isActive ? "rgba(75, 227, 127, 0.08)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "14px 18px",
                    fontFamily: "inherit",
                    fontSize: { xs: 14, md: 17 },
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? GREEN : "#fff",
                    transition: "color .18s ease, background-color .18s ease",
                    borderBottom: `1px solid ${LINE}`,
                    "&:hover": { color: GREEN, backgroundColor: "rgba(255,255,255,0.02)" },
                  }}
                >
                  {d.title}
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              py: { xs: 1.5, md: 1.5 },
              px: { xs: 1.5, md: 2 },
            }}
          >
            {active.services.map((item) => (
              <Box
                key={item.slug}
                component="button"
                type="button"
                onClick={onNavigate}
  //               onClick={() => {
  //   navigate(`/expertise/blockchain-development`);
  //   onNavigate?.();
  // }}
                sx={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  padding: "10px 10px",
                  fontSize: { xs: 13, md: 15 },
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                  transition: "color .18s ease, opacity .18s ease",
                  lineHeight: 1.5,
                  opacity: 0.95,
                  margin: 0,
                  border: "none",
                  cursor: "pointer",
                  "&:hover": { color: GREEN },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpertiseDropdown;
