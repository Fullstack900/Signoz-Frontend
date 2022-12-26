import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { registerLicense } from '@syncfusion/ej2-base';
// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpFaV1HQmFJfFBmRmlYe1RzfUU3HVdTRHRdQ19hT35QdERmXnhceHE=;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDQmFMYVF2R2BJfFRxcF9FaUwgOX1dQl9hSHxRcEVgW35bd3NRQGU=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXHxLe0x0RWFab116dVFMY1VBNQtUQF1hS39RdENjWn1fdXNSQGNZ;ODE3NzM2QDMyMzAyZTM0MmUzMFV0NjFNejFMZ2JNbG1NaWd3TzVHUXRNc2NaZ2N0bUl6NDZUSDh0YlNIdWM9;ODE3NzM3QDMyMzAyZTM0MmUzMEtnUDJzUDB6b0h4OCtVdmVYbTZjNStBcGYrbU5lOE5ac0duREU0WFk4bGM9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJWfFZpR2NbfE5zflRCal9YVAciSV9jS3xSdEdlWXxccXFSTmRcVA==;ODE3NzM5QDMyMzAyZTM0MmUzME9WeFZuVzJOUE1GWDl0Nm43dFZMaS9VbmlscDI1Mzh4Y0ZlS0FMUGhySGc9;ODE3NzQwQDMyMzAyZTM0MmUzME5UbmF6T2RhcDN3ZmdsTS9vN3RZekV0dlYxRW5GblZyTkdvV3dGTnhsTWs9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXHxLe0x0RWFab116dVFMY1VBNQtUQF1hS39RdENjWn1fdXNcR2FZ;ODE3NzQyQDMyMzAyZTM0MmUzME9kTVg0d09LWWVzOTN4dUxwNW53MlFsZjZ5U21uUHNMRzE0T3lOVlFSWWM9;ODE3NzQzQDMyMzAyZTM0MmUzMFN3QWdvYmFxaTFKTkdCY0pBeERJbnRYR0dxMTF1RzFDRkZLemNqODF2Wjg9;ODE3NzQ0QDMyMzAyZTM0MmUzME9WeFZuVzJOUE1GWDl0Nm43dFZMaS9VbmlscDI1Mzh4Y0ZlS0FMUGhySGc9');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
