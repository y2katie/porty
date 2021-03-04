import React from "react";
import ProjectDescription from "./ProjectDescription";

import { Container } from 'semantic-ui-react'


export default function Starsnob() {
  return(
    <Container>
    <ProjectDescription
      projectHeader = "Starsnob"
      projectExplainer="The sister product to Online Leasing - Renter UX. This product allows agents to see all applicants documents and approve on a case by case basis. This product is available to show on a per request basis."
      link="https://starsnob.vercel.app/"
      img = "89.png"
      problem="Problem"
      problemContent="Agents workflows were primarly dealing with paper leases and paper documents. Needless to say, its not the most modern system. "
      solution="Solution"
      solutionContent="Online Leasing - Agent UX gives agents an easier way to approve clients. Agents can review the required documents, contact main applicants, guarantors and co-applicants on a case by case basis"
      img2 = "94.png"
    />
    </Container>
  )
}
