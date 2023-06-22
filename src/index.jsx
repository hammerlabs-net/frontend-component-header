import Header from './Header';
import messages from './i18n/index';

export function setup(piralApi) {
  piralApi.mergeConfig(
    {
      AUTHN_MINIMAL_HEADER: !!process.env.AUTHN_MINIMAL_HEADER,
    },
    'Header Config',
  );

  piralApi.mergeMessages(messages);
  piralApi.registerExtension('openedx-header', () => (
    <Header
      config={piralApi.getConfig()}
      authenticatedUser={piralApi.getAuthenticatedUser()}
    />
  ));
}
export { messages };
