import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Settings } from './settings';



const Wid = {

  render() {
      console.log('render');
      return true;
  },

  init() {
      console.log('init');
      return true;
  },

  bind_actions() {

      console.log('bind_actions');
      return true;
  },

  settings() {
    console.log("appppp")
    const root = ReactDOM.createRoot(
        document.querySelector('widget_settings') as HTMLElement
    );
    root.render(
        <Settings />
    );
  },

  advancedSettings() {
    console.log("appppp")
    const root = ReactDOM.createRoot(
        document.getElementById('list_page_holder') as HTMLElement
    );
    root.render(
        <App />
    );
  },

  onSave() {

  },

  destroy() {
      console.log('destroy');
  },

  contacts_selected() {

  },

  leads_selected() {

  },

  tasks_selected() {

  }

};

export default Wid;