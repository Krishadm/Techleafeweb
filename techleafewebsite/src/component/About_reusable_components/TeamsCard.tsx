import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface TeamsCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const TeamsCard = ({
  icon,
  title,
  description,
}: TeamsCardProps) => {
  return (
    <>
      <style>
        {`
          /* =========================
             ICON
          ========================= */

          .teams-card-icon {
            width: 62px;
            min-width: 62px;

            height: 62px;

            display: flex;

            align-items: center;
            justify-content: center;

            border-radius: 50%;

            border: 2px solid #0c8c3b;

            background-color: #06110a;

            color: #18b94f;

            box-sizing: border-box;

            transition: all 0.3s ease;
          }


          /* =========================
             ICON HOVER
          ========================= */

          .teams-card:hover .teams-card-icon {
            background-color: #0d401e;

            border-color: #20c75a;

            color: #35d96c;
          }


          /* =========================
             MUI ICON SIZE
          ========================= */

          .teams-card-icon svg {
            font-size: 30px;
          }


          /* =========================
             CONTENT
          ========================= */

          .teams-card-content {
            flex: 1;

            min-width: 0;
          }


          /* =========================
             TITLE
          ========================= */

          .teams-card-title {
            color: #ffffff;

            font-size: 17px !important;

            font-weight: 600 !important;

            line-height: 1.3 !important;

            margin-bottom: 7px !important;
          }


          /* =========================
             DESCRIPTION
          ========================= */

          .teams-card-description {
            color: #c3c9c5;

            font-size: 13px !important;

            font-weight: 400 !important;

            line-height: 1.5 !important;

            margin: 0 !important;
          }


          /* =========================
             TABLET
          ========================= */

          @media (max-width: 900px) {

            .teams-card {
              min-height: 115px;

              padding: 17px;

              gap: 15px;
            }

            .teams-card-icon {
              width: 54px;
              min-width: 54px;

              height: 54px;
            }

            .teams-card-icon svg {
              font-size: 26px;
            }

            .teams-card-title {
              font-size: 15px !important;
            }

            .teams-card-description {
              font-size: 12px !important;
            }

          }


          /* =========================
             MOBILE
          ========================= */

          @media (max-width: 600px) {

            .teams-card {
              min-height: 105px;

              padding: 15px;

              gap: 14px;

              border-radius: 9px;
            }

            .teams-card-icon {
              width: 48px;
              min-width: 48px;

              height: 48px;
            }

            .teams-card-icon svg {
              font-size: 23px;
            }

            .teams-card-title {
              font-size: 14px !important;

              margin-bottom: 5px !important;
            }

            .teams-card-description {
              font-size: 11px !important;

              line-height: 1.45 !important;
            }

          }


          /* =========================
             SMALL MOBILE
          ========================= */

          @media (max-width: 400px) {

            .teams-card {
              padding: 13px;

              gap: 12px;
            }

            .teams-card-icon {
              width: 43px;
              min-width: 43px;

              height: 43px;
            }

            .teams-card-icon svg {
              font-size: 21px;
            }

            .teams-card-title {
              font-size: 13px !important;
            }

            .teams-card-description {
              font-size: 10px !important;
            }

          }
        `}
      </style>

      <Box className="teams-card">

        {/* ICON */}
        <Box className="teams-card-icon">
          {icon}
        </Box>

        {/* CONTENT */}
        <Box className="teams-card-content">

          <Typography className="teams-card-title">
            {title}
          </Typography>

          <Typography className="teams-card-description">
            {description}
          </Typography>

        </Box>

      </Box>
    </>
  );
};

export default TeamsCard;