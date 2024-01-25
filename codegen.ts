import type { CodegenConfig } from '@graphql-codegen/cli';

import { API_URL } from './src/shared/config/site.config';

const PATH = './src/shared/api/graphql';
const config: CodegenConfig = {
    schema: `${API_URL}/graphql`,
    generates: {
        [`${PATH}/generated-schema.ts`]: {
            documents: [`${PATH}/**/*.graphql`],
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
        },
    },
};

export default config;
