
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  title?: string | null;
  children?: string;
  loading?: boolean;
  fontSize?: string;
  startIcon?: IconProp | null;
  endIcon?: IconProp | null;
};

function CUSTOMButtonChildren(props: props) {
  const { title, children, startIcon, endIcon, loading, fontSize } = props;

  return (
    <>
      {loading ? (
        <FontAwesomeIcon style={{ fontSize, color: "white" }} icon={faSpinner} spin />
      ) : (
        startIcon && <FontAwesomeIcon style={{ marginRight: "0.625rem", fontSize }} icon={startIcon} />
      )}

      {loading ? "" : title ?? children}
      {endIcon && <FontAwesomeIcon style={{ marginLeft: "0.625rem", fontSize }} icon={endIcon} />}
    </>
  );
}

export { CUSTOMButtonChildren };
