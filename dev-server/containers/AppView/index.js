import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OfflineModeBadge from '../../../src/components/OfflineModeBadge';
import Environment from '../../../src/components/Environment';
import withPhone from '../../../src/lib/withPhone';

import styles from './styles.scss';

function AppView(props) {
  return (
    <div className={styles.root}>
      {props.children}

      <OfflineModeBadge
        offline={props.offline}
        showOfflineAlert={props.showOfflineAlert}
        currentLocale={props.currentLocale}
      />
      <Environment
        server={props.server}
        enabled={props.enabled}
        onSetData={props.onSetData}
        recordingHost={''}
      />
    </div>
  );
}

AppView.propTypes = {
  children: PropTypes.node,
  server: PropTypes.string,
  enabled: PropTypes.bool,
  onSetData: PropTypes.func,
  currentLocale: PropTypes.string.isRequired,
  offline: PropTypes.bool.isRequired,
  showOfflineAlert: PropTypes.func.isRequired,
};

AppView.defaultProps = {
  children: null,
  server: null,
  enabled: false,
  onSetData: undefined,
};

export default withPhone(connect((state, {
  phone: {
    locale,
    auth,
    environment,
    connectivityMonitor,
    rateLimiter,
  },
}) => ({
  currentLocale: locale.currentLocale,
  server: environment.server,
  enabled: environment.enabled,
  offline: (
    !connectivityMonitor.connectivity ||
    auth.proxyRetryCount > 0 ||
    rateLimiter.throttling
  ),
}), (dispatch, {
  phone: {
    environment,
    connectivityMonitor,
    rateLimiter,
  },
}) => ({
  onSetData: (options) => {
    environment.setData(options);
  },
  showOfflineAlert: () => {
    rateLimiter.showAlert();
    connectivityMonitor.showAlert();
  },
}))(AppView));
