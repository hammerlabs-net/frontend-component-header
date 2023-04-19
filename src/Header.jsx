import PropTypes from 'prop-types';

import Responsive from 'react-responsive';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

import messages from './Header.messages';

const Header = ({ intl, authenticatedUser, config }) => {
  const mainMenu = [
    {
      type: 'link',
      href: '/dashboard',
      content: intl.formatMessage(messages['header.links.courses']),
    },
  ];

  const orderHistoryItem = {
    type: 'item',
    href: config.ORDER_HISTORY_URL,
    content: intl.formatMessage(messages['header.user.menu.order.history']),
  };

  const userMenu = authenticatedUser === null ? [] : [
    {
      type: 'item',
      href: `${config.BASE_URL}/dashboard`,
      content: intl.formatMessage(messages['header.user.menu.dashboard']),
    },
    {
      type: 'item',
      href: `${config.ACCOUNT_PROFILE_URL}/u/${authenticatedUser.username}`,
      content: intl.formatMessage(messages['header.user.menu.profile']),
    },
    {
      type: 'item',
      href: config.ACCOUNT_SETTINGS_URL,
      content: intl.formatMessage(messages['header.user.menu.account.settings']),
    },
    {
      type: 'item',
      href: config.LOGOUT_URL,
      content: intl.formatMessage(messages['header.user.menu.logout']),
    },
  ];

  // Users should only see Order History if have a ORDER_HISTORY_URL define in the environment.
  if (config.ORDER_HISTORY_URL) {
    userMenu.splice(-1, 0, orderHistoryItem);
  }

  const loggedOutItems = [
    {
      type: 'item',
      href: config.LOGIN_URL,
      content: intl.formatMessage(messages['header.user.menu.login']),
    },
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/register`,
      content: intl.formatMessage(messages['header.user.menu.register']),
    },
  ];

  const props = {
    logo: config.LOGO_URL,
    logoAltText: config.SITE_NAME,
    logoDestination: '/dashboard',
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? authenticatedUser.username : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    mainMenu: config.AUTHN_MINIMAL_HEADER ? [] : mainMenu,
    userMenu: config.AUTHN_MINIMAL_HEADER ? [] : userMenu,
    loggedOutItems: config.AUTHN_MINIMAL_HEADER ? [] : loggedOutItems,
  };

  return (
    <>
      <Responsive maxWidth={768}>
        <MobileHeader {...props} />
      </Responsive>
      <Responsive minWidth={769}>
        <DesktopHeader {...props} />
      </Responsive>
    </>
  );
};

Header.propTypes = {
  intl: intlShape.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  authenticatedUser: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  config: PropTypes.object.isRequired,
};

Header.defaultProps = {
  authenticatedUser: null,

};

export default injectIntl(Header);
