import React from "react";
import StatusCard from "./StatusCard";
import {
  RequirementContainer,
  RequirementHeader,
  RequirementLabel,
  RequirementValue
} from "./CreditRequirements";


export default ({ status, requirements }) => (
  <div>
    <StatusCard status={status} />
    <RequirementHeader>Here's what issuers are looking for</RequirementHeader>
    {requirements.map((req, i) => (
      <RequirementContainer key={`${req.lable}-${i}`}>
        <RequirementLabel>{req.label}</RequirementLabel>
        <RequirementValue>{req.value}</RequirementValue>
      </RequirementContainer>
    ))}
  </div>
);