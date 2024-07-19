import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./font";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#B89797",
        color: "#4a4a4a",
      },
      "input:focus-visible, textarea:focus-visible": {
        borderColor: "#EFCFE3 !important",
        boxShadow: "0 0 0 1px #EFCFE3 !important",
      },
    },
  },
  fonts: {
    heading: "var(--font-just-me)",
    body: "var(--font-just-me)",
  },
  colors: {
    inputBg: "rgba(255, 255, 255, 0.1)",
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          bg: "inputBg",
          fontFamily: fonts.montserrat.variable,
          borderColor: "rgba(0, 0, 0, 0.1)",
          borderWidth: "1px",
          _hover: { borderColor: "#D1B7B7" },
          _focus: {
            borderColor: "1px #EFCFE3",
            boxShadow: "0 0 0 1px #EFCFE3",
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        bg: "inputBg",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: "1px",
        fontFamily: fonts.montserrat.variable,
        _hover: { borderColor: "#D1B7B7" },
        _focus: { borderColor: "#D1B7B7", boxShadow: "0 0 0 1px #D1B7B7" },
      },
    },
    FormLabel: {
      baseStyle: {
        fontFamily: fonts.montserrat.variable,
      },
    },
    FormErrorMessage: {
      baseStyle: {
        fontFamily: fonts.montserrat.variable,
      },
    },
  },
});

export default theme;
