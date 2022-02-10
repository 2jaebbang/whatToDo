import { getCamp, getCampByType } from "apis/campApi";
import { observable, makeObservable } from "mobx";
import { createContext } from "react";
import { ICamp, ICampDetail } from "types/type";

class CampsStore {
  @observable campPopular: ICamp[] | null = null;
  @observable campSales: ICamp[] | null = null;
  @observable targetCamp: ICampDetail | null = null;

  constructor() {
    makeObservable(this);
  }

  fetchCampsPopular = async () => {
    const data = await getCampByType("popular");
    this.campPopular = data;
  };

  fetchCampsSale = async () => {
    const data = await getCampByType("sale");
    this.campSales = data;
  };

  fetchCampById = async (id: number) => {
    const data = await getCamp(id);
    this.targetCamp = data;
  };
}

export default createContext(new CampsStore());
