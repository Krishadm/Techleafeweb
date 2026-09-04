import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <>
      <style>
        {`
          /* =========================
             FEATURE CARD
          ========================= */

          .feature-card {
            position: relative;

            width: 100%;
            min-height: 125px;

            display: flex;
            align-items: center;

            gap: 18px;
            padding: 20px;

            box-sizing: border-box;
            overflow: hidden;

            background:
              linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.035),
                rgba(255, 255, 255, 0.01)
              );

            border: 1px solid var(--tl-border);
            border-radius: 12px;

            transition:
              transform 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
          }


          /* =========================
             HOVER
          ========================= */

          .feature-card:hover {
            transform: translateY(-3px);

            border-color: var(--tl-accent-light);

            box-shadow:
              0 8px 24px rgba(29, 98, 12, 0.14);
          }


          /* =========================
             SHOW LEFT LINE
          ========================= */

          .feature-card:hover::before {
            transform: scaleY(1);
          }


          /* =========================
             ICON
          ========================= */

          .feature-card-icon {
            width: 56px;
            min-width: 56px;
            height: 56px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--tl-border);
            border-radius: 50%;

            background: rgba(0, 0, 0, 0.2);

            color: var(--tl-accent-light);

            box-sizing: border-box;

            transition:
              border-color 0.3s ease,
              background-color 0.3s ease;
          }


          /* =========================
             ICON HOVER
          ========================= */

          .feature-card:hover .feature-card-icon {
            border-color: var(--tl-accent-light);

            background: rgba(29, 98, 12, 0.08);
          }


          /* =========================
             ICON SIZE
          ========================= */

          .feature-card-icon svg {
            font-size: 27px;
          }


          /* =========================
             CONTENT
          ========================= */

          .feature-card-content {
            flex: 1;
            min-width: 0;
          }


          /* =========================
             TITLE
          ========================= */

          .feature-card-title {
            color: var(--tl-accent-light);

            font-size: 18px !important;
            font-weight: 500 !important;

            line-height: 1.3 !important;

            margin-bottom: 7px !important;
          }


          /* =========================
             DESCRIPTION
          ========================= */

          .feature-card-description {
            color: #ffffff;

            font-size: 14px !important;
            font-weight: 400 !important;

            line-height: 1.5 !important;

            margin: 0 !important;
          }


          /* =========================
             TABLET
          ========================= */

          @media (max-width: 900px) {

            .feature-card {
              min-height: 115px;
              padding: 17px;
              gap: 15px;
            }

            .feature-card-icon {
              width: 52px;
              min-width: 52px;
              height: 52px;
            }

            .feature-card-icon svg {
              font-size: 25px;
            }

            // .feature-card-title {
            //   font-size: 15px !important;
            // }

            // .feature-card-description {
            //   font-size: 12px !important;
            // }
          }


          /* =========================
             MOBILE
          ========================= */

          @media (max-width: 600px) {

            .feature-card {
              min-height: 105px;
              padding: 15px;
              gap: 13px;
              border-radius: 10px;
            }

            .feature-card-icon {
              width: 46px;
              min-width: 46px;
              height: 46px;
            }

            .feature-card-icon svg {
              font-size: 22px;
            }

            .feature-card-title {
            //   font-size: 14px !important;
              margin-bottom: 5px !important;
            }

            .feature-card-description {
            //   font-size: 11px !important;
              line-height: 1.45 !important;
            }

            .feature-card::before {
              top: 15px;
              bottom: 15px;
            }
          }


          /* =========================
             SMALL MOBILE
          ========================= */

          @media (max-width: 400px) {

            .feature-card {
              padding: 13px;
              gap: 11px;
            }

            .feature-card-icon {
              width: 42px;
              min-width: 42px;
              height: 42px;
            }

            .feature-card-icon svg {
              font-size: 20px;
            }

            // .feature-card-title {
            //   font-size: 13px !important;
            // }

            // .feature-card-description {
            //   font-size: 10px !important;
            // }
          }
        `}
      </style>

      <Box className="feature-card">

        {/* ICON */}
        <Box className="feature-card-icon">
          {icon}
        </Box>

        {/* CONTENT */}
        <Box className="feature-card-content">

          <Typography className="feature-card-title">
            {title}
          </Typography>

          <Typography className="feature-card-description">
            {description}
          </Typography>

        </Box>

      </Box>
    </>
  );
};

export default FeatureCard;