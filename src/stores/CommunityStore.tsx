import { observable, makeObservable } from "mobx";
import { createContext } from "react";
import { ICommunity } from "types/type";
import { getCommunity, getCommunities } from "apis/communityApi";

class CommunityStore {
  @observable communities: ICommunity[] | null = null;
  @observable targetCommunity: ICommunity | null = null;

  constructor() {
    makeObservable(this);
  }

  fetchCommunities = async () => {
    const communities = await getCommunities();
    this.communities = communities;
  };

  fetchCommunityById = async (id: number) => {
    const communitiy = await getCommunity(id);
    this.targetCommunity = communitiy;
  };
}

export default createContext(new CommunityStore());
