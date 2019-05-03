import React, { useState } from "react";
import * as lendingHealth from "./data";
import TermLoan from "./Components/TermLoan";
import TabGroup from "./Components/TabGroup";
import CCRequirements from "./Components/CCRequirements";
import MainWrapper from "./Components/MainWrapper";

function App() {
  const [activeTab, setActiveTab] = useState("Credit Card");
  const { TL, CC, tabs } = lendingHealth;

  return (
    <MainWrapper>
      <TabGroup
        activeTab={activeTab}
        tabs={tabs}
        selectTab={setActiveTab}
      />
      {activeTab === "Credit Card" ? (
        <CCRequirements status={CC.status} requirements={CC.requirements} />
      ) : (
        <TermLoan
          header={TL.header}
          description={TL.description}
          icon={TL.icon}
        />
      )}
    </MainWrapper>
  );
};

export default App;
