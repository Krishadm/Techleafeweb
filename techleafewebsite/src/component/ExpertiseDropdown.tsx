import { useState } from "react";
import { Box } from "@mui/material";
import { DISCIPLINES } from "../data/servicesData";
import { useNavigate } from "react-router-dom";

const GREEN = "#3ecf6e";
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




// import { useState, useMemo, type ElementType } from "react";
// import { Box, Container } from "@mui/material";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
// import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
// import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
// import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
// import { DISCIPLINES } from "../data/servicesData";
// import { useNavigate } from "react-router-dom";

// const GREEN = "#3ecf6e";
// interface ExpertiseDropdownProps {
//   onNavigate?: () => void;
// }
// const PANEL_BG = "rgb(24, 27, 27)";
// const ROW_HOVER = "rgba(62, 207, 110, 0.08)";
// const LINE = "rgba(255,255,255,0.08)";
// const MUTED = "rgba(255,255,255,0.55)";

// const DISCIPLINE_ICONS: Record<string, ElementType> = {
//   blockchain: LayersOutlinedIcon,
//   ai: SmartToyOutlinedIcon,
//   web: PublicOutlinedIcon,
// };

// interface ExpertiseDropdownProps {
//   onNavigate?: () => void;
// }

// function DropdownRow({
//   label,
//   isActive,
//   icon: Icon,
//   onClick,
//   onMouseEnter,
// }: {
//   label: string;
//   isActive?: boolean;
//   icon?: ElementType;
//   onClick?: () => void;
//   onMouseEnter?: () => void;
// }) {
//   return (
//     <Box
//       component="button"
//       type="button"
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 1.5,
//         width: "100%",
//         textAlign: "left",
//         background: isActive ? ROW_HOVER : "transparent",
//         border: "none",
//         borderRadius: "10px",
//         cursor: "pointer",
//         p: "10px 12px",
//         fontFamily: "inherit",
//         transition: "background-color .15s ease",
//         "&:hover": { background: ROW_HOVER },
//         "&:hover .row-icon": { color: GREEN },
//       }}
//     >
//       {Icon ? (
//         <Box
//           sx={{
//             width: 28,
//             height: 28,
//             flexShrink: 0,
//             borderRadius: "7px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: isActive ? "rgba(62, 207, 110, 0.14)" : "rgba(255,255,255,0.06)",
//             color: isActive ? GREEN : "rgba(255,255,255,0.7)",
//           }}
//         >
//           <Icon sx={{ fontSize: 16 }} />
//         </Box>
//       ) : (
//         <CircleOutlinedIcon
//           className="row-icon"
//           sx={{ fontSize: 8, color: "rgba(255,255,255,0.35)", flexShrink: 0 }}
//         />
//       )}
//       <Box
//         sx={{
//           fontSize: 14,
//           fontWeight: isActive ? 600 : 400,
//           color: isActive ? GREEN : "rgba(255,255,255,0.9)",
//         }}
//       >
//         {label}
//       </Box>
//     </Box>
//   );
// }

// const ExpertiseDropdown = ({ onNavigate }: ExpertiseDropdownProps) => {
//   const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);

//   const active = useMemo(
//     () => DISCIPLINES.find((d) => d.id === activeId) ?? DISCIPLINES[0],
//     [activeId]
//   );
//   const ActiveIcon = DISCIPLINE_ICONS[active.id] ?? CircleOutlinedIcon;

