const modelOptions = {
    toJSON: {
        virtuals: true,
        transofm:(_, obj) => {
            delete obj._id;
            return obj
        }
    },
    toObject: {
        virtuals: true,
        transofm: (_, obj) => {
            delete obj._id;
            return obj;
        }
    },
    versionKey: false,
    timestamps: true,
};

export default modelOptions;