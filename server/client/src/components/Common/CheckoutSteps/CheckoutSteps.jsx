import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  MdLocalShipping,
  MdLibraryAddCheck,
  MdAccountBalance,
} from "react-icons/md";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography variant="subtitle2">Shipping Details</Typography>,
      icon: <MdLocalShipping />,
    },
    {
      label: <Typography variant="subtitle2">Confirm Order</Typography>,
      icon: <MdLibraryAddCheck />,
    },
    {
      label: <Typography variant="subtitle2">Payment</Typography>,
      icon: <MdAccountBalance />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <div className="steps">
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "#f3b632" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CheckoutSteps;
