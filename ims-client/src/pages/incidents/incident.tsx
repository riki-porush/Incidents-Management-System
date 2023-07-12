import React, { useEffect, useState } from "react";
import apiCalls from "../../service/apiCalls";
import IncidentTable from "../../components/IncidentTable/IncidentTable";

const Incident = () => {
  const [incident, setIncident] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const getIncidents = await apiCalls.getIncidents();
      setIncident(getIncidents);
    };
    FetchData();
  }, []);

  useEffect(() => {
    console.log("incident", incident);
  }, [incident]);

  return <IncidentTable rows={incident} />;
};

export default Incident;
