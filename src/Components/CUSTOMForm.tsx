import React from "react";
import { faDollar, faPercent } from "@fortawesome/free-solid-svg-icons";
import CUSTOMButton from "./CUSTOMButton";
import CUSTOMFormField from "./CUSTOMFormField";
import { CUSTOMFormProps } from "./types/CUSTOMFormProps.types";
import { buttonGroupStyles, formStyles } from "./styles/formStyles";

const CUSTOMForm = (props: CUSTOMFormProps) => {
  const { width = "100%", onSubmit, ...rest } = props;

  return (
    <div style={buttonGroupStyles}>
      <form
        data-testid="custom-form"
        style={formStyles}
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmit) {
            onSubmit(e);
          }
        }}
        {...rest}
      >
        <CUSTOMFormField label="Price" type="number" fieldwidth={width} name="price" startIcon={faDollar} />
        <CUSTOMFormField label="Qty" type="number" fieldwidth={width} name="quantity" />
        <CUSTOMFormField
          label="Discount(for total items)"
          type="number"
          fieldwidth={width}
          name="discount"
          endIcon={faPercent}
        />
        <span style={{ marginTop: "1rem" }}>
          <CUSTOMButton type="submit">Submit</CUSTOMButton>
        </span>
      </form>
    </div>
  );
};

export { CUSTOMForm };
