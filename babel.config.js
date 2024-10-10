module.exports = {
  presets: [
    [
      "@vue/app",
      {
        useBuiltIns: "entry",
        targets: {
          ie: 11,
        },
      },
    ],
  ],
};
