import react from "react";
import Modal from "../Modal";
import GifCardModal from "./GifCardModal";
// custom hooks
import { useBreakpoint } from "../../context/MediaQueries";
// styles
import { Gif } from "./styled";
import PropTypes from "prop-types";

const GifCard = ({ data }) => {
  const { sm } = useBreakpoint();
  // api data
  const { url: lowImg, width: lowWidth } = data.images.fixed_height_downsampled;
  const { width, height, url: mdImg } = data.images.downsized_medium;
  const { title, id } = data;

  const triggerContent = (
    <Gif
      src={sm ? lowImg : mdImg}
      alt={title}
      loading="lazy"
    />
  );

  return (
    <Modal triggerContent={triggerContent} mediaSize={[lowWidth, width]}>
      <GifCardModal data={{ mdImg, title, id, height, width }} />
    </Modal>
  );
};

GifCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GifCard;
