
import krypt from "../img/deportes.jpg";
import humblefood from "../img/terapia-de-biomagnetismo.jpg";
import blackFlag from "../img/ecommerce-.jpg";
import airBalloon from "../img/e-commerce.jpg";
import github from "../img/github.png";

const Work = () => {
    return (
        <div className="container mt-44 mx-auto flex justify-between items-center px-4 lg:px-8 md:px-14 w-full">
            <section className="w-full">
                <h2 id="work" className="secondary-title">
                    Mi trabajo
                </h2>
                <p className="section-paragraph">
                    He tenido la oportunidad de crear algunas páginas utilizando
                    tecnologías tanto de frontend como de backend.
                </p>

                {/* <!-- Works--> */}
                <div className="space-y-16 my-16">
                    <div className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col">
                        {/* <!-- App info --> */}
                        <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                            {/* <!-- App logo --> */}
                            <div className="mb-6 flex items-center justify-center">
                                <img
                                    src={krypt}
                                    alt="blackFlag"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center text-center">
                                <div className="w-full lg:w-auto flex flex-wrap justify-center gap-3 mt-6 mb-8">
                                    <div className="badge">Frontend</div>
                                    <div className="badge">Html</div>
                                    <div className="badge">React</div>
                                    <div className="badge">Boostrap</div>
                                    <div className="badge">NodeJS</div>
                                    <div className="badge">Css</div>
                                </div>

                                <p className="text-secondary">
                                    Es una Aplicación para el que tenga un
                                    negocio de ventas de articulos de deportes y
                                    electrodomesticos.
                                </p>
                                <div className="flex flex-col md:flex-row justify-center">
                                    <a
                                        href="https://gerardodamian.github.io/piercecommerce/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                                    >
                                        <p>Ir al sitio</p>
                                        <div>
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/gerardodamian/piercecommerce.git"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                                    >
                                        <p>Repositorio</p>
                                        <div>
                                            <img
                                                src={github}
                                                alt="GitHub"
                                                className="w-6"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col">
                        {/* <!-- App info --> */}
                        <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                            {/* <!-- App logo --> */}
                            <div className="mb-6 flex items-center justify-center">
                                <img
                                    src={humblefood}
                                    alt="blackFlag"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h3 className="text-white text-3xl font-semibold">
                                    Biomagnetimo Medicinal
                                </h3>

                                <div className="w-full lg:w-auto flex flex-wrap justify-center gap-3 mt-6 mb-8">
                                    <div className="badge">Frontend</div>

                                    <div className="badge">Html</div>
                                    <div className="badge">Css</div>
                                    <div className="badge">TypeScript</div>
                                    <div className="badge">Boostrap</div>

                                    <div className="badge">NodeJS</div>
                                </div>

                                <p className="text-secondary">
                                    Desarrollo de una pagina web para un
                                    terapeuta que quiera informar a sus
                                    pacientes del tratamiento, como sacar turnos
                                    y como llegar hasta sus consultorios.
                                </p>
                                <div className="flex flex-col md:flex-row justify-center">
                                    <a
                                        href="https://gerardodamian.github.io/Proyecto-final-gerardo-montini/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                                    >
                                        <p>Ir al sitio</p>
                                        <div>
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/gerardodamian/Proyecto-final-gerardo-montini.git"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                                    >
                                        <p>Repositorio</p>
                                        <div>
                                            <img
                                                src={github}
                                                alt="GitHub"
                                                className="w-6"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col">
                        {/* <!-- App info --> */}
                        <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                            {/* <!-- App logo --> */}
                            <div className="mb-6 flex items-center justify-center">
                                <img src={blackFlag} alt="blackFlag" />
                            </div>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h3 className="text-white text-3xl font-semibold">
                                    E-COMMERCE "Deportes Norte "
                                </h3>

                                <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                    <div className="badge">Frontend</div>

                                    <div className="badge">NodeJS</div>
                                    <div className="badge">Html</div>
                                    <div className="badge">Css</div>
                                    <div className="badge">Javascript</div>
                                    <div className="badge">Boostrap</div>
                                </div>

                                <p className="text-secondary">
                                    Desarrollo de un E-Commerce enfocado a los
                                    rubros que realizan ventas de productos de
                                    todo tipo. La idea detrás del proyecto fue
                                    realizar un plataforma interactiva que
                                    permita beneficiar a las personas que deseen
                                    comprar articulos al mejor precio como
                                    también los usuarios que tengan un negocio
                                    de ventas (Supermercados, almacenes, bares,
                                    restaurantes, etc. ) y quieran vender sus
                                    productos por medio de la pagina.
                                </p>
                                <div className="flex flex-col md:flex-row justify-center">
                                    <a
                                        href="https://gerardodamian.github.io/entrega-proyecto-final-montini-gerardo/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                                    >
                                        <p>Ir al sitio</p>
                                        <div>
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/gerardodamian/entrega-proyecto-final-montini-gerardo.git"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                                    >
                                        <p>Repositorio</p>
                                        <div>
                                            <img
                                                src={github}
                                                alt="GitHub"
                                                className="w-6"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col">
                        {/* <!-- App logo --> */}
                        <div className="mb-6 flex items-center justify-center">
                            <img
                                src={airBalloon}
                                alt="airBalloon"
                                className="w-32"
                            />
                        </div>

                        {/* <!-- App info --> */}
                        <div className="flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-3xl font-semibold">
                                E-commerce con carrito de compras
                            </h3>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div className="badge">Frontend</div>
                                <div className="badge">React</div>
                                <div className="badge">Boostrap</div>
                            </div>

                            <p className="text-secondary">
                                Single Page Application donde se puede comprar
                                sus productos agregando todo en un carrito de
                                compras.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center">
                                <a
                                    href="https://pre-entrega2-montini-gerardo.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                                >
                                    <p>Ir al sitio</p>
                                    <div>
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/gerardodamian/EntregaFinal-Montini-Gerardo.git"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                                >
                                    <p>Repositorio</p>
                                    <div>
                                        <img
                                            src={github}
                                            alt="GitHub"
                                            className="w-6"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
