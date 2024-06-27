import React, { useEffect, useState } from "react";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import { _getMachineData } from "./components/services/MachineService";
import ListComponent from "./components/ListComponent";

interface MachineData {
  id: number;
  machineName: string;
  machineType: string;
  status: string;
  type: string;
  build: string;
}

interface Count {
  acceptable?: number;
  monitor?: number;
  danger?: number;
  alarm?: number;
  noStatus?: number | undefined;
  [key: string]: number | undefined;
}

const App: React.FC = () => {
  const [count, setCount] = useState<Count>({
    acceptable: 0,
    monitor: 0,
    danger: 0,
    alarm: 0,
    noStatus: 0,
  });

  const [machineData, setMachineData] = useState<MachineData[]>([]);
  const [machineDataPerm, setMachineDataPerm] = useState<MachineData[]>([]);

  const [filterValue, setFilterValue] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    getAllMachinesData();
  }, []);
  
  const getAllMachinesData = () => {
    _getMachineData().then((res: any) => {
        setMachineData(res?.data ?? []);
        setMachineDataPerm(res?.data ?? []);
        setRender(true);

        const data: MachineData[] = res?.data ?? [];
        const obj: Count = {};
        
        data?.forEach((val: MachineData) => {
          const value = val?.status?.toLowerCase(); // Optional chaining for safe access
          obj[value ?? ''] = (obj[value ?? ''] ?? 0) + 1; // Nullish coalescing operator and optional chaining
        });

        if (Object.keys(obj).includes("")) {
          obj["noStatus"] = obj[""];
        }
        setCount(obj);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const setfilterVal = (val: string) => {
    const data1 = machineDataPerm.filter((data: MachineData) => data?.status === val); // Optional chaining for safe access
    setMachineData(data1);
  };

  if (!render) {
    return <div data-testid="app">Loading....</div>;
  } else {
    return (
      <div data-testid="app1">
        <div className="header">
          <Header />
        </div>
        <div className="row">
          <div className="col-md-3 row m-2">
            <ButtonComponent count={count} setfilterVal={setfilterVal} />
          </div>
          <div className="col-md-8">
            <ListComponent machineData={machineData} />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
};

export default App;
