import { FunctionComponent, type CSSProperties } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type SizexlColorPrimaryIconNType = {
  buttonText?: string;

  /** Style props */
  sizexlColorPrimaryIconNBackgroundColor?: CSSProperties["backgroundColor"];
  sizexlColorPrimaryIconNPosition?: CSSProperties["position"];
  sizexlColorPrimaryIconNTop?: string | number | undefined;
  sizexlColorPrimaryIconNLeft?: string | number | undefined;
  sizexlColorPrimaryIconNHeight?: string | number | undefined;
  labelFontWeight?: CSSProperties["fontWeight"];
  labelFontFamily?: CSSProperties["fontFamily"];
};

const SizexlColorprimaryIconnRoot = styled.div<{
  sizexlColorPrimaryIconNBackgroundColor?: Property.BackgroundColor;
  sizexlColorPrimaryIconNPosition?: Property.Position;
  sizexlColorPrimaryIconNTop?: string | number | undefined;
  sizexlColorPrimaryIconNLeft?: string | number | undefined;
  sizexlColorPrimaryIconNHeight?: string | number | undefined;
}>`
  border-radius: var(--br-5xs);
  background-color: var(--primary-600);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--body-md-semibold-size);
  color: var(--white);
  font-family: var(--body-md-semibold);
  background-color: ${(p) => p.sizexlColorPrimaryIconNBackgroundColor};
  position: ${(p) => p.sizexlColorPrimaryIconNPosition};
  top: ${(p) => p.sizexlColorPrimaryIconNTop};
  left: ${(p) => p.sizexlColorPrimaryIconNLeft};
  height: ${(p) => p.sizexlColorPrimaryIconNHeight};
`;

const Label = styled.div<{
  labelFontWeight?: Property.FontWeight;
  labelFontFamily?: Property.FontFamily;
}>`position: relative;
  line-height: 24px;
  font-weight: 600;
  font-weight: ${(p) => p.labelFontWeight}
  font-family: ${(p) => p.labelFontFamily}
`;
const ButtonBase = styled.div`
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-5xl);
`;
// const SizexlColorprimaryIconnRoot = styled.div<{
//   sizexlColorPrimaryIconNBackgroundColor?: Property.BackgroundColor;
//   sizexlColorPrimaryIconNPosition?: Property.Position;
//   sizexlColorPrimaryIconNTop?: Property.Top;
//   sizexlColorPrimaryIconNLeft?: Property.Left;
//   sizexlColorPrimaryIconNHeight?: Property.Height;
// }>`border-radius: var(--br-5xs);
//   background-color: var(--primary-600);
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   font-size: var(--body-md-semibold-size);
//   color: var(--white);
//   font-family: var(--body-md-semibold);
//   background-color: ${(p) => p.sizexlColorPrimaryIconNBackgroundColor}
//   position: ${(p) => p.sizexlColorPrimaryIconNPosition}
//   top: ${(p) => p.sizexlColorPrimaryIconNTop}
//   left: ${(p) => p.sizexlColorPrimaryIconNLeft}
//   height: ${(p) => p.sizexlColorPrimaryIconNHeight}
// `;

const SizexlColorPrimaryIconN: FunctionComponent<
  SizexlColorPrimaryIconNType
> = ({
  buttonText,
  sizexlColorPrimaryIconNBackgroundColor,
  sizexlColorPrimaryIconNPosition,
  sizexlColorPrimaryIconNTop,
  sizexlColorPrimaryIconNLeft,
  sizexlColorPrimaryIconNHeight,
  labelFontWeight,
  labelFontFamily,
}) => {
  return (
    <SizexlColorprimaryIconnRoot
      sizexlColorPrimaryIconNBackgroundColor={
        sizexlColorPrimaryIconNBackgroundColor
      }
      sizexlColorPrimaryIconNPosition={sizexlColorPrimaryIconNPosition}
      sizexlColorPrimaryIconNTop={sizexlColorPrimaryIconNTop}
      sizexlColorPrimaryIconNLeft={sizexlColorPrimaryIconNLeft}
      sizexlColorPrimaryIconNHeight={sizexlColorPrimaryIconNHeight}
    >
      <ButtonBase>
        <Label
          labelFontWeight={labelFontWeight}
          labelFontFamily={labelFontFamily}
        >
          {buttonText}
        </Label>
      </ButtonBase>
    </SizexlColorprimaryIconnRoot>
  );
};

export default SizexlColorPrimaryIconN;
