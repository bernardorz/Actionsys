/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import {
  InputHTMLAttributes,
  ReactNode,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';
import { BsExclamationCircleFill } from 'react-icons/bs';
import {
  Container,
  ContainerLabel,
  Error,
  ErrorContainer,
  TextLabel,
  TextLabelOptional,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  defaultValue?: any;
  optionalLabel?: boolean;
  requiredLabel?: boolean;
  required?: boolean;
  error: string;
  as?: (props: any) => ReactNode;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    disabled,
    optionalLabel,
    requiredLabel,
    required,
    defaultValue,
    error,
    ...rest
  }: InputProps,
  ref,
) => {
  return (
    <>
      <ContainerLabel>
        <TextLabel>{label}</TextLabel>
        {optionalLabel && <TextLabelOptional>(Opcional)</TextLabelOptional>}
        {requiredLabel && required && (
          <TextLabelOptional>(Obrigatório)</TextLabelOptional>
        )}
      </ContainerLabel>

      <Container isError={error !== ''}>
        <input
          type="text"
          name={name}
          autoComplete="off"
          autoSave="off"
          autoCorrect="off"
          autoCapitalize="off"
          disabled={disabled}
          ref={ref}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && (
          <>
            <ErrorContainer>
              <BsExclamationCircleFill size={12} />
              <Error>{error}</Error>
            </ErrorContainer>
          </>
        )}
      </Container>
    </>
  );
};

export const Input = forwardRef(InputBase);
