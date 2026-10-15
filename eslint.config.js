//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [...tanstackConfig];
