import { authDataStoreFeature } from "./auth.reducers";

export const {
  selectToken,
  selectLoadingStatus,
  selectIsAuthenticated,
} = authDataStoreFeature;
