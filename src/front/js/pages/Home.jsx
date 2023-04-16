import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/Logo.jpg";
import Papa from 'papaparse';

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);


  return (
    <div className="text-center mt-5">
      HOME
    </div>
  );
};
