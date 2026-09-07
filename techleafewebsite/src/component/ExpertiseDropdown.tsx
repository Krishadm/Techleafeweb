import { useState } from "react";
import { Box } from "@mui/material";
import { DISCIPLINES } from "../data/servicesData";
import { useNavigate } from "react-router-dom";

const GREEN = "#35A51C";
const PANEL_BG = "rgb(24, 27, 27)";
const LINE = "rgba(255,255,255,0.08)";

interface ExpertiseDropdownProps {
  open: boolean;
  onNavigate?: () => void;
}

const ExpertiseDropdown = ({ open, onNavigate }: ExpertiseDropdownProps) => {
  const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    setActiveId(id);
    if (id === "blockchain") {
      navigate("/expertise/blockchain-development");
      onNavigate?.();
    }
    if (id === "ai") {
      navigate("/expertise/AIDevelopmentServices");
      onNavigate?.();
    }
    if (id === "web") {
      navigate("/expertise/appdevelopment");
      onNavigate?.();
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: 0,
        width: 260,
        zIndex: 100,
        background: PANEL_BG,
        borderRadius: "16px",
        border: `1px solid ${LINE}`,
        boxShadow: "0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)",
        overflow: "hidden",
        p: 1,
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        transformOrigin: "top left",
        animation: open
          ? "islandIn 0.65s cubic-bezier(0.34, 1.2, 0.4, 1) forwards"
          : "islandOut 0.35s cubic-bezier(0.4, 0, 0.6, 1) forwards",
        "@keyframes islandIn": {
          "0%": { opacity: 0, transform: "scale(0.5) translateY(-10px)", borderRadius: "999px" },
          "65%": { opacity: 1, transform: "scale(1.03) translateY(0px)", borderRadius: "16px" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0px)", borderRadius: "16px" },
        },
        "@keyframes islandOut": {
          "0%": { opacity: 1, transform: "scale(1) translateY(0px)", borderRadius: "16px" },
          "100%": { opacity: 0, transform: "scale(0.5) translateY(-10px)", borderRadius: "999px" },
        },
      }}
    >
      {DISCIPLINES.map((d) => {
        const isActive = d.id === activeId;
        return (
          <Box
            key={d.id}
            component="button"
            type="button"
            onClick={() => handleClick(d.id)}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              textAlign: "left",
              background: isActive ? "rgba(62, 207, 110, 0.08)" : "transparent",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              padding: "13px 15px",
              fontFamily: "inherit",
              fontSize: 15,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? GREEN : "#fff",
              transition: "color .18s ease, background-color .18s ease",
              "&:hover": { color: GREEN, backgroundColor: "rgba(255,255,255,0.04)" },
            }}
          >
            {d.title}
          </Box>
        );
      })}
    </Box>
  );
};

export default ExpertiseDropdown;