//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         top: { xs: 64, md: 84 },
//         left: 0,
//         right: 0,
//         bottom: { xs: 0, md: "auto" },
//         display: "flex",
//         justifyContent: "center",
//         zIndex: 100,
//         px: { xs: 0, md: 2 },
//         pointerEvents: "none",
//       }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           pointerEvents: "auto",
//           background: PANEL_BG,
//           borderRadius: { xs: 0, md: "20px" },
//           border: { xs: "none", md: `1px solid ${LINE}` },
//           borderTop: `1px solid ${LINE}`,
//           boxShadow: {
//             xs: "none",
//             md: "0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)",
//           },
//           overflow: "hidden",
//           maxHeight: { xs: "calc(100dvh - 64px)", md: "calc(100dvh - 120px)" },
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {/* Shared heading row — full width, same height for every column below */}
//         <Box
//           sx={{
//             px: { xs: 2.5, md: 4 },
//             pt: { xs: 2.5, md: 3.5 },
//             pb: { xs: 2, md: 2.5 },
//             borderBottom: `1px solid ${LINE}`,
//           }}
//         >
//           <Box
//             component="h2"
//             sx={{
//               m: 0,
//               color: "#f3f3f3",
//               fontSize: { xs: 20, md: 26 },
//               lineHeight: 1.2,
//               letterSpacing: "-0.03em",
//               fontFamily: "'Francois One', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             Enterprise AI, Blockchain &amp; Mobile Applications
//           </Box>
//         </Box>

//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1.1fr" },
//             overflowY: "auto",
//           }}
//         >
//           {/* LEFT: feature card only — heading moved above */}
//           <Box
//             sx={{
//               p: { xs: 2.5, md: 4 },
//               borderRight: { md: `1px solid ${LINE}` },
//               borderBottom: { xs: `1px solid ${LINE}`, md: "none" },
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Box
//               sx={{
//                 border: `1px solid ${LINE}`,
//                 borderRadius: "14px",
//                 p: 2.5,
//                 background: "rgba(62, 207, 110, 0.05)",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 32,
//                   height: 32,
//                   borderRadius: "8px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   background: "rgba(62, 207, 110, 0.12)",
//                   color: GREEN,
//                   mb: 1.5,
//                 }}
//               >
//                 <ActiveIcon sx={{ fontSize: 18 }} />
//               </Box>
//               <Box sx={{ color: "#f3f3f3", fontSize: 15, fontWeight: 600, mb: 0.5 }}>
//                 {active.title}
//               </Box>
//               <Box sx={{ color: MUTED, fontSize: 13, lineHeight: 1.5, mb: 1.5 }}>
//                 High-performance engineering focused on {active.title.toLowerCase()},
//                 built for production from day one.
//               </Box>
//               <Box
//                 component="button"
//                 type="button"
//                 onClick={onNavigate}
//                 sx={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 0.5,
//                   background: "none",
//                   border: "none",
//                   color: GREEN,
//                   fontSize: 13,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                   p: 0,
//                 }}
//               >
//                 Learn more <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
//               </Box>
//             </Box>
//           </Box>

