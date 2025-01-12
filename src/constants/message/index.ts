export const MESSAGE_TYPE = {
    REQUEST__NATIVE_TO_CONTENT_SCRIPT: 'REQUEST__NATIVE_TO_CONTENT_SCRIPT',
    RESPONSE__NATIVE_TO_CONTENT_SCRIPT: 'RESPONSE__NATIVE_TO_CONTENT_SCRIPT',
} as const;

export const SUI_LISTENER_TYPE = {
    ACCOUNT_CHANGED: 'accountChange',
    CHAIN_CHANGED: 'networkChange',
} as const;

export const APTOS_LISTENER_TYPE = {
    ACCOUNT_CHANGED: 'accountChange',
    CHAIN_CHANGED: 'networkChange',
} as const;