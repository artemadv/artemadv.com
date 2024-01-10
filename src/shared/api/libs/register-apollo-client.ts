import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

import { makeClient } from './make-apollo-client';

export const { getClient } = registerApolloClient(makeClient);
