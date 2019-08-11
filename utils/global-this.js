module.exports.getGlobalThis = () => {
    if(typeof globalThis !== 'undefined') return globalThis;

    if(typeof global !== 'undefined') return global;

    if(typeof window !== 'undefined') return window;

    if(typeof self !== 'undefined') return self;

    if (typeof this !== 'undefined') return this;
    throw new Error('Unable to locate global `this`');
};
