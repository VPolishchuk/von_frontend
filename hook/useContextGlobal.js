import React, { useEffect, createContext, useState } from 'react';
import { sendRequest } from '../utils/api';
import endpointsMap from '../utils/endpoints-map';
// //////////////////////////////////////////////////////
export const GlobalContext = createContext({});

export const GlobalProvider = (props) => {
  const [locations, setLocations] = useState(null);
  const [types, setTypes] = useState(null);
  const [optionsTypes, setOptionsTypes] = useState(null);
  const [optionsLocations, setOptionsLocations] = useState(null);
  const getInitialProps = async function () {
    try {
      const resLocations = await sendRequest('get', endpointsMap.locations);
      const resApartmens = await sendRequest('get', endpointsMap.apartmensTypes);
      const { locations } = await resLocations.data;
      const data = await resApartmens.data;
      const optionsTypes = data && data.map(({name, apartmentTypeId}) => ({value: apartmentTypeId, label: name}));
      const optionsLocations = locations && locations.map(item => ({value: item, label: item}));
      setLocations(locations);
      setOptionsLocations(optionsLocations);
      setTypes(data);
      setOptionsTypes(optionsTypes);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getInitialProps();
  }, []);
  return (
    <GlobalContext.Provider value={{
      types,
      locations,
      optionsTypes,
      optionsLocations
    }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const Auth = React.createContext({});
