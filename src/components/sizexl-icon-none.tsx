import { FunctionComponent, type CSSProperties } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type SizexlIconNoneType = {
  buttonText?: string;

  /** Style props */
  labelFontWeight?: CSSProperties["fontWeight"];
  labelFontFamily?: CSSProperties["fontFamily"];
};

const Label = styled.div<{
  labelFontWeight?: Property.FontWeight;
  labelFontFamily?: Property.FontFamily;
}>`position: relative;
  line-height: 24px;
  font-weight: 600;
  font-weight: ${(p) => p.labelFontWeight}
  font-family: ${(p) => p.labelFontFamily}
`;
const SizexlIconnoneRoot = styled.div`
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-5xl);
  text-align: center;
  font-size: var(--body-md-semibold-size);
  color: var(--white);
  font-family: var(--body-md-semibold);
`;

const SizexlIconNone: FunctionComponent<SizexlIconNoneType> = ({
  buttonText,
  labelFontWeight,
  labelFontFamily,
}) => {
  return (
    <SizexlIconnoneRoot>
      <Label
        labelFontWeight={labelFontWeight}
        labelFontFamily={labelFontFamily}
      >
        {buttonText}
      </Label>
    </SizexlIconnoneRoot>
  );
};

export default SizexlIconNone;
