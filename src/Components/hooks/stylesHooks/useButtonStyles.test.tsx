import { CUSTOMButtonProps } from "../../types/CUSTOMButtonProps.types";
import { useButtonStyles } from "./useButtonStyles";

interface Props extends CUSTOMButtonProps {
  isHover: boolean;
}

describe("useButtonStyles", () => {
  it("should return styles object based on input props", () => {
    const props: Props = {
      loading: false,
      disabled: false,
      color: "#0163CC",
      isHover: false,
      btnstyle: "contained",
      textcolor: "#FFFFFF",
      size: "md",
      fontSize: "1rem",
      textTransform: "uppercase",
      customStyle: { marginTop: "1rem" },
    };

    const result = useButtonStyles(props);

    expect(result.styles).toEqual(
      expect.objectContaining({
        backgroundColor: "#0163CC",
        border: "none",
        filter: "brightness(1)",
        opacity: 1,
        color: "#FFFFFF",
        width: "10rem",
        height: "3.125rem",
        textAlign: "center",
        cursor: "pointer",
        fontWeight: 400,
        fontSize: "1rem",
        textTransform: "uppercase",
        minWidth: 64,
        padding: "0.25rem 0.625rem",
        transition: "0.3s",
        borderRadius: 4,
        boxShadow: "0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1), 0rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.8)",
        marginTop: "1rem",
      }),
    );
  });
});
