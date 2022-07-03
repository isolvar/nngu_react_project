import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import store from './store/store.ts';
import AdvertsPage from './content/AdvertsPage';
import LayoutPage from './LayoutPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LayoutPage />} />
            <Route path="/login" element={<LayoutPage />}>
              <Route path="adverts" element={<AdvertsPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
