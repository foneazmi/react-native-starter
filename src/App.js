import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from '@stores';
import Router from '@root/Router';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInpu',
  'VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.',
  'Warning: Failed child context type: Invalid child context `virtualizedCell.cellKey` of type `number` supplied to `CellRenderer`, expected `string`',
]);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router />
    </PersistGate>
  </Provider>
);

export default App;
