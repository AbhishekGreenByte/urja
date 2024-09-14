import NavBar from "../components/NavBar";

const Home:React.FC = () => {
    return (
        <div>
            <NavBar active="Home"/>
            <div className="absolute top-20 ">
                This is Home Page
            </div>

        </div>
    )
}

export default Home;