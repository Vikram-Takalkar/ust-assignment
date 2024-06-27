import React from "react";

interface MachineData {
  id: number;
  machineName: string;
  machineType: string;
  status: string;
  type: string;
  build: string;
}

interface ListComponentProps {
  machineData: MachineData[];
}

const ListComponent: React.FC<ListComponentProps> = ({ machineData }) => {
  return (
    <>
      <table className="table">
        <tbody>
          {machineData?.map((val) => (
            <tr key={val.id}>
              <td>{val.machineName}</td>
              <td>{val.machineType}</td>
              <td>
                {val.status === '' ? (
                  <span className="text-danger">Empty</span>
                ) : (
                  val.status
                )}
              </td>
              <td>{val.type}</td>
              <td>{val.build}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListComponent;
