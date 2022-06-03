import ComponnentsFont from "../src/components/ComponentsFont/ComponentsFont";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorator = (story) => <ComponnentsFont>{story}</ComponnentsFont>;
