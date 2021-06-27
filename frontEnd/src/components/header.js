import '../css/header.css'
const Header = ({ title, cls }) => {
    return (
        <>
            <h1 className={cls}>{title} </h1>
        </>
    );
}
export default Header;