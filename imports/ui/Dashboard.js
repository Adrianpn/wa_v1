import React from 'react';
import PrivateHeader from './PrivateHeader';
import Menu from './Menu';
import WorshipTeamPanel from './WorshipTeamPanel/WorshipTeamPanel';
import ServiceRundown from './WorshipTeamPanel/ServiceRundown';

export default () => {
  return(
    <div>
      <PrivateHeader title="Worship Angel"/>
      <div className="page-content">
        <div className="page-content__sidebar">
          <Menu/>
        </div>
        <div className="page-content__main">
          <WorshipTeamPanel/>
          <ServiceRundown/>
        </div>
      </div>
    </div>
  );
};
