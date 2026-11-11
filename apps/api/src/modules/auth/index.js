/**
 * Auth Module
 * Responsibilities: User registration, login, Google OAuth, session management, oneTimeTokens.
 * Architecture: Controller -> Service -> Repository -> Model -> Schema
 */
export const authModuleInfo = {
  name: 'auth',
  collections: ['users', 'authSessions', 'oneTimeTokens'],
};
