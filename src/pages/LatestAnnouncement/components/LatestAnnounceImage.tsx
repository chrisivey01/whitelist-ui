import styled from "styled-components";
import latestAnnounce from "../../../assets/images/latest_announcement.svg";

const Image = styled.img`
    filter: invert(40%) sepia(120%) saturate(69);
`;
const LatestAnnounceImage = () => {
    return <Image src={latestAnnounce} alt="latest" />;
};

export default LatestAnnounceImage;
