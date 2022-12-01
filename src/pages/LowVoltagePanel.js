import React from 'react';
import Gauger from '../components/Gauger';

const LowVoltagePanel = () => (
  <div className="lowpanel">
    <div className="lowpanel__left">
      <div className="lowpanel__left-top">
        <div className="lowpanel__left-top-row">
          <div className="lowpanel__left-top-column">
            A
          </div>
          <div className="lowpanel__left-top-column">
            B
          </div>
        </div>
        <div className="lowpanel__left-top-row">
          <div className="lowpanel__left-top-column">
            A
          </div>
          <div className="lowpanel__left-top-column">
            B
          </div>
        </div>
        <div className="lowpanel__left-top-row">
          <div className="lowpanel__left-top-column">
            A
          </div>
          <div className="lowpanel__left-top-column">
            B
          </div>
        </div>
      </div>
      <div className="lowpanel__left-bottom">
        <div className="lowpanel__left-bottom-row">
          A
        </div>
        <div className="lowpanel__left-bottom-row">
          A
        </div>
      </div>
    </div>
    <div className="lowpanel__right">
      <div className="lowpanel__right-row">
        <div className="lowpanel__right-column">
          <Gauger />
        </div>
        <div className="lowpanel__right-column">
          2
        </div>
        <div className="lowpanel__right-column">
          3
        </div>
      </div>
      <div className="lowpanel__right-row">
        <div className="lowpanel__right-column">
          1
        </div>
        <div className="lowpanel__right-column">
          2
        </div>
        <div className="lowpanel__right-column">
          3
        </div>
      </div>
      <div className="lowpanel__right-row">
        <div className="lowpanel__right-column">
          1
        </div>
        <div className="lowpanel__right-column">
          2
        </div>
        <div className="lowpanel__right-column">
          3
        </div>
      </div>
    </div>
  </div>
);

export default LowVoltagePanel;