//           {/* MIDDLE: discipline selector */}
//           <Box
//             sx={{
//               p: { xs: 2, md: 2.5 },
//               borderRight: { md: `1px solid ${LINE}` },
//               borderBottom: { xs: `1px solid ${LINE}`, md: "none" },
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             {DISCIPLINES.map((d) => {
//               const isActive = d.id === activeId;
//               return (
//                 <Box
//                   key={d.id}
//                   component="button"
//                   type="button"
//                   onClick={() => {
//                     setActiveId(d.id);
//                     if (d.id == "blockchain") {
//                       navigate("/expertise/blockchain-development");
//                       onNavigate?.();
//                     }
//                     if (d.id == "ai") {
//                       navigate("/expertise/AIDevelopmentServices");
//                       onNavigate?.();
//                     }
//                     if (d.id == "web") {
//                       navigate("/expertise/appdevelopment");
//                       onNavigate?.();
//                     }
//                   }}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     width: "100%",
//                     textAlign: "left",
//                     background: isActive ? "rgba(75, 227, 127, 0.08)" : "transparent",
//                     border: "none",
//                     cursor: "pointer",
//                     padding: "14px 18px",
//                     fontFamily: "inherit",
//                     fontSize: { xs: 14, md: 17 },
//                     fontWeight: isActive ? 600 : 400,
//                     color: isActive ? GREEN : "#fff",
//                     transition: "color .18s ease, background-color .18s ease",
//                     borderBottom: `1px solid ${LINE}`,
//                     "&:hover": { color: GREEN, backgroundColor: "rgba(255,255,255,0.02)" },
//                   }}
//                 >
//                   {d.title}
//                 </Box>
//               );
//             })}
//           </Box>

//           {/* RIGHT: services for the active discipline */}
//           <Box sx={{ p: { xs: 2, md: 2.5 }, display: "flex", flexDirection: "column" }}>
//             <Box
//               sx={{
//                 color: MUTED,
//                 fontSize: 11,
//                 fontWeight: 600,
//                 letterSpacing: "0.08em",
//                 textTransform: "uppercase",
//                 px: 1.5,
//                 mb: 1,
//               }}
//             >
//               Services
//             </Box>
//             {active.services.map((item) => (
//               <DropdownRow key={item.slug} label={item.label} onClick={onNavigate} />
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ExpertiseDropdown;



// import { useState, useMemo, type ElementType } from "react";
// import { Box, Container } from "@mui/material";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
// import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
// import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
// import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
// import { DISCIPLINES } from "../data/servicesData";
// import { useNavigate } from "react-router-dom";

// const GREEN = "#3ecf6e";
// interface ExpertiseDropdownProps {
//   onNavigate?: () => void;
// }
// const PANEL_BG = "rgb(24, 27, 27)";
// const ROW_HOVER = "rgba(62, 207, 110, 0.08)";
// const LINE = "rgba(255,255,255,0.08)";
// const MUTED = "rgba(255,255,255,0.55)";

// const DISCIPLINE_ICONS: Record<string, ElementType> = {
//   blockchain: LayersOutlinedIcon,
//   ai: SmartToyOutlinedIcon,
//   web: PublicOutlinedIcon,
// };

// interface ExpertiseDropdownProps {
//   onNavigate?: () => void;
// }

// function DropdownRow({
//   label,
//   isActive,
//   icon: Icon,
//   onClick,
//   onMouseEnter,
// }: {
//   label: string;
//   isActive?: boolean;
//   icon?: ElementType;
//   onClick?: () => void;
//   onMouseEnter?: () => void;
// }) {
//   return (
//     <Box
//       component="button"
//       type="button"
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 1.5,
//         width: "100%",
//         textAlign: "left",
//         background: isActive ? ROW_HOVER : "transparent",
//         border: "none",
//         borderRadius: "10px",
//         cursor: "pointer",
//         p: "10px 12px",
//         fontFamily: "inherit",
//         transition: "background-color .15s ease",
//         "&:hover": { background: ROW_HOVER },
//         "&:hover .row-icon": { color: GREEN },
//       }}
//     >
//       {Icon ? (
//         <Box
//           sx={{
//             width: 28,
//             height: 28,
//             flexShrink: 0,
//             borderRadius: "7px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: isActive ? "rgba(62, 207, 110, 0.14)" : "rgba(255,255,255,0.06)",
//             color: isActive ? GREEN : "rgba(255,255,255,0.7)",
//           }}
//         >
//           <Icon sx={{ fontSize: 16 }} />
//         </Box>
//       ) : (
//         <CircleOutlinedIcon
//           className="row-icon"
//           sx={{ fontSize: 8, color: "rgba(255,255,255,0.35)", flexShrink: 0 }}
//         />
//       )}
//       <Box
//         sx={{
//           fontSize: 14,
//           fontWeight: isActive ? 600 : 400,
//           color: isActive ? GREEN : "rgba(255,255,255,0.9)",
//         }}
//       >
//         {label}
//       </Box>
//     </Box>
//   );
// }

// const ExpertiseDropdown = ({ onNavigate }: ExpertiseDropdownProps) => {
//   const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);

//   const active = useMemo(
//     () => DISCIPLINES.find((d) => d.id === activeId) ?? DISCIPLINES[0],
//     [activeId]
//   );
//   const ActiveIcon = DISCIPLINE_ICONS[active.id] ?? CircleOutlinedIcon;

//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         top: { xs: 64, md: 84 },
//         left: 0,
//         right: 0,
//         bottom: { xs: 0, md: "auto" },
//         display: "flex",
//         justifyContent: "center",
//         zIndex: 100,
//         px: { xs: 0, md: 2 },
//         pointerEvents: "none",
//       }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           pointerEvents: "auto",
//           background: PANEL_BG,
//           borderRadius: { xs: 0, md: "20px" },
//           border: { xs: "none", md: `1px solid ${LINE}` },
//           borderTop: `1px solid ${LINE}`,
//           boxShadow: {
//             xs: "none",
//             md: "0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)",
//           },
//           overflow: "hidden",
//           maxHeight: { xs: "calc(100dvh - 64px)", md: "calc(100dvh - 120px)" },
//           display: "flex",
//           flexDirection: "column",
//           transformOrigin: "top center",
//           animation: {
//             xs: "none",
//             md: "islandMorph 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
//           },
//           "@keyframes islandMorph": {
//             "0%": {
//               opacity: 0,
//               transform: "scale(0.55) translateY(-14px)",
//               borderRadius: "999px",
//             },
//             "60%": {
//               opacity: 1,
//               transform: "scale(1.02) translateY(0px)",
//               borderRadius: "20px",
//             },
//             "100%": {
//               opacity: 1,
//               transform: "scale(1) translateY(0px)",
//               borderRadius: "20px",
//             },
//           },
//         }}
//       >
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1.1fr" },
//             overflowY: "auto",
//           }}
//         >
//           {/* LEFT: heading + highlighted feature card */}
//           <Box
//             sx={{
//               p: { xs: 2.5, md: 4 },
//               borderRight: { md: `1px solid ${LINE}` },
//               borderBottom: { xs: `1px solid ${LINE}`, md: "none" },
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Box
//               component="h2"
//               sx={{
//                 m: 0,
//                 color: "#f3f3f3",
//                 fontSize: { xs: 20, md: 30 },
//                 lineHeight: 1.15,
//                 letterSpacing: "-0.03em",
//                 fontFamily: "'Francois One', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               Enterprise AI, Blockchain &amp; Mobile Applications
//             </Box>

//             <Box
//               sx={{
//                 mt: 3,
//                 border: `1px solid ${LINE}`,
//                 borderRadius: "14px",
//                 p: 2.5,
//                 background: "rgba(62, 207, 110, 0.05)",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 32,
//                   height: 32,
//                   borderRadius: "8px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   background: "rgba(62, 207, 110, 0.12)",
//                   color: GREEN,
//                   mb: 1.5,
//                 }}
//               >
//                 <ActiveIcon sx={{ fontSize: 18 }} />
//               </Box>
//               <Box sx={{ color: "#f3f3f3", fontSize: 15, fontWeight: 600, mb: 0.5 }}>
//                 {active.title}
//               </Box>
//               <Box sx={{ color: MUTED, fontSize: 13, lineHeight: 1.5, mb: 1.5 }}>
//                 High-performance engineering focused on {active.title.toLowerCase()},
//                 built for production from day one.
//               </Box>
//               <Box
//                 component="button"
//                 type="button"
//                 onClick={onNavigate}
//                 sx={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 0.5,
//                   background: "none",
//                   border: "none",
//                   color: GREEN,
//                   fontSize: 13,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                   p: 0,
//                 }}
//               >
//                 Learn more <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
//               </Box>
//             </Box>
//           </Box>

//           {/* MIDDLE: discipline selector */}
//           <Box
//             sx={{
//               p: { xs: 2, md: 2.5 },
//               borderRight: { md: `1px solid ${LINE}` },
//               borderBottom: { xs: `1px solid ${LINE}`, md: "none" },
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             {DISCIPLINES.map((d) => {
//               const isActive = d.id === activeId;
//               return (
//                 <Box
//                   key={d.id}
//                   component="button"
//                   type="button"
//                   onClick={() => {
//                     setActiveId(d.id);
//                     if (d.id == "blockchain") {
//                       navigate("/expertise/blockchain-development");
//                       onNavigate?.();
//                     }
//                     if (d.id == "ai") {
//                       navigate("/expertise/AIDevelopmentServices");
//                       onNavigate?.();
//                     }
//                     if (d.id == "web") {
//                       navigate("/expertise/appdevelopment");
//                       onNavigate?.();
//                     }
//                   }}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     width: "100%",
//                     textAlign: "left",
//                     background: isActive ? "rgba(75, 227, 127, 0.08)" : "transparent",
//                     border: "none",
//                     cursor: "pointer",
//                     padding: "14px 18px",
//                     fontFamily: "inherit",
//                     fontSize: { xs: 14, md: 17 },
//                     fontWeight: isActive ? 600 : 400,
//                     color: isActive ? GREEN : "#fff",
//                     transition: "color .18s ease, background-color .18s ease",
//                     borderBottom: `1px solid ${LINE}`,
//                     "&:hover": { color: GREEN, backgroundColor: "rgba(255,255,255,0.02)" },
//                   }}
//                 >
//                   {d.title}
//                 </Box>
//               );
//             })}
//           </Box>

//           {/* RIGHT: services for the active discipline */}
//           <Box sx={{ p: { xs: 2, md: 2.5 }, display: "flex", flexDirection: "column" }}>
//             <Box
//               sx={{
//                 color: MUTED,
//                 fontSize: 11,
//                 fontWeight: 600,
//                 letterSpacing: "0.08em",
//                 textTransform: "uppercase",
//                 px: 1.5,
//                 mb: 1,
//               }}
//             >
//               Services
//             </Box>
//             {active.services.map((item) => (
//               <DropdownRow key={item.slug} label={item.label} onClick={onNavigate} />
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ExpertiseDropdown;




// import { useState, useMemo, type ElementType } from "react";
// import { Box, Container } from "@mui/material";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
// import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
// import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
// import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
// import { DISCIPLINES } from "../data/servicesData";
// import { useNavigate } from "react-router-dom";

// const GREEN = "#3ecf6e";
// // const PANEL_BG = "rgb(30, 34, 34)";
// // const LINE = "rgba(255,255,255,0.1)";
//  interface ExpertiseDropdownProps {
//    onNavigate?: () => void;
//  }
// const PANEL_BG = "rgb(24, 27, 27)";
// const ROW_HOVER = "rgba(62, 207, 110, 0.08)";
// const LINE = "rgba(255,255,255,0.08)";
// const MUTED = "rgba(255,255,255,0.55)";

// // Optional per-discipline icon — falls back to a generic icon if an id isn't listed here.
// const DISCIPLINE_ICONS: Record<string, ElementType> = {
//   blockchain: LayersOutlinedIcon,
//   ai: SmartToyOutlinedIcon,
//   web: PublicOutlinedIcon,
// };

// interface ExpertiseDropdownProps {
//   onNavigate?: () => void;
// }

// /** Small row used for both the discipline list and the service list. */
// function DropdownRow({
//   label,
//   isActive,
//   icon: Icon,
//   onClick,
//   onMouseEnter,
// }: {
//   label: string;
//   isActive?: boolean;
//   icon?: ElementType;
//   onClick?: () => void;
//   onMouseEnter?: () => void;
// }) {
//   return (
//     <Box
//       component="button"
//       type="button"
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 1.5,
//         width: "100%",
//         textAlign: "left",
//         background: isActive ? ROW_HOVER : "transparent",
//         border: "none",
//         borderRadius: "10px",
//         cursor: "pointer",
//         p: "10px 12px",
//         fontFamily: "inherit",
//         transition: "background-color .15s ease",
//         "&:hover": { background: ROW_HOVER },
//         "&:hover .row-icon": { color: GREEN },
//       }}
//     >
//       {Icon ? (
//         <Box
//           sx={{
//             width: 28,
//             height: 28,
//             flexShrink: 0,
//             borderRadius: "7px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: isActive ? "rgba(62, 207, 110, 0.14)" : "rgba(255,255,255,0.06)",
//             color: isActive ? GREEN : "rgba(255,255,255,0.7)",
//           }}
//         >
//           <Icon sx={{ fontSize: 16 }} />
//         </Box>
//       ) : (
//         <CircleOutlinedIcon
//           className="row-icon"
//           sx={{ fontSize: 8, color: "rgba(255,255,255,0.35)", flexShrink: 0 }}
//         />
//       )}
//       <Box
//         sx={{
//           fontSize: 14,
//           fontWeight: isActive ? 600 : 400,
//           color: isActive ? GREEN : "rgba(255,255,255,0.9)",
//         }}
//       >
//         {label}
//       </Box>
//     </Box>
//   );
// }

// const ExpertiseDropdown = ({ onNavigate }: ExpertiseDropdownProps) => {
//   const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);

//   const active = useMemo(
//     () => DISCIPLINES.find((d) => d.id === activeId) ?? DISCIPLINES[0],
//     [activeId]
//   );
//   const ActiveIcon = DISCIPLINE_ICONS[active.id] ?? CircleOutlinedIcon;

// const navigate = useNavigate();  

//   // const handleDisciplineClick = (id: string) => {
//   //   if (id === "ai") {
//   //     navigate("/services/ai-development");
//   //     onNavigate?.();
//   //     return;
//   //   }

//   //   setActiveId(id);
//   // };
  
//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         top: { xs: 64, md: 84 },
//         left: 0,
//         right: 0,
//         bottom: { xs: 0, md: "auto" }, // lets the mobile panel size itself to the viewport
//         display: "flex",
//         justifyContent: "center",
//         zIndex: 100,
//         px: { xs: 0, md: 2 },
//         pointerEvents: "none", // container is just for centering; panel below re-enables it
//       }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           pointerEvents: "auto",
//           background: PANEL_BG,
//           borderRadius: { xs: 0, md: "20px" },
//           border: { xs: "none", md: `1px solid ${LINE}` },
//           borderTop: `1px solid ${LINE}`,
//           boxShadow: {
//             xs: "none",
//             md: "0 24px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)",
//           },
//           overflow: "hidden",
//           maxHeight: { xs: "calc(100dvh - 64px)", md: "calc(100dvh - 120px)" },
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1.1fr" },
//             overflowY: "auto",
//           }}
//         >
//           {/* LEFT: heading + highlighted feature card */}
//           <Box
//             sx={{
//               p: { xs: 2.5, md: 4 },
//               borderRight: { md: `1px solid ${LINE}` },
//               borderBottom: { xs: `1px solid ${LINE}`, md: "none" },
//               display: "flex",
//               flexDirection: "column",
//               // NOTE: no justifyContent:"space-between" here — that was what pinned the
//               // card to the bottom of the column and made it "jump" whenever the
//               // services column (right side) got taller/shorter between disciplines.
//             }}
//           >
//             <Box
//               component="h2"
//               sx={{
//                 m: 0,
//                 color: "#f3f3f3",
//                 fontSize: { xs: 20, md: 30 },
//                 lineHeight: 1.15,
//                 letterSpacing: "-0.03em",
//                 fontFamily: "'Francois One', sans-serif",
//                 fontWeight: 400,
//               }}
//             >
//               Enterprise AI, Blockchain &amp; Mobile Applications
//             </Box>

//             {/* Feature card — fixed distance from the heading, independent of
//                 how tall the services list on the right ends up being. */}
//             <Box
//               sx={{
//                 mt: 3,
//                 border: `1px solid ${LINE}`,
//                 borderRadius: "14px",
//                 p: 2.5,
//                 background: "rgba(62, 207, 110, 0.05)",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 32,
//                   height: 32,
//                   borderRadius: "8px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   background: "rgba(62, 207, 110, 0.12)",
//                   color: GREEN,
//                   mb: 1.5,
//                 }}
//               >
//                 <ActiveIcon sx={{ fontSize: 18 }} />
//               </Box>
//               <Box sx={{ color: "#f3f3f3", fontSize: 15, fontWeight: 600, mb: 0.5 }}>
//                 {active.title}
//               </Box>
//               <Box sx={{ color: MUTED, fontSize: 13, lineHeight: 1.5, mb: 1.5 }}>
//                 High-performance engineering focused on {active.title.toLowerCase()},
//                 built for production from day one.
//               </Box>
//               <Box
//                 component="button"
//                 type="button"
//                 onClick={onNavigate}
//                 sx={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 0.5,
//                   background: "none",
//                   border: "none",
//                   color: GREEN,
//                   fontSize: 13,
//                   fontWeight: 600,
//                   cursor: "pointer",
//                   p: 0,
//                 }}
//               >
//                 Learn more <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
//               </Box>
//             </Box>
//           </Box>

//           {/* MIDDLE: discipline selector */}
//           <Box
//             sx={{
//               p: { xs: 2, md: 2.5 },
//               borderRight: { md: `1px solid ${LINE}` },
//               borderBottom: { xs: `1px solid ${LINE}`, md: "none" },
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             {DISCIPLINES.map((d) => {
//               const isActive = d.id === activeId;
//               return (
//                 <Box
//                   key={d.id}
//                   component="button"
//                   type="button"
//                   onClick={() => {
//                     setActiveId(d.id);
//                     if(d.id == "blockchain"){
//                       navigate("/expertise/blockchain-development");
//                       onNavigate?.();
//                     }
//                     if(d.id == "ai"){
//                       navigate("/expertise/AIDevelopmentServices");
//                       onNavigate?.();
//                     }
//                     if(d.id == "web"){
//                       navigate("/expertise/appdevelopment")
//                       onNavigate?.();
//                     }
//                   }}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     width: "100%",
//                     textAlign: "left",
//                     background: isActive ? "rgba(75, 227, 127, 0.08)" : "transparent",
//                     border: "none",
//                     cursor: "pointer",
//                     padding: "14px 18px",
//                     fontFamily: "inherit",
//                     fontSize: { xs: 14, md: 17 },
//                     fontWeight: isActive ? 600 : 400,
//                     color: isActive ? GREEN : "#fff",
//                     transition: "color .18s ease, background-color .18s ease",
//                     borderBottom: `1px solid ${LINE}`,
//                     "&:hover": { color: GREEN, backgroundColor: "rgba(255,255,255,0.02)" },
//                   }}
//                 >
//                   {d.title}
//                 </Box>
//               );
//             })}
//           </Box>

//           {/* RIGHT: services for the active discipline */}
//           <Box sx={{ p: { xs: 2, md: 2.5 }, display: "flex", flexDirection: "column" }}>
//             <Box
//               sx={{
//                 color: MUTED,
//                 fontSize: 11,
//                 fontWeight: 600,
//                 letterSpacing: "0.08em",
//                 textTransform: "uppercase",
//                 px: 1.5,
//                 mb: 1,
//               }}
//             >
//               Services
//             </Box>
//             {active.services.map((item) => (
//               <DropdownRow key={item.slug} label={item.label} onClick={onNavigate} />
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ExpertiseDropdown;
