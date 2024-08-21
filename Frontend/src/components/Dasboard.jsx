import React from "react";
import Numbers from "./Numbers";
import { Table } from "./Table";
import NewStudents from "./NewStudents";

export const Dashboard = () => {
  return (
    <div>
      <Numbers />
      <div className=" p-8 md:flex">
        <Table />
        <NewStudents />
      </div>
    </div>
  );
};
