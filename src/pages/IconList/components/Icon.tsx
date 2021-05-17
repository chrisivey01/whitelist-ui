import { Grid } from "@material-ui/core";
import styled from "styled-components";

const Container = styled(Grid)`
    display: block;
    justify-content: center;
    padding: 20px;
`;

const ImgWrapper = styled(Grid)`
    width: 75px;
    height: 75px;
`;

type ImagePropsType = {
    image: any;
};

const Icon = ({ image }: ImagePropsType) => {
    return (
        <Container>
            <ImgWrapper>
                <img src={image.imageSrc} alt={image.name} />
            </ImgWrapper>
            <Grid>{image.name}</Grid>
        </Container>
    );
};

export default Icon;
