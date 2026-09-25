import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./ExpertiseDropdown.css";

const DISCIPLINES = [
  {
    id: "blockchain",
    title: "Blockchain Development",
    path: "/expertise/blockchainDevelopment",
  },
  {
    id: "ai",
    title: "AI Development",
    path: "/expertise/aiDevelopmentServices",
  },
  {
    id: "web",
    title: "Web & App Development",
    path: "/expertise/appDevelopment",
  },
];

interface ExpertiseDropdownProps {
  open: boolean;
  onNavigate?: () => void;
}

const ExpertiseDropdown = ({
  open,
  onNavigate,
}: ExpertiseDropdownProps) => {
  const location = useLocation();

  const currentPath = location.pathname.toLowerCase();

  const currentActiveId =
    DISCIPLINES.find(
      (discipline) => discipline.path.toLowerCase() === currentPath,
    )?.id || "";

  return (
    <Box
      className={`expertise-dropdown ${
        open
          ? "expertise-dropdown--open"
          : "expertise-dropdown--closed"
      }`}
    >
      {DISCIPLINES.map((d) => {
        const isActive = d.id === currentActiveId;

        return (
          <Box
            key={d.id}
            component={Link}
            to={d.path}
            onClick={onNavigate}
            className={`expertise-dropdown__item ${
              isActive ? "expertise-dropdown__item--active" : ""
            }`}
          >
            {d.title}
          </Box>
        );
      })}
    </Box>
  );
};

export default ExpertiseDropdown;