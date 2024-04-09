import SvgIcon from '../assets/astro-icon-light.svg';
import './WithSvgImage.css';

const WithSvgImage = () => {
	return (
		<div className="svg-image-container">
			<img src={SvgIcon.src} alt="" width={170} height={214} />
		</div>
	);
};

export default WithSvgImage;
