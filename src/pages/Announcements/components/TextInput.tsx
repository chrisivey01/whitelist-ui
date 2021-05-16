import { Fab, Grid, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { ChangeEvent, Dispatch, FC, MouseEvent, SetStateAction } from "react";
import styled from "styled-components";

const InputContainer = styled(Grid)`
    padding: 10px;
    justify-content: flex-end;
    background-color: #233044;
`;

const InputWrapper = styled(Grid)`
    padding-right: 10px;
`;

const TextBox = styled(TextField)`
    background: rgba(255, 255, 255, 0.08);
    width: 100%;
    .MuiFormLabel-root {
        color: #fff !important;
    }
    input {
        width: 100%;
        color: #fff;
        font-size: 12px;
    }
`;

const Button = styled(Fab)`
    padding: 10px;

    &.MuiFab-root {
        background-color: #005cb9;

        &.MuiSvgIcon-root {
            color: #fff;
        }
    }
`;

type TextPropsType = {
    text: string;
    setText: Dispatch<SetStateAction<string>>;
    clickHandler: (e: MouseEvent<HTMLElement>) => void;
};

const TextInput: FC<TextPropsType> = ({ text, setText, clickHandler }) => {
    return (
        <InputContainer container>
            <InputWrapper item xs={9}>
                <TextBox
                    label="Whats on your mind?"
                    variant="filled"
                    color="primary"
                    value={text}
                    onChange={(event: ChangeEvent<{ value: string }>) =>
                        setText(event.target.value)
                    }
                />
            </InputWrapper>
            <InputWrapper item>
                <Button
                    size={"medium"}
                    onClick={(event) => clickHandler(event)}
                >
                    <SendIcon />
                </Button>
            </InputWrapper>
        </InputContainer>
    );
};

export default TextInput;
