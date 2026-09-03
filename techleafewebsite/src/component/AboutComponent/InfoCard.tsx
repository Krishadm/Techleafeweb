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

          .info-card {
            width: 100%;
            min-height: 125px;
            display: flex;
            align-items: center;
            gap: 18px;
            padding: 20px;
            box-sizing: border-box;
            background-color: #050908;
            border: 1px solid #1D620C;
            border-radius: 10px;
            transition: all 0.3s ease;
          }
          .about-section{
            
          }

          /* =========================
             HOVER
          ========================= */

          .info-card:hover {
            border-color: #1D620C;
            background-color: #07120b;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 100, 40, 0.18);
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
            border: 2px solid #1D620C;
            background-color: #06110a;
            color: #1D620C;
            box-sizing: border-box;
            transition: all 0.3s ease;
          }

          /* =========================
             ICON HOVER
          ========================= */

          .info-card:hover .info-card-icon {
            background-color: #0d401e;
            border-color: #1D620C;
            color: #1D620C;
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
            color: #ffffff;
            font-size: 17px !important;
            font-weight: 600 !important;
            line-height: 1.3 !important;
            margin-bottom: 7px !important;
          }
            p{
            color: #ffffff;
            }


          /* =========================
             DESCRIPTION
          ========================= */

          .info-card-description {
            color: #ffffff;
            font-size: 13px !important;
            font-weight: 400 !important;
            line-height: 1.5 !important;
            margin: 0 !important;
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
              font-size: 15px !important;
            }

            .info-card-description {
              font-size: 12px !important;
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

            .info-card-title {
              font-size: 14px !important;
              margin-bottom: 5px !important;
            }

            .info-card-description {
              font-size: 11px !important;
              line-height: 1.45 !important;
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

            .info-card-title {
              font-size: 13px !important;
            }

            .info-card-description {
              font-size: 10px !important;
            }

          }
        `}
      </style>

      <Box className="info-card about-section">

        {/* ICON */}
        <Box className="info-card-icon">
          {icon}
        </Box>

        {/* CONTENT */}
        <Box className="info-card-content">

          <Typography className="info-card-title" sx={{color: "#ffffff  !important"}}>
            {title}
          </Typography>

          <Typography className="info-card-description" sx={{color: "#ffffff  !important"}}>
            {description}
          </Typography>

        </Box>

      </Box>
    </>
  );
};

export default InfoCard;