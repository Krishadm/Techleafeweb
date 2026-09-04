import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({
  icon,
  title,
  description,
}: InfoCardProps) => {
  return (
    <>
      <style>
        {`
          /* =========================
             INFO CARD
          ========================= */
            :root {
    --tl-bg: #000000;
    --tl-bg-soft: #050505;
    --tl-fg: #ffffff;
    --tl-muted: #cfcfcf;
    --tl-accent: #1d620c;
    --tl-accent-light: #35a51c;
    --tl-border: rgba(29, 98, 12, 0.55);
  }

          .info-card {
            position: relative;

            width: 100%;
            min-height: 125px;

            display: flex;
            align-items: center;

            gap: 18px;
            padding: 20px;

            box-sizing: border-box;
            overflow: hidden;

            /* SAME BACKGROUND THEME */
            background:
              linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.035),
                rgba(255, 255, 255, 0.01)
              );

            /* SAME BORDER THEME */
            border: 1px solid var(--tl-border);
            border-radius: 16px;

            transition:
              transform 0.35s ease,
              border-color 0.35s ease,
              box-shadow 0.35s ease;
          }


          /* =========================
             BOTTOM GREEN LINE
          ========================= */

          .info-card::after {
            content: "";

            position: absolute;

            right: 15%;
            bottom: 0;
            left: 15%;

            height: 2px;

            /* SAME ACCENT COLOR */
            background: var(--tl-accent-light);

            transform: scaleX(0);

            transition: transform 0.35s ease;
          }


          /* =========================
             HOVER
          ========================= */

          .info-card:hover {
            // transform: translateY(-8px);

            /* SAME BORDER COLOR */
            border-color: var(--tl-accent-light);

            /* SAME SHADOW */
            box-shadow:
              0 15px 40px rgba(29, 98, 12, 0.18);
          }


          /* =========================
             SHOW BOTTOM LINE
          ========================= */

          .info-card:hover::after {
            transform: scaleX(1);
          }


          /* =========================
             ICON
          ========================= */

          .info-card-icon {
            width: 62px;
            min-width: 62px;
            height: 62px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            /* SAME BORDER THEME */
            border: 2px solid var(--tl-border);

            /* DARK BACKGROUND */
            background: rgba(0, 0, 0, 0.2);

            /* SAME ACCENT THEME */
            color: var(--tl-accent-light);

            box-sizing: border-box;

            transition:
              border-color 0.35s ease,
              color 0.35s ease,
              box-shadow 0.35s ease;
          }


          /* =========================
             ICON HOVER
          ========================= */

          .info-card:hover .info-card-icon {
            border-color: var(--tl-accent-light);

            color: var(--tl-accent-light);

            box-shadow:
              0 0 12px rgba(29, 98, 12, 0.18);
          }


          /* =========================
             MUI ICON SIZE
          ========================= */

          .info-card-icon svg {
            font-size: 30px;
          }


          /* =========================
             CONTENT
          ========================= */

          .info-card-content {
            flex: 1;
            min-width: 0;
          }


          /* =========================
             TITLE
          ========================= */

          .info-card-title {
            // color: var(--tl-muted);
            color: var(--tl-accent-light) !important;

            font-size: 20px !important;
            font-weight: 400 !important;

            line-height: 1.3 !important;

            margin-bottom: 7px !important;

            transition: color 0.35s ease;
          }


          /* =========================
             TITLE HOVER
          ========================= */

          .info-card:hover .info-card-title {
            // color: var(--tl-accent-light);
          }


          /* =========================
             DESCRIPTION
          ========================= */

          .info-card-description {
            // color: var(--tl-muted);
            color: var(--tl-fg) !important;

            font-size: 16px !important;
            font-weight: 200 !important;

            line-height: 1.5 !important;

            margin: 0 !important;
            transition: color 0.35s ease;
          }
            .info-card:hover .info-card-description{
            // color: var(--tl-fg);
            }


          /* =========================
             TABLET
          ========================= */

          @media (max-width: 900px) {

            .info-card {
              min-height: 115px;
              padding: 17px;
              gap: 15px;
            }

            .info-card-icon {
              width: 54px;
              min-width: 54px;
              height: 54px;
            }

            .info-card-icon svg {
              font-size: 26px;
            }

             .info-card-title {
               font-size: 18px !important;
             }

             .info-card-description {
               font-size: 14px !important;
             }

          }


          /* =========================
             MOBILE
          ========================= */

          @media (max-width: 600px) {

            .info-card {
              min-height: 105px;
              padding: 15px;
              gap: 14px;
              border-radius: 9px;
            }

            .info-card-icon {
              width: 48px;
              min-width: 48px;
              height: 48px;
            }

            .info-card-icon svg {
              font-size: 23px;
            }

          }


          /* =========================
             SMALL MOBILE
          ========================= */

          @media (max-width: 400px) {

            .info-card {
              padding: 13px;
              gap: 12px;
            }

            .info-card-icon {
              width: 43px;
              min-width: 43px;
              height: 43px;
            }

            .info-card-icon svg {
              font-size: 21px;
            }

          }
        `}
      </style>


      {/* =========================
          INFO CARD
      ========================= */}

      <Box className="info-card">

        {/* ICON */}
        <Box className="info-card-icon">
          {icon}
        </Box>


        {/* CONTENT */}
        <Box className="info-card-content">

          <Typography className="info-card-title">
            {title}
          </Typography>

          <Typography className="info-card-description">
            {description}
          </Typography>

        </Box>

      </Box>
    </>
  );
};

export default InfoCard;