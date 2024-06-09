
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type props = {
  icon?: IconProp | null;
  iconStyle: React.CSSProperties;
};

function FormFieldAdornmentIcon(props: props) {
  const { icon, iconStyle } = props;
  return (
    <>
      {icon && (
        <span data-testid="start-icon">
          <FontAwesomeIcon style={iconStyle} icon={icon} />
        </span>
      )}
    </>
  );
}

export { FormFieldAdornmentIcon };
