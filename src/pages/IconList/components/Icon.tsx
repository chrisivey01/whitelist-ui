import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Grid)`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 20px !important;
    height: 65px;
    width: 65px;
    flex-wrap: wrap;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const Text = styled(Grid)`
    display: flex;
    justify-content: center;
    padding: 3px;
    font-size: 12px !important;
    color: #fff;
`;

const Image = styled.img`
    width: 100%;
`;

const ImageWrapper = styled(Link)`
    width: 100%;
    text-decoration: none;
`;

type ImagePropsType = {
    image: any;
};

const Icon = ({ image }: ImagePropsType) => {
    return (
        <Container item xs={2}>
            <ImageWrapper to={image.linkTo}>
                <Image src={image.imageSrc} alt={image.name} />
                <Text>{image.name}</Text>
            </ImageWrapper>
        </Container>
    );
};

export default Icon;
