import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[600px]">
                <div className="hero-content text-center text-neutral-content md:px-40">
                    <div className="bg-black bg-opacity-50 py-16 cinzel-font">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;