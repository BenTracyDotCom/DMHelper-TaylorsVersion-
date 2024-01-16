import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './features/counter/counterSlice';
import testReducer from './features/test/testSlice';
import campaignsReducer from './features/campaigns/campaignsSlice';
import campaignReducer from './features/campaigns/campaignSlice';
import newCampaignReducer from './features/newCampaign/newCampaignSlice';
import encounterReducer from './features/encounter/encounterSlice';
import encountersReducer from './features/encounter/encountersSlice';
import notesReducer from './features/notes/notesSlice';
import encounterBuilderReducer from './features/encounter/encounterBuilderSlice'
import dierollReducer from './features/dieroll/dierollSlice';
import prefsReducer from './features/preferences/preferencesSlice';
import initiativeReducer from './features/initiative/initiativeSlice';

export const store = configureStore({
  reducer: {
    campaigns: campaignsReducer,
    campaign: campaignReducer,
    counter: counterReducer,
    newCampaign: newCampaignReducer,
    encounter: encounterReducer,
    encounters: encountersReducer,
    notes: notesReducer,
    encounterBuilder: encounterBuilderReducer,
    dieroll: dierollReducer,
    prefs: prefsReducer,
    initiative: initiativeReducer,
    test: testReducer,
  }
